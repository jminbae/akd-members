"""Process card thumbnails for new members.
Copies source photo to 회원 프로필 사진/{name}.jpg at 560x800 with face-aware center crop.
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).parent
SRC = ROOT / '회원 프로필 사진 원본(수정하지 말것)'
DST = ROOT / '회원 프로필 사진'
DST.mkdir(exist_ok=True)

W, H = 560, 800

matches = json.load(open('D:/tmp/photo_match.json', encoding='utf-8'))['matches']

# Need member id → name map to resolve final filename
data = json.load(open('D:/tmp/check.json', encoding='utf-8'))
id_to_name = {m['id']: m['name'] for m in data['MEMBERS']}

count = 0
for mid, src_filename in matches.items():
    name = id_to_name[mid]
    src_path = SRC / src_filename
    dst_path = DST / f'{name}.jpg'
    if dst_path.exists():
        # Skip if already exists (preserve curated thumbnails)
        continue
    try:
        img = Image.open(src_path)
        # Auto-rotate based on EXIF
        img = ImageOps.exif_transpose(img)
        # Convert to RGB (drop alpha by compositing on white)
        if img.mode in ('RGBA', 'LA'):
            bg = Image.new('RGB', img.size, (245, 248, 252))
            bg.paste(img, mask=img.split()[-1])
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        # Center-crop to 560x800 aspect (0.7), then resize.
        sw, sh = img.size
        target_ratio = W / H  # 0.7
        cur_ratio = sw / sh
        if cur_ratio > target_ratio:
            # Source wider — crop width
            new_w = int(sh * target_ratio)
            x = (sw - new_w) // 2
            img = img.crop((x, 0, x + new_w, sh))
        else:
            # Source taller — crop height (favor top, faces are usually upper)
            new_h = int(sw / target_ratio)
            # Use top 80% of crop area to preserve face
            y = int((sh - new_h) * 0.25)  # 25% from top
            img = img.crop((0, y, sw, y + new_h))
        img = img.resize((W, H), Image.LANCZOS)
        img.save(dst_path, 'JPEG', quality=88, optimize=True)
        count += 1
    except Exception as e:
        print(f'ERROR {mid} ({src_filename}): {e}')

print(f'Generated {count} card thumbnails')
