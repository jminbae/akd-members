"""Regenerate OG images for doctors using current cutout PNGs."""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT_DIR = 'images/og'
CUTOUT_DIR = '회원 프로필 사진_누끼'

def _load_members():
    """Read MEMBERS list from check.json (data dump from app.js)."""
    import json, subprocess
    from pathlib import Path
    here = Path(__file__).parent
    cj = Path('D:/tmp/check.json')
    if not cj.exists():
        # regenerate via export_data.js
        subprocess.run(['node', str(here / 'export_data.js')],
                       stdout=open(cj, 'w', encoding='utf-8'), check=True)
    data = json.load(open(cj, encoding='utf-8'))
    hosp = {h['id']: h.get('name', '') for h in data['HOSPITALS']}
    out = []
    for m in data['MEMBERS']:
        hospital_name = hosp.get(m.get('hospitalId', ''), '')
        out.append((m['id'], m['name'], hospital_name))
    return out


MEMBERS = _load_members()

FONT_PATH = 'C:/Windows/Fonts/malgunbd.ttf'
FONT_REG = 'C:/Windows/Fonts/malgun.ttf'


def make_gradient():
    # default.jpg 톤과 일치하는 밝은 블루-화이트 그라디언트
    img = Image.new('RGB', (W, H), (235, 241, 247))
    px = img.load()
    cx, cy = int(W * 0.7), int(H * 0.3)
    max_r = ((W - cx) ** 2 + (H - cy) ** 2) ** 0.5
    for y in range(H):
        for x in range(W):
            d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            t = min(d / max_r, 1.0)
            if t < 0.45:
                k = t / 0.45
                r = int(250 + (240 - 250) * k)
                g = int(252 + (245 - 252) * k)
                b = int(255 + (250 - 255) * k)
            else:
                k = (t - 0.45) / 0.55
                r = int(240 + (215 - 240) * k)
                g = int(245 + (224 - 245) * k)
                b = int(250 + (236 - 250) * k)
            px[x, y] = (r, g, b)
    return img


def draw_badge(img):
    draw = ImageDraw.Draw(img)
    bx, by, bw, bh = 40, 36, 96, 96
    draw.rounded_rectangle((bx, by, bx + bw, by + bh), radius=6, fill=(229, 56, 56))
    f = ImageFont.truetype(FONT_PATH, 22)
    draw.text((bx + bw / 2, by + 30), '피부과', font=f, fill='white', anchor='mm')
    draw.text((bx + bw / 2, by + 62), '전문의', font=f, fill='white', anchor='mm')


def draw_text(img, name, hospital):
    draw = ImageDraw.Draw(img)
    f_h = ImageFont.truetype(FONT_REG, 30)
    draw.text((60, 430), hospital, font=f_h, fill=(70, 78, 90))
    f_n = ImageFont.truetype(FONT_PATH, 92)
    draw.text((60, 478), name, font=f_n, fill=(36, 78, 145))


def draw_photo(img, photo_path):
    if not os.path.exists(photo_path):
        return
    p = Image.open(photo_path).convert('RGBA')
    pw, ph = p.size
    target_h = int(H * 0.92)
    scale = target_h / ph
    new_w = int(pw * scale)
    new_h = target_h
    p2 = p.resize((new_w, new_h), Image.LANCZOS)
    x = int(W * 0.72) - new_w // 2
    y = H - new_h
    img.paste(p2, (x, y), p2)


bg_template = make_gradient()
draw_badge(bg_template)

os.makedirs(OUT_DIR, exist_ok=True)
for mid, name, hospital in MEMBERS:
    img = bg_template.copy()
    draw_text(img, name, hospital)
    photo_path = f'{CUTOUT_DIR}/{mid}.png'
    draw_photo(img, photo_path)
    out = f'{OUT_DIR}/member-{mid}.jpg'
    img.save(out, 'JPEG', quality=88, optimize=True)
    print(f'OK: {out}')

print('Done.')
