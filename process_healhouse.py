"""힐하우스피부과 강남점 병원 사진 + 장비 사진 처리.

- 병원 사진: EXIF 회전 → 긴 변 1600px → 병원 소개 이미지/healhouse-gangnam/01.jpg...
- 장비 사진: 안티에이징 → 레이저 → 치료기 순으로 정렬 → 장비 소개 이미지/healhouse-gangnam/01.jpg...
  각 파일 이름에서 카테고리/장비명 추출
"""
import re, shutil
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).parent
HOSP_SRC = ROOT / '병원 소개 이미지' / '힐하우스피부과 강남점'
EQUIP_SRC = ROOT / '장비 소개' / '힐하우스피부과 강남점'
HOSP_DST = ROOT / '병원 소개 이미지' / 'healhouse-gangnam'
EQUIP_DST = ROOT / '장비 소개 이미지' / 'healhouse-gangnam'

HOSP_DST.mkdir(parents=True, exist_ok=True)
EQUIP_DST.mkdir(parents=True, exist_ok=True)

MAX_LONG = 1600
QUALITY = 85


def process_one(src, dst):
    img = Image.open(src)
    img = ImageOps.exif_transpose(img)
    if img.mode in ('RGBA', 'LA', 'P'):
        bg = Image.new('RGB', img.size, (255, 255, 255))
        if img.mode == 'P':
            img = img.convert('RGBA')
        if img.mode in ('RGBA', 'LA'):
            bg.paste(img, mask=img.split()[-1])
        else:
            bg.paste(img)
        img = bg
    elif img.mode != 'RGB':
        img = img.convert('RGB')
    w, h = img.size
    if max(w, h) > MAX_LONG:
        if w >= h:
            nw = MAX_LONG; nh = int(h * MAX_LONG / w)
        else:
            nh = MAX_LONG; nw = int(w * MAX_LONG / h)
        img = img.resize((nw, nh), Image.LANCZOS)
    img.save(dst, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
    return img.size


# ─── 1. 병원 사진 ───
hosp_files = sorted([f for f in HOSP_SRC.iterdir() if f.suffix.lower() in ('.jpg', '.jpeg', '.png') and not f.name.lower().startswith('thumbs')])
print(f'Hospital photos: {len(hosp_files)}')
for i, src in enumerate(hosp_files, 1):
    dst = HOSP_DST / f'{i:02d}.jpg'
    size = process_one(src, dst)
    print(f'  {dst.name}: {size}')


# ─── 2. 장비 사진 ───
# 카테고리: 안티에이징 → 레이저 → 치료기
# 파일명 패턴: "카테고리 장비명.ext" 또는 "장비명.ext"(=치료기로 분류)
CAT_ORDER = ['안티에이징', '레이저', '치료기']
SPECIAL_THERAPY = ['FN광선', 'HF광선']  # 카테고리 접두어 없지만 치료기로 분류

def parse_eq(filename):
    """파일명에서 카테고리, 장비명 추출."""
    stem = filename
    # 확장자 제거
    stem = re.sub(r'\.(png|jpg|jpeg|PNG|JPG|JPEG)$', '', stem)
    # " (숫자)" 또는 "_숫자" 접미사 제거 (Windows 복사본 표시)
    stem = re.sub(r'\s*\(\d+\)\s*$', '', stem)
    stem = re.sub(r'_\d+$', '', stem)
    stem = stem.strip()
    for cat in CAT_ORDER:
        if stem.startswith(cat + ' '):
            return cat, stem[len(cat)+1:].strip()
        if stem.startswith(cat):  # ex) "안티에이징알티트"
            rest = stem[len(cat):].strip()
            if rest:
                return cat, rest
    # 카테고리 없음 — 광선기는 치료기로
    for sp in SPECIAL_THERAPY:
        if stem.startswith(sp):
            return '치료기', stem
    return '기타', stem


eq_files = [f for f in EQUIP_SRC.iterdir() if f.suffix.lower() in ('.jpg', '.jpeg', '.png')]
print(f'\nEquipment files: {len(eq_files)}')

# 분류
buckets = {c: [] for c in CAT_ORDER + ['기타']}
for f in eq_files:
    cat, name = parse_eq(f.name)
    buckets[cat].append((name, f))

# 각 카테고리 내부 알파벳 정렬
for cat in buckets:
    buckets[cat].sort(key=lambda x: x[0])

# 카테고리 순서대로 평탄화하면서 인덱싱
equipment_list = []  # for js
idx = 0
for cat in CAT_ORDER + ['기타']:
    for name, src in buckets[cat]:
        idx += 1
        dst = EQUIP_DST / f'{idx:02d}.jpg'
        size = process_one(src, dst)
        rel_path = f'장비 소개 이미지/healhouse-gangnam/{idx:02d}.jpg'
        equipment_list.append({
            'name': name,
            'category': cat,
            'image': rel_path,
            'src_filename': src.name,
        })
        print(f'  [{idx:02d}] {cat}/{name}  ← {src.name}')

# JSON 저장 (다음 단계에서 사용)
import json
with open('D:/tmp/healhouse_equipment.json', 'w', encoding='utf-8') as f:
    json.dump(equipment_list, f, ensure_ascii=False, indent=2)
print(f'\n→ equipment list saved ({len(equipment_list)} items)')

# Hospital photos JSON
hosp_count = len(hosp_files)
with open('D:/tmp/healhouse_hospital.json', 'w', encoding='utf-8') as f:
    json.dump({'count': hosp_count}, f)
print(f'→ hospital count: {hosp_count}')
