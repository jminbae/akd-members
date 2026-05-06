"""Update 3 hospitals (mijiye, academy-human, human-bundang) with Naver-confirmed info."""
import re
from pathlib import Path

APP = Path('js/app.js')
src = APP.read_text(encoding='utf-8')

INFO = {
    'mijiye': {
        'address': '광주광역시 서구 상무중앙로 9 5층 (동양빌딩)',
        'phone': '062-382-7002',
        'website': 'http://www.skin-clinic.co.kr',
        'hours': {},
        'lat': 35.1521, 'lng': 126.8419,
        'description': '광주 상무역 4번 출구 도보 2분. 광주 서구 지역 피부과 전문의 진료.',
    },
    'academy-human': {
        'address': '부산광역시 금정구 구서로 10 우지메디컬 4층',
        'phone': '0507-1417-7577',
        'website': 'http://academydermatology.co.kr',
        'hours': {},
        'lat': 35.2542, 'lng': 129.0917,
        'description': '부산 구서역 1번 출구 도보 2분. 구서동 지역 피부과 전문의 진료.',
    },
    'human-bundang': {
        'address': '경기도 성남시 분당구 백현로 97 다운타운 304호',
        'phone': '031-713-9995',
        'website': 'https://humanbd.co.kr',
        'hours': {},
        'lat': 37.3795, 'lng': 127.1148,
        'description': '수내역 3번 출구 도보 5분. 분당 지역 휴먼피부과 네트워크 분점.',
    },
}

def js_str(s):
    if s is None or s == '':
        return "''"
    s = str(s).replace('\\', '\\\\').replace("'", "\\'")
    return "'" + s + "'"

def fmt_hours(hours):
    if not hours:
        return '{}'
    lines = ['{']
    items = list(hours.items())
    for i, (k, v) in enumerate(items):
        comma = ',' if i < len(items) - 1 else ''
        lines.append(f"      {js_str(k)}: {js_str(v)}{comma}")
    lines.append('    }')
    return '\n'.join(lines)

count = 0
for hid, info in INFO.items():
    pat = re.compile(
        r"(\{\s*\n\s*id:\s*'" + re.escape(hid) + r"',\s*\n)"
        r"(    name:[^\n]+\n)"
        r"(    shortName:[^\n]+\n)"
        r"    address:\s*'[^']*',\s*\n"
        r"    phone:\s*'[^']*',\s*\n"
        r"    lat:\s*[^,\n]+,\s*\n"
        r"    lng:\s*[^,\n]+,\s*\n"
        r"    website:\s*'[^']*',\s*\n"
        r"    hours:\s*\{[^}]*\},\s*\n"
        r"(    treatments:[^\n]+\n)"
        r"(    doctorIds:[^\n]+\n)"
        r"    description:\s*'[^']*'",
    )
    m = pat.search(src)
    if not m:
        print(f'NOT FOUND: {hid}')
        continue

    new_block = (
        m.group(1) + m.group(2) + m.group(3) +
        f"    address: {js_str(info['address'])},\n" +
        f"    phone: {js_str(info['phone'])},\n" +
        f"    lat: {info['lat']},\n" +
        f"    lng: {info['lng']},\n" +
        f"    website: {js_str(info['website'])},\n" +
        f"    hours: {fmt_hours(info['hours'])},\n" +
        m.group(4) + m.group(5) +
        f"    description: {js_str(info['description'])}"
    )
    src = src[:m.start()] + new_block + src[m.end():]
    count += 1
    print(f'Updated {hid}')

APP.write_text(src, encoding='utf-8')
print(f'\nUpdated {count}/{len(INFO)}')
