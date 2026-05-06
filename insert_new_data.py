"""Insert new hospital + member records into js/app.js arrays."""
import json, re
from pathlib import Path

ROOT = Path(__file__).parent
APP = ROOT / 'js' / 'app.js'
src = APP.read_text(encoding='utf-8')

# Hospital ID map
HOSP_ID_MAP = {
    '연세스타피부과': 'yonsei-star',
    '휴먼피부과 분당점': 'human-bundang',
    '루이피부과': 'louis',
    '리더스피부과 압구정점': 'leaders-apgujeong',
    '벧엘피부과': 'bethel',
    '미지예피부과': 'mijiye',
    '하얀J피부과': 'hayan-j',
    '티엔피부과': 'ten',
    '더힐피부과 신사점': 'thehill-sinsa',
    '연세A&B피부과': 'yonsei-ab',
    '어울림피부과': 'eoullim',
    '셀로디피부과 강서점': 'celody-gangseo',
    '닥터스피부과 대구점': 'doctors-daegu',
    '셀로디피부과 안양점': 'celody-anyang',
    '계피부과': 'kye',
    '아카데미휴먼피부과': 'academy-human',
    '박성현피부과': 'park-seonghyeon',
    '나음피부과': 'naeum',
    '갤러리아피부과 개포도곡점': 'galleria-gaepo',
    '시흥휴먼피부과': 'siheung-human',
    '힐하우스피부과 건대점': 'healhouse-konkuk',
}

EXISTING_MEMBER_IDS = {
    'bae-jungmin','kim-hongseok','lee-haeun','gye-jiwon','shin-jiyeon',
    'lee-seolhee','jung-hanmi','park-saemi','jung-jongheon','nam-chanhee','park-mingi'
}

def js_string(s):
    if s is None: return "''"
    s = str(s)
    s = s.replace('\\', '\\\\').replace("'", "\\'")
    s = s.replace('\n', '\\n').replace('\r', '')
    return f"'{s}'"

def js_str_array(items):
    return '[' + ', '.join(js_string(x) for x in items) + ']'

def parse_lines(s):
    if not s: return []
    return [x.strip() for x in str(s).split('\n') if x.strip()]

def parse_treatments(s):
    if not s: return []
    return [x.strip() for x in str(s).split(',') if x.strip()]

def parse_lectures(s):
    if not s: return []
    out = []
    for line in str(s).split('\n'):
        line = line.strip()
        if not line: continue
        parts = [p.strip() for p in line.split('|')]
        while len(parts) < 3: parts.append('')
        out.append((parts[0], parts[1], parts[2]))
    return out

def parse_links(s):
    if not s: return []
    out = []
    for line in str(s).split('\n'):
        line = line.strip()
        if not line: continue
        m = re.match(r'^(.+?)\s*\(([^)]+)\)\s*\|\s*(.+)$', line)
        if m:
            out.append((m.group(2).strip(), m.group(1).strip(), m.group(3).strip()))
    return out

def fmt_hospital(h):
    """Format hospital record matching existing style."""
    lines = ['  {']
    lines.append(f"    id: {js_string(h['id'])},")
    lines.append(f"    name: {js_string(h['name'])},")
    lines.append(f"    shortName: {js_string(h['shortName'])},")
    lines.append(f"    address: {js_string(h.get('address',''))},")
    lines.append(f"    phone: {js_string(h.get('phone',''))},")
    if h.get('lat') is not None:
        lines.append(f"    lat: {h['lat']},")
        lines.append(f"    lng: {h['lng']},")
    else:
        lines.append(f"    lat: null,")
        lines.append(f"    lng: null,")
    lines.append(f"    website: {js_string(h.get('website',''))},")
    if h.get('hours'):
        hh = ['{']
        for k, v in h['hours'].items():
            hh.append(f"      {js_string(k)}: {js_string(v)},")
        hh.append("    }")
        lines.append(f"    hours: {chr(10).join(hh)},")
    else:
        lines.append(f"    hours: {{}},")
    if h.get('treatments'):
        lines.append(f"    treatments: {js_str_array(h['treatments'])},")
    else:
        lines.append(f"    treatments: [],")
    lines.append(f"    doctorIds: {js_str_array(h['doctorIds'])},")
    lines.append(f"    description: {js_string(h.get('description',''))}")
    lines.append('  }')
    return '\n'.join(lines)

