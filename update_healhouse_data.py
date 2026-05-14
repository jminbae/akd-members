"""힐하우스피부과 강남점 HOSPITALS 데이터 확장."""
import re, json
from pathlib import Path

APP = Path('js/app.js')
src = APP.read_text(encoding='utf-8')

equipment_list = json.load(open('D:/tmp/healhouse_equipment.json', encoding='utf-8'))

def js_str(s):
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'") + "'"

HERO_IMAGES = [
    '병원 소개 이미지/healhouse-gangnam/01.jpg',
    '병원 소개 이미지/healhouse-gangnam/02.jpg',
    '병원 소개 이미지/healhouse-gangnam/03.jpg',
]

INTERIOR_COUNT = 18
INTERIOR_PHOTOS = []
for i in range(1, INTERIOR_COUNT + 1):
    INTERIOR_PHOTOS.append({
        'image': f'병원 소개 이미지/healhouse-gangnam/{i:02d}.jpg',
        'category': 'other',
        'caption': '',
    })

# Equipment as JS objects
def fmt_equipment(eq_list):
    lines = ['[']
    for i, eq in enumerate(eq_list):
        tag = eq['category']
        item = (
            '      { '
            f"name: {js_str(eq['name'])}, "
            f"image: {js_str(eq['image'])}, "
            f"treatmentTags: [{js_str(tag)}]"
            ' }'
        )
        comma = ',' if i < len(eq_list) - 1 else ''
        lines.append(item + comma)
    lines.append('    ]')
    return '\n'.join(lines)

# heroImages, interiorPhotos, equipment를 healhouse-gangnam에 삽입
# 기존 description 다음에 신규 필드 추가

# 1) Find healhouse-gangnam block
HOSP_PAT = re.compile(
    r"(\{\s*\n\s*id:\s*'healhouse-gangnam',[\s\S]*?    description:\s*'[^']*')(\s*\n  \})"
)
m = HOSP_PAT.search(src)
if not m:
    print('NOT FOUND healhouse-gangnam'); exit(1)

slogan = '커스텀 리프팅·스킨부스터·콜라겐부스터 전문, 피부과 전문의 1:1 맞춤 상담'

interior_str = '[\n' + ',\n'.join(
    f"      {{ image: {js_str(p['image'])}, category: {js_str(p['category'])}, caption: {js_str(p['caption'])} }}"
    for p in INTERIOR_PHOTOS
) + '\n    ]'

hero_str = '[\n' + ',\n'.join(f"      {js_str(h)}" for h in HERO_IMAGES) + '\n    ]'

extra = f""",
    slogan: {js_str(slogan)},
    heroImages: {hero_str},
    interiorPhotos: {interior_str},
    equipment: {fmt_equipment(equipment_list)}"""

src = src[:m.end(1)] + extra + m.group(2) + src[m.end():]
APP.write_text(src, encoding='utf-8')
print('healhouse-gangnam updated: hero=3, interior=18, equipment=', len(equipment_list))
