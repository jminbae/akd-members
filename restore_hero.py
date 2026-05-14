"""hero 사진 01-03을 원본에서 재처리해서 원래 용량으로 복원 (1600px, quality 85)."""
from PIL import Image, ImageOps
from pathlib import Path

SRC = Path('병원 소개 이미지/힐하우스피부과 강남점')
DST = Path('병원 소개 이미지/healhouse-gangnam')

src_files = sorted([f for f in SRC.iterdir()
                    if f.suffix.lower() in ('.jpg', '.jpeg', '.png')
                    and not f.name.lower().startswith('thumbs')])
print(f'Source files: {len(src_files)}')

# 01.jpg, 02.jpg, 03.jpg만 재처리 (원래 process_healhouse.py 로직과 동일)
for i in range(1, 4):
    if i > len(src_files): break
    src = src_files[i - 1]
    img = Image.open(src)
    img = ImageOps.exif_transpose(img)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    w, h = img.size
    MAX = 1600
    if max(w, h) > MAX:
        if w >= h:
            nw = MAX; nh = int(h * MAX / w)
        else:
            nh = MAX; nw = int(w * MAX / h)
        img = img.resize((nw, nh), Image.LANCZOS)
    dst = DST / f'{i:02d}.jpg'
    img.save(dst, 'JPEG', quality=85, optimize=True, progressive=True)
    print(f'{dst.name}: {img.size}, {dst.stat().st_size // 1024}KB')
