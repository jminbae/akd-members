"""사용자 분류에 따라 MEMBERS 진료분야 정규화 + TREATMENT_GROUPS 일괄 추가."""
import re
from pathlib import Path

APP = Path('js/app.js')
src = APP.read_text(encoding='utf-8')

def js_str(s):
    return "'" + s.replace("'", "\\'") + "'"

# ─── 1. MEMBERS 데이터 정규화 (특정 의사의 treatments 항목 변경) ───
# (doctor_id, find, replace) — find/replace는 단일 항목 문자열
MEMBER_RENAMES = [
    # 이해웅: 밸루티 → 벨루티, 화상·찰과상 → 화상, 찰과상 분리, 흉터/색소 레이저 띄어쓰기 제거
    ('lee-haewoong', '밸루티', '벨루티'),
    ('lee-haewoong', '흉터 레이저', '흉터레이저'),
    ('lee-haewoong', '색소 레이저', '색소레이저'),
    # 이해웅: 화상·찰과상 → 화상 + 찰과상 (한 항목 → 두 항목)
    ('lee-haewoong', '화상·찰과상', '화상~~SPLIT~~찰과상'),
    # 김태은: 미라드라이(다한증치료) → 미라드라이 + 다한증치료
    ('kim-taeeun', '미라드라이(다한증치료)', '미라드라이~~SPLIT~~다한증치료'),
    # 구본철: 피부질환진료 → 피부질환
    ('goo-bonceol', '피부질환진료', '피부질환'),
    # 전수영: 피부질환진료 → 피부질환
    ('jeon-sooyoung', '피부질환진료', '피부질환'),
    # 윤소영: 각종피부질환 → 피부질환
    ('yoon-soyoung', '각종피부질환', '피부질환'),
]

for did, find_str, rep_str in MEMBER_RENAMES:
    pat = re.compile(
        r"(\{\s*\n\s*id:\s*'" + re.escape(did) + r"',[\s\S]*?treatments:\s*\[)([^\]]*)(\])"
    )
    m = pat.search(src)
    if not m:
        print(f'  NOT FOUND member: {did}')
        continue
    items_str = m.group(2)
    # Find single quoted string and replace
    if '~~SPLIT~~' in rep_str:
        # Split into 2 items
        a, b = rep_str.split('~~SPLIT~~')
        new_items_str = items_str.replace(f"'{find_str}'", f"'{a}', '{b}'")
    else:
        new_items_str = items_str.replace(f"'{find_str}'", f"'{rep_str}'")
    if new_items_str == items_str:
        print(f'  no change for {did}: {find_str}')
        continue
    src = src[:m.start()] + m.group(1) + new_items_str + m.group(3) + src[m.end():]
    print(f'  {did}: {find_str} → {rep_str}')

# ─── 2. TREATMENT_GROUPS 카테고리별 신규 항목 추가 ───
# 이미 추가된 항목은 자동 스킵
ADDITIONS = {
    'medical': [
        # 흉터/외상/화상
        '수술흉터', '화상흉터', '자해흔', '시술 및 수술부작용·합병증', '외상', '화상', '찰과상',
        # 진료 일반
        '다한증치료', '조직검사', '탈모', '남성형탈모시술', '피부외과적수술', '피부질환',
        # 피부질환 (보험)
        '아토피피부염', '아토피', '두드러기', '건선', '옴', '한포진', '원형탈모',
        '사마귀', '티눈', '아토피 광선치료',
        # 피부장벽 케어
        '피부장벽치료', '피부장벽', '민감성피부', '주사피부염',
    ],
    'laser': [
        '흉터레이저', '색소침착', '색소', '색소레이저',
        '미라드라이', '남성특수부위토닝', '여성특수부위토닝',
        '여드름 주사', '혈관 레이저',
    ],
    'lifting': [
        '슈링크', '인모드', '세르프', '브이로', '바디온다', '온다',
        '타이트닝', '덴서티', '피부항노화치료', '벨루티',
    ],
    'aesthetic': [
        '리투오', '쥬베룩볼륨', '쥬브아셀', '보톡스', '흉터시술',
        '리제네라', '미용수술',
    ],
    'other': [
        '수면마취', '수액치료',
    ],
}

for gid, new_items in ADDITIONS.items():
    pat = re.compile(
        r"(id:\s*'" + re.escape(gid) + r"',[\s\S]*?items:\s*\[)([^\]]*)(\])"
    )
    m = pat.search(src)
    if not m:
        print(f'NOT FOUND group: {gid}')
        continue
    existing_str = m.group(2).strip()
    # Parse existing items to dedupe
    existing_items = [x.strip().strip("'\"") for x in re.findall(r"'[^']*'|\"[^\"]*\"", existing_str)]
    to_add = [t for t in new_items if t not in existing_items]
    if not to_add:
        print(f'  [{gid}] no new items')
        continue
    new_str_parts = ', '.join(js_str(t) for t in to_add)
    if existing_str.rstrip().endswith(','):
        merged = existing_str.rstrip().rstrip(',').rstrip() + ', ' + new_str_parts
    elif existing_str.strip():
        merged = existing_str + ', ' + new_str_parts
    else:
        merged = new_str_parts
    src = src[:m.start()] + m.group(1) + merged + m.group(3) + src[m.end():]
    print(f'  [{gid}] +{len(to_add)}: {to_add}')

APP.write_text(src, encoding='utf-8')
print('\nDone.')
