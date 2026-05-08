"""클리닉 소개 사진 처리 (셀로디 강서점).

- EXIF auto-rotate
- 긴 변 1600px로 리사이즈
- JPEG quality 82
- 출력: 병원 소개 이미지/{clinic_id}/{idx}.jpg
"""
from PIL import Image, ImageOps
from pathlib import Path

ROOT = Path(__file__).parent
SRC = ROOT / '병원 소개' / '셀로디 피부과'
DST_DIR = ROOT / '병원 소개 이미지' / 'celody-gangseo'
DST_DIR.mkdir(parents=True, exist_ok=True)

MAX_LONG = 1600
QUALITY = 82

src_files = sorted(SRC.glob('*.jpg'))
print(f'source files: {len(src_files)}')

for i, src in enumerate(src_files, 1):
    img = Image.open(src)
    img = ImageOps.exif_transpose(img)  # auto-rotate
    if img.mode != 'RGB':
        img = img.convert('RGB')
    w, h = img.size
    if max(w, h) > MAX_LONG:
        if w >= h:
            new_w = MAX_LONG
            new_h = int(h * MAX_LONG / w)
        else:
            new_h = MAX_LONG
            new_w = int(w * MAX_LONG / h)
        img = img.resize((new_w, new_h), Image.LANCZOS)
    out = DST_DIR / f'{i:02d}.jpg'
    img.save(out, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
    print(f'  {out.name}: {img.size}')

print(f'\n→ {DST_DIR}')
