"""Regenerate OG images for doctors using current cutout PNGs."""
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
OUT_DIR = 'images/og'
CUTOUT_DIR = '회원 프로필 사진_누끼'

MEMBERS = [
    ('bae-jungmin', '배정민', '힐하우스피부과의원 강남점'),
    ('kim-hongseok', '김홍석', '보스피부과의원'),
    ('lee-haeun', '이하은', '포레피부과의원'),
    ('gye-jiwon', '계지원', '휴먼피부과의원 평택점'),
    ('shin-jiyeon', '신지연', '헤브피부과의원 신사점'),
    ('jung-hanmi', '정한미', '힐하우스피부과의원 강남점'),
    ('park-saemi', '박새미', '힐하우스피부과의원 강남점'),
    ('nam-chanhee', '남찬희', '휴먼피부과의원 평택점'),
    ('park-mingi', '박민기', '휴먼피부과의원 평택점'),
    ('lee-seolhee', '이설희', '헤브피부과의원 신사점'),
    ('jung-jongheon', '정종헌', '헤브피부과의원 신사점'),
]

FONT_PATH = 'C:/Windows/Fonts/malgunbd.ttf'
FONT_REG = 'C:/Windows/Fonts/malgun.ttf'


def make_gradient():
    img = Image.new('RGB', (W, H), (200, 207, 213))
    px = img.load()
    cx, cy = int(W * 0.7), int(H * 0.3)
    max_r = ((W - cx) ** 2 + (H - cy) ** 2) ** 0.5
    for y in range(H):
        for x in range(W):
            d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            t = min(d / max_r, 1.0)
            if t < 0.45:
                k = t / 0.45
                r = int(232 + (200 - 232) * k)
                g = int(236 + (207 - 236) * k)
                b = int(239 + (213 - 239) * k)
            else:
                k = (t - 0.45) / 0.55
                r = int(200 + (163 - 200) * k)
                g = int(207 + (170 - 207) * k)
                b = int(213 + (177 - 213) * k)
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
