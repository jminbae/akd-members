"""Build new HOSPITALS + MEMBERS JS object literals from xlsx data,
to be inserted into js/app.js arrays."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).parent

# Hospital name → id mapping (manual romanization)
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

# Existing IDs (already in app.js — skip)
EXISTING_MEMBER_IDS = {
    'bae-jungmin','kim-hongseok','lee-haeun','gye-jiwon','shin-jiyeon',
    'lee-seolhee','jung-hanmi','park-saemi','jung-jongheon','nam-chanhee','park-mingi'
}

def js_string(s):
    """Encode as JS single-quoted string with escapes."""
    if s is None: return "''"
    s = str(s)
    s = s.replace('\\', '\\\\').replace("'", "\\'")
    s = s.replace('\n', '\\n').replace('\r', '')
    return f"'{s}'"

def js_array(items, sep=', '):
    return '[' + sep.join(items) + ']'

def parse_lines(s):
    """Split multi-line string into list, trimming empties."""
    if not s: return []
    return [x.strip() for x in str(s).split('\n') if x.strip()]

def parse_treatments(s):
    if not s: return []
    return [x.strip() for x in str(s).split(',') if x.strip()]

def parse_lectures(s):
    """'2022 | 24회 춘계 | 제목' multi-line → list of {year,event,title}."""
    if not s: return []
    out = []
    for line in str(s).split('\n'):
        line = line.strip()
        if not line: continue
        parts = [p.strip() for p in line.split('|')]
        while len(parts) < 3: parts.append('')
        out.append({'year': parts[0], 'event': parts[1], 'title': parts[2]})
    return out

def parse_links(s):
    """'이름 (type) | url' multi-line → [{type,label,url}]"""
    if not s: return []
    out = []
    for line in str(s).split('\n'):
        line = line.strip()
        if not line: continue
        # 'label (type) | url'
        m = re.match(r'^(.+?)\s*\(([^)]+)\)\s*\|\s*(.+)$', line)
        if m:
            out.append({'label': m.group(1).strip(), 'type': m.group(2).strip(), 'url': m.group(3).strip()})
        else:
            # fallback
            parts = [p.strip() for p in line.split('|')]
            if len(parts) == 2:
                out.append({'label': parts[0], 'type': 'website', 'url': parts[1]})
    return out

def js_obj(d, indent='    '):
    """Format dict as JS object literal."""
    lines = ['{']
    for k, v in d.items():
        if isinstance(v, str):
            val = js_string(v)
        elif isinstance(v, (int, float)):
            val = str(v)
        elif isinstance(v, list):
            if not v:
                val = '[]'
            elif isinstance(v[0], str):
                val = js_array([js_string(x) for x in v])
            elif isinstance(v[0], dict):
                # {year, event, title} or {type, label, url}
                inner = []
                for item in v:
                    parts = [f'{kk}: {js_string(vv)}' for kk, vv in item.items()]
                    inner.append('{ ' + ', '.join(parts) + ' }')
                val = '[\n' + indent + '  ' + (',\n' + indent + '  ').join(inner) + '\n' + indent + ']'
            else:
                val = json.dumps(v, ensure_ascii=False)
        elif isinstance(v, dict):
            inner = ['  ' + js_string(kk) + ': ' + js_string(vv) for kk, vv in v.items()]
            val = '{\n' + indent + '  ' + (',\n' + indent + '  ').join(inner) + '\n' + indent + '}'
        else:
            val = json.dumps(v, ensure_ascii=False)
        lines.append(f'{indent}{k}: {val},')
    lines.append(indent.rstrip() + '}')
    return '\n'.join(lines)

# ----- Read xlsx data -----
data = json.load(open('/tmp/akd_data.json', encoding='utf-8'))

# Build hospital records
hosp_records = {}
for hname, hid in HOSP_ID_MAP.items():
    hosp_records[hid] = {
        'id': hid,
        'name': hname.replace('피부과', '피부과의원') if not hname.endswith('의원') else hname,
        'shortName': hname,
        'address': '',
        'phone': '',
        'lat': None,
        'lng': None,
        'website': '',
        'hours': {},
        'treatments': [],
        'doctorIds': [],
        'description': '',
    }

# Build member records and accumulate doctorIds per hospital
new_members = []
for m in data['members']:
    mid = (m.get('id') or '').strip()
    if mid in EXISTING_MEMBER_IDS: continue
    hname = (m.get('소속병원명') or '').strip()
    hid = HOSP_ID_MAP.get(hname, '')
    name_raw = (m.get('이름') or '').strip()
    name = re.sub(r'\d+$', '', name_raw)  # strip trailing digits
    quote = (m.get('한줄소개') or '').strip()
    role = (m.get('직책') or '').strip()
    spec = (m.get('전공') or '').strip()
    license_no = m.get('의사면허번호')

    rec = {
        'id': mid,
        'name': name,
        'photo': f'회원 프로필 사진/{name}.jpg',
        'hospitalId': hid,
        'role': role or '원장',
        'specialty': spec or '피부과 전문의',
        'quote': quote,
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

# ----- Output JS -----
out = []
out.append('// === NEW HOSPITALS (paste into HOSPITALS array, before closing `];`) ===')
for hid, h in hosp_records.items():
    out.append(f'  // [{h["doctorIds"] and len(h["doctorIds"]) or 0} 명] {h["shortName"]}')
    out.append('  ' + js_obj(h, '    ') + ',')
out.append('')
out.append('// === NEW MEMBERS (paste into MEMBERS array, before closing `];`) ===')
for m in new_members:
    out.append('  ' + js_obj(m, '    ') + ',')

Path('/tmp/new_data.js').write_text('\n'.join(out), encoding='utf-8')
print(f'Wrote {len(hosp_records)} hospitals + {len(new_members)} members to /tmp/new_data.js')
print(f'Lines: {len(out)}')
