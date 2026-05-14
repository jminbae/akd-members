"""hero 슬라이더용 작은 사본 생성 (긴 변 1100px)."""
from PIL import Image
from pathlib import Path

SRC = Path('병원 소개 이미지/healhouse-gangnam')
# 01.jpg, 02.jpg, 03.jpg를 hero용으로 압축 (긴 변 1100px, quality 80)
for n in ['01.jpg', '02.jpg', '03.jpg']:
    src = SRC / n
    if not src.exists():
        continue
    img = Image.open(src)
    w, h = img.size
    if max(w, h) > 1100:
        if w >= h:
            nw = 1100; nh = int(h * 1100 / w)
        else:
            nh = 1100; nw = int(w * 1100 / h)
        img = img.resize((nw, nh), Image.LANCZOS)
    img.save(src, 'JPEG', quality=80, optimize=True, progressive=True)
    print(f'{n}: {img.size}, {src.stat().st_size // 1024}KB')