def fmt_member(m):
    lines = ['  {']
    lines.append(f"    id: {js_string(m['id'])},")
    lines.append(f"    name: {js_string(m['name'])},")
    lines.append(f"    photo: {js_string(m['photo'])},")
    lines.append(f"    hospitalId: {js_string(m['hospitalId'])},")
    lines.append(f"    role: {js_string(m['role'])},")
    lines.append(f"    specialty: {js_string(m['specialty'])},")
    lines.append(f"    quote: {js_string(m['quote'])},")
    lines.append(f"    positions: {js_str_array(m['positions'])},")
    lines.append(f"    career: {js_str_array(m['career'])},")
    lines.append(f"    memberships: {js_str_array(m['memberships'])},")
    if m['lectures']:
        lec_strs = ['      { year: ' + js_string(y) + ', event: ' + js_string(e) + ', title: ' + js_string(t) + ' }' for y, e, t in m['lectures']]
        lines.append("    lectures: [\n" + ',\n'.join(lec_strs) + "\n    ],")
    else:
        lines.append("    lectures: [],")
    lines.append(f"    awards: {js_str_array(m['awards'])},")
    lines.append(f"    treatments: {js_str_array(m['treatments'])},")
    if m['links']:
        link_strs = ['      { type: ' + js_string(t) + ', label: ' + js_string(l) + ', url: ' + js_string(u) + ' }' for t, l, u in m['links']]
        lines.append("    links: [\n" + ',\n'.join(link_strs) + "\n    ]")
    else:
        lines.append("    links: []")
    lines.append('  }')
    return '\n'.join(lines)

# ----- Build records -----
data = json.load(open('/tmp/akd_data.json', encoding='utf-8'))

hosp_records = {}
for hname, hid in HOSP_ID_MAP.items():
    hosp_records[hid] = {
        'id': hid,
        'name': hname if hname.endswith('의원') else hname.replace('피부과', '피부과의원'),
        'shortName': hname,
        'doctorIds': [],
    }

new_members = []
for m in data['members']:
    mid = (m.get('id') or '').strip()
    if mid in EXISTING_MEMBER_IDS: continue
    hname = (m.get('소속병원명') or '').strip()
    hid = HOSP_ID_MAP.get(hname, '')
    name_raw = (m.get('이름') or '').strip()
    name = re.sub(r'\d+$', '', name_raw)
    rec = {
        'id': mid,
        'name': name,
        'photo': f'회원 프로필 사진/{name}.jpg',
        'hospitalId': hid,
        'role': (m.get('직책') or '').strip() or '원장',
        'specialty': (m.get('전공') or '').strip() or '피부과 전문의',
        'quote': (m.get('한줄소개') or '').strip(),
        'positions': parse_lines(m.get('의사회 직책(역대)')),
        'career': parse_lines(m.get('경력')),
        'memberships': parse_lines(m.get('학회 회원')),
        'lectures': parse_lectures(m.get('강의 (연도|학술대회|제목)')),
        'awards': parse_lines(m.get('수상')),
        'treatments': parse_treatments(m.get('진료분야 (쉼표구분)')),
        'links': parse_links(m.get('링크 (이름|타입|URL)')),
    }
    new_members.append(rec)
    if hid:
        hosp_records[hid]['doctorIds'].append(mid)

# ----- Insert into js/app.js -----
# HOSPITALS ends at: ...\n  }\n]; on line 103 (closing of last hospital)
# Need to: add ',' after last `}`, then append new hospital records, then `\n]`
hosp_block = ',\n' + ',\n'.join(fmt_hospital(h) for h in hosp_records.values())
# Replace exactly: "    description: '피부과 전문의 이하은 원장이 진료합니다.'\n  }\n];"
# with same + comma + new + `\n];`
old_hosp_end = "    description: '피부과 전문의 이하은 원장이 진료합니다.'\n  }\n];"
new_hosp_end = "    description: '피부과 전문의 이하은 원장이 진료합니다.'\n  }" + hosp_block + "\n];"
assert old_hosp_end in src, "HOSPITALS end pattern not found"
src = src.replace(old_hosp_end, new_hosp_end)

# MEMBERS ends similarly
mem_block = ',\n' + ',\n'.join(fmt_member(m) for m in new_members)
# Last existing member is jung-jongheon (line 502 in original), look for its closing
old_mem_end = "    treatments: ['줄기세포', 'MCT', 'PRP', '고압산소', '필러', '실리프팅']\n  }\n];"
new_mem_end = "    treatments: ['줄기세포', 'MCT', 'PRP', '고압산소', '필러', '실리프팅']\n  }" + mem_block + "\n];"
assert old_mem_end in src, "MEMBERS end pattern not found"
src = src.replace(old_mem_end, new_mem_end)

APP.write_text(src, encoding='utf-8')
print(f'Inserted {len(hosp_records)} hospitals + {len(new_members)} members.')
print(f'New file size: {len(src)} chars')
