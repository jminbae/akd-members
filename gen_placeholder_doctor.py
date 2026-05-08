"""사진 없는 원장님용 silhouette placeholder 이미지 생성.

- 회원 프로필 사진/_placeholder.jpg  : 560x800 카드 썸네일 (밝은 배경 + 어두운 실루엣)
- 회원 프로필 사진_누끼/_placeholder.png : 600x975 투명 + 실루엣 (히어로 사진용)
"""
from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path

ROOT = Path(__file__).parent

def make_silhouette(canvas_w, canvas_h, transparent_bg=False, head_top_ratio=0.18):
    """실루엣(머리+어깨) 이미지 생성."""
    if transparent_bg:
        img = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    else:
        # 카드용 밝은 그라디언트 배경
        img = Image.new('RGB', (canvas_w, canvas_h), (240, 244, 250))
        # vertical gradient: 위(밝음) → 아래(약간 더 깊은 블루-그레이)
        px = img.load()
        for y in range(canvas_h):
            t = y / canvas_h
            r = int(240 + (220 - 240) * t)
            g = int(244 + (228 - 244) * t)
            b = int(250 + (236 - 250) * t)
            for x in range(canvas_w):
                px[x, y] = (r, g, b)

    # 실루엣 그리기 (별도 layer에)
    sil = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(sil)

    # 실루엣 색상 (살짝 진한 블루-그레이)
    sil_color = (165, 178, 195, 230)

    cx = canvas_w // 2
    # head: 원 (지름 = canvas_w * 0.42)
    head_d = int(canvas_w * 0.42)
    head_top = int(canvas_h * head_top_ratio)
    head_bottom = head_top + head_d
    draw.ellipse(
        (cx - head_d//2, head_top, cx + head_d//2, head_bottom),
        fill=sil_color,
    )

    # neck (작은 사각형)
    neck_w = int(head_d * 0.35)
    neck_top = head_bottom - 10
    neck_bottom = neck_top + int(canvas_h * 0.05)
    draw.rectangle(
        (cx - neck_w//2, neck_top, cx + neck_w//2, neck_bottom),
        fill=sil_color,
    )

    # shoulders/torso: 큰 원호 (어깨 곡선)
    torso_top = neck_bottom - 5
    torso_w = int(canvas_w * 0.95)
    # 어깨 라인을 ellipse로 표현
    draw.ellipse(
        (cx - torso_w//2, torso_top, cx + torso_w//2, torso_top + canvas_h),
        fill=sil_color,
    )

    # 부드럽게
    sil = sil.filter(ImageFilter.GaussianBlur(radius=1.2))

    # 합성
    if transparent_bg:
        return sil
    img_rgba = img.convert('RGBA')
    img_rgba.alpha_composite(sil)
    return img_rgba.convert('RGB')


# 1. 카드 썸네일 (560x800)
card = make_silhouette(560, 800, transparent_bg=False, head_top_ratio=0.16)
card_path = ROOT / '회원 프로필 사진' / '_placeholder.jpg'
card.save(card_path, 'JPEG', quality=88, optimize=True)
print(f'saved: {card_path}')

# 2. 누끼 (600x975, 투명 배경, 콘텐츠 top ≈ 22%)
cutout = make_silhouette(600, 975, transparent_bg=True, head_top_ratio=0.22)
cutout_path = ROOT / '회원 프로필 사진_누끼' / '_placeholder.png'
cutout.save(cutout_path, 'PNG', optimize=True)
print(f'saved: {cutout_path}')

# 3. 사진 없는 원장님들에게 복사
import shutil
MISSING_NAME_AND_ID = [
    ('이해웅', 'lee-haewoong'),
    ('전수영', 'jeon-sooyoung'),
    ('이도영', 'rhee-doyoung'),
    ('김준기', 'kim-junki'),  # 신규
]
for name, mid in MISSING_NAME_AND_ID:
    # Card thumbnail
    dst_card = ROOT / '회원 프로필 사진' / f'{name}.jpg'
    if not dst_card.exists():
        shutil.copy(card_path, dst_card)
        print(f'  card: {dst_card.name}')
    # Cutout
    dst_cutout = ROOT / '회원 프로필 사진_누끼' / f'{mid}.png'
    if not dst_cutout.exists():
        shutil.copy(cutout_path, dst_cutout)
        print(f'  cutout: {dst_cutout.name}')

print('Done.')
