"""힐하우스 강남점 장비 사진 31장에 rembg 적용 (배경 제거).
원본 jpg → 같은 폴더 png로 저장. 데이터에서 .jpg → .png로 교체."""
import io
from pathlib import Path
from PIL import Image
from rembg import remove

SRC_DIR = Path('장비 소개 이미지/healhouse-gangnam')
files = sorted(SRC_DIR.glob('*.jpg'))
print(f'Processing {len(files)} files...')

for f in files:
    with open(f, 'rb') as fh:
        data = fh.read()
    out_bytes = remove(data)
    img = Image.open(io.BytesIO(out_bytes)).convert('RGBA')
    # Crop to content bbox + margin for tighter framing
    bbox = img.getbbox()
    if bbox:
        x0, y0, x1, y1 = bbox
        # Add 5% margin
        m = max(10, int(min(x1-x0, y1-y0) * 0.05))
        x0 = max(0, x0 - m); y0 = max(0, y0 - m)
        x1 = min(img.width, x1 + m); y1 = min(img.height, y1 + m)
        img = img.crop((x0, y0, x1, y1))
    out_path = f.with_suffix('.png')
    img.save(out_path, 'PNG', optimize=True)
    print(f'  {f.name} → {out_path.name} ({img.size})')

print('Done.')
