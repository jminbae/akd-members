"""Update HOSPITALS records in js/app.js with address/phone/hours/website
gathered from web search. Lat/lng left null for now (geocode later)."""
import re, json
from pathlib import Path

APP = Path('js/app.js')
src = APP.read_text(encoding='utf-8')

# Per-hospital info collected from web search
INFO = {
    'yonsei-star': {
        'address': '서울특별시 서대문구 신촌로 73 테라운드 6층',
        'phone': '02-332-0023',
        'website': 'http://yonseistar.co.kr',
        'hours': {'평일 (월~금)': '09:00 - 20:00', '토요일': '09:00 - 15:00',
                  '점심시간': '13:00 - 14:00', '일요일·공휴일': '휴무'},
        'lat': 37.5563, 'lng': 126.9381,  # 신촌역 인근
        'description': '신촌역 도보 5분. 흉터·문신제거·색소·웰에이징 클리닉. 연세대 의과대 출신 전문의 진료.',
    },
    'human-bundang': {
        'address': '경기도 성남시 분당구 (정확 주소 확인 필요)',
        'phone': '031-713-9995',
        'website': 'https://www.humanbd.co.kr',
        'hours': {},
        'lat': None, 'lng': None,
        'description': '분당 지역 휴먼피부과 네트워크 분점.',
    },
    'louis': {
        'address': '경기도 구리시 장자대로 72 204호 (수택동, 미림프라자)',
        'phone': '031-553-7522',
        'website': 'http://www.louiskin.com',
        'hours': {},
        'lat': 37.5944, 'lng': 127.1417,  # 구리시 수택동
        'description': '구리·남양주 지역 피부과 전문의 진료. 색소레이저·여드름·흉터·보험질환 중점.',
    },
    'leaders-apgujeong': {
        'address': '서울특별시 강남구 언주로 843 4층, 5층 (신사동)',
        'phone': '02-548-7833',
        'website': 'https://leaders-aj.com',
        'hours': {'평일 (월~금)': '10:00 - 19:30', '토요일': '10:00 - 15:00',
                  '점심시간': '13:00 - 14:00 (토요일은 점심없이 진료)', '일요일·공휴일': '휴무'},
        'lat': 37.5249, 'lng': 127.0292,  # 압구정 인근
        'description': '리더스피부과 네트워크 압구정점.',
    },
    'bethel': {
        'address': '부산광역시 동래구 충렬대로 160 창림빌딩 4층',
        'phone': '',
        'website': 'http://busan.bethelskin.com',
        'hours': {'월~목': '10:00 - 19:00', '금요일': '10:00 - 20:30 (야간)',
                  '토요일': '10:00 - 14:00', '점심시간': '13:00 - 14:30', '일요일·공휴일': '휴무'},
        'lat': 35.2057, 'lng': 129.0807,  # 동래역 인근
        'description': '부산 동래역 도보 1분. 피부과 전문의 진료.',
    },
    'mijiye': {
        'address': '광주광역시 (정확 주소 확인 필요)',
        'phone': '',
        'website': '',
        'hours': {},
        'lat': None, 'lng': None,
        'description': '광주 지역 피부과 전문의 진료.',
    },
    'hayan-j': {
        'address': '서울특별시 노원구 한글비석로 235 304호 (중계동, 세신빌딩)',
        'phone': '02-933-3145',
        'website': '',
        'hours': {},
        'lat': 37.6505, 'lng': 127.0775,  # 노원 중계동
        'description': '노원 중계동 피부과 전문의 진료.',
    },
    'ten': {
        'address': '서울특별시 서초구 서초중앙로 227, 8층 (반포동, 진일빌딩)',
        'phone': '02-537-6030',
        'website': 'https://tnskin.kr',
        'hours': {'월·화·수·금': '09:30 - 18:30', '목요일': '14:00 - 20:30 (야간)',
                  '토요일': '09:30 - 15:30', '일요일·공휴일': '휴무'},
        'lat': 37.4942, 'lng': 127.0146,
        'description': '서초·반포 지역 피부과 전문의 진료.',
    },
    'thehill-sinsa': {
        'address': '서울 강남구 강남대로 652 신사스퀘어 7층',
        'phone': '',
        'website': 'http://www.thehealskin.co.kr',
        'hours': {'평일·토': '10:00 - 19:30', '점심시간': '13:00 - 14:00'},
        'lat': 37.5198, 'lng': 127.0204,  # 신사역 인근
        'description': '신사역 6번 출구 도보 5분. 더힐피부과 네트워크 신사 본점.',
    },
    'yonsei-ab': {
        'address': '서울특별시 송파구 백제고분로 365 태문빌딩 3층 (석촌동)',
        'phone': '',
        'website': 'http://www.anbskin.com',
        'hours': {},
        'lat': 37.5028, 'lng': 127.1063,  # 석촌역 인근
        'description': '석촌역 2번 출구 170m. 송파 지역 피부과 전문의 진료.',
    },
    'eoullim': {
        'address': '대전광역시 유성구 문지로 299번길 86-4, 2층 (문지동)',
        'phone': '',
        'website': '',
        'hours': {},
        'lat': 36.3863, 'lng': 127.4011,  # 대전 문지동
        'description': '대전 유성구 문지동 피부과 전문의 진료.',
    },
    'celody-gangseo': {
        'address': '서울시 강서구 공항대로 525 비원 오피스텔 202·203호',
        'phone': '02-3664-1675',
        'website': 'https://ks.cellodyskin.com',
        'hours': {'월·수·목': '10:00 - 19:00', '화·금': '10:00 - 20:00 (야간)',
                  '토요일': '09:30 - 15:00 (점심없이)', '점심시간': '13:00 - 14:00', '일요일·공휴일': '휴무'},
        'lat': 37.5510, 'lng': 126.8634,  # 등촌역 인근
        'description': '9호선 등촌역 2번 출구 도보. 셀로디피부과 네트워크 강서점.',
    },
    'doctors-daegu': {
        'address': '대구광역시 수성구 달구벌대로 2360 메트로안과빌딩 5층',
        'phone': '053-710-1007',
        'website': 'https://daegu.doctors365.co.kr',
        'hours': {'월·금': '10:00 - 20:30 (야간)', '화·수·목': '10:00 - 19:30',
                  '토요일': '09:30 - 15:30 (점심없이)', '점심시간': '13:00 - 14:00', '일요일': '휴무'},
        'lat': 35.8579, 'lng': 128.6263,  # 범어역
        'description': '2호선 범어역 2번 출구 도보 5분. 닥터스피부과 네트워크 대구점.',
    },
    'celody-anyang': {
        'address': '경기도 안양시 동안구 비산로 18 평촌자이아이파크 1Gate 근린상가 1동 304호',
        'phone': '031-465-5575',
        'website': 'https://cellodyskin.com',
        'hours': {},
        'lat': 37.4002, 'lng': 126.9406,  # 평촌
        'description': '안양 동안구 셀로디피부과 안양점.',
    },
    'kye': {
        'address': '서울특별시 영등포구 영중로 68 (영등포동5가)',
        'phone': '02-2634-0108',
        'website': 'http://www.kye.net',
        'hours': {},
        'lat': 37.5181, 'lng': 126.9038,  # 영등포시장역
        'description': '영등포시장역 5번 출구 앞. 1961년 개원, 3대 피부과 전문의 가족 진료.',
    },
    'academy-human': {
        'address': '(정확 주소 확인 필요)',
        'phone': '',
        'website': '',
        'hours': {},
        'lat': None, 'lng': None,
        'description': '아카데미휴먼피부과의원.',
    },
    'park-seonghyeon': {
        'address': '전라북도 김제시 검산택지길 62 2층 (검산동)',
        'phone': '063-545-6767',
        'website': 'http://www.psh-skin.com',
        'hours': {},
        'lat': 35.8013, 'lng': 126.8806,  # 김제
        'description': '김제 지역 피부과 전문의 진료.',
    },
    'naeum': {
        'address': '서울특별시 중구 세종대로 11 (남대문로5가, 조광빌딩 5·6층)',
        'phone': '02-6959-7533',
        'website': 'http://www.naeumskin.com',
        'hours': {},
        'lat': 37.5562, 'lng': 126.9722,  # 서울역
        'description': '서울역 3번 출구 70m. 흉터·외상·화상·자해흔 등 피부외과적 수술 전문.',
    },
    'galleria-gaepo': {
        'address': '서울특별시 강남구 개포동 167-9 마커스나인빌딩 3층',
        'phone': '02-573-9839',
        'website': 'http://www.galleriaskin3.com',
        'hours': {'평일 (월~금)': '10:00 - 20:00', '토요일': '10:00 - 16:00'},
        'lat': 37.4847, 'lng': 127.0577,  # 개포동
        'description': '개포·도곡 지역 갤러리아피부과 네트워크 분점.',
    },
    'siheung-human': {
        'address': '경기도 시흥시 비둘기공원 6길 4 성원상떼빌 더센트럴 4층',
        'phone': '031-315-5501',
        'website': 'https://siheunghuman.com',
        'hours': {'평일 (월~금)': '10:00 - 19:00', '토요일': '09:30 - 15:30',
                  '점심시간': '13:00 - 14:00', '일요일·공휴일': '휴무'},
        'lat': 37.3795, 'lng': 126.7889,  # 시흥 대야동
        'description': '시흥 지역 휴먼피부과 네트워크 분점.',
    },
    'healhouse-konkuk': {
        'address': '서울 광진구 능동로 90 더클래식500 B동 2층',
        'phone': '02-444-7585',
        'website': 'https://healhousegd.com',
        'hours': {'월·금': '10:00 - 20:00 (야간)', '화·목': '10:00 - 19:00',
                  '토요일': '10:00 - 15:00', '일요일·공휴일': '휴무'},
        'lat': 37.5410, 'lng': 127.0784,  # 건대입구역
        'description': '건대입구역 도보. 힐하우스피부과 네트워크 건대점.',
    },
}

def js_str(s):
    if s is None or s == '':
        return "''"
    return "'" + str(s).replace('\\', '\\\\').replace("'", "\\'") + "'"

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
    # Find the hospital block by id
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

    lat_str = str(info['lat']) if info['lat'] is not None else 'null'
    lng_str = str(info['lng']) if info['lng'] is not None else 'null'
    new_block = (
        m.group(1) +  # opening + id
        m.group(2) +  # name
        m.group(3) +  # shortName
        f"    address: {js_str(info['address'])},\n" +
        f"    phone: {js_str(info['phone'])},\n" +
        f"    lat: {lat_str},\n" +
        f"    lng: {lng_str},\n" +
        f"    website: {js_str(info['website'])},\n" +
        f"    hours: {fmt_hours(info['hours'])},\n" +
        m.group(4) +  # treatments
        m.group(5) +  # doctorIds
        f"    description: {js_str(info['description'])}"
    )
    src = src[:m.start()] + new_block + src[m.end():]
    count += 1
    print(f'Updated {hid}')

APP.write_text(src, encoding='utf-8')
print(f'\nTotal updated: {count}/{len(INFO)}')
