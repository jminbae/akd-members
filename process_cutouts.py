"""Run rembg for new members.
For each new member with a source photo:
  - Run rembg
  - Resize to 600 width
  - Pad top transparent area to 22% (matching existing style)
  - Save to 회원 프로필 사진_누끼/{id}.png
Skip if cutout already exists.
"""
import json, sys, time
from pathlib import Path
from PIL import Image
from rembg import remove
import io

ROOT = Path(__file__).parent
SRC = ROOT / '회원 프로필 사진 원본(수정하지 말것)'
CUTOUT_DIR = ROOT / '회원 프로필 사진_누끼'
CUTOUT_DIR.mkdir(exist_ok=True)

matches = json.load(open('D:/tmp/photo_match.json', encoding='utf-8'))['matches']
data = json.load(open('D:/tmp/check.json', encoding='utf-8'))
id_to_name = {m['id']: m['name'] for m in data['MEMBERS']}

W = 600
TOP_RATIO = 0.22  # 22% top padding (so head appears around 215/975 = 22% from top)

todo = []
for mid, src_filename in matches.items():
    out_path = CUTOUT_DIR / f'{mid}.png'
    if out_path.exists():
        continue
    todo.append((mid, src_filename))

print(f'Total to process: {len(todo)}')
sys.stdout.flush()

for i, (mid, src_filename) in enumerate(todo, 1):
    src_path = SRC / src_filename
    out_path = CUTOUT_DIR / f'{mid}.png'
    t0 = time.time()
    try:
        with open(src_path, 'rb') as f:
            data_in = f.read()
        out = remove(data_in)
        img = Image.open(io.BytesIO(out)).convert('RGBA')
        # Resize to width 600
        w0, h0 = img.size
        new_h = int(h0 * W / w0)
        img = img.resize((W, new_h), Image.LANCZOS)
        # Compute padding so content top is at TOP_RATIO of total canvas
        bbox = img.getbbox()
        if bbox:
            content_top = bbox[1]
            # Final canvas height should make content_top = TOP_RATIO * H
            # H = (content_top + (1-TOP_RATIO) * remaining)
            # Easier: pad top so total = new_h + pad_top, and (content_top+pad_top)/total = TOP_RATIO
            # → content_top + pad_top = TOP_RATIO * (new_h + pad_top)
            # → content_top + pad_top - TOP_RATIO*pad_top = TOP_RATIO*new_h
            # → pad_top * (1 - TOP_RATIO) = TOP_RATIO*new_h - content_top
            # → pad_top = (TOP_RATIO*new_h - content_top) / (1-TOP_RATIO)
            pad_top = max(0, int((TOP_RATIO * new_h - content_top) / (1 - TOP_RATIO)))
            if pad_top > 0:
                final_h = new_h + pad_top
                canvas = Image.new('RGBA', (W, final_h), (0, 0, 0, 0))
                canvas.paste(img, (0, pad_top))
                img = canvas
        img.save(out_path, 'PNG', optimize=True)
        dt = time.time() - t0
        print(f'[{i}/{len(todo)}] {mid:25s} ({src_filename}) -> {img.size}, {dt:.1f}s')
        sys.stdout.flush()
    except Exception as e:
        print(f'[{i}/{len(todo)}] ERROR {mid}: {e}')
        sys.stdout.flush()

print('Done.')
