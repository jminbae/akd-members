"""Update treatment lists for 8 doctors per user input."""
import re
from pathlib import Path

APP = Path('js/app.js')
src = APP.read_text(encoding='utf-8')

UPDATES = {
    'kim-hongseok': [
        '항노화', '리프팅', '탄력', '울쎄라', '소프웨이브', '피부결', '모공', '필러',
        '쥬베룩', '레디어스', '고압산소', '줄기세포', 'MCT', 'PRP', '쁘띠성형', '리제네라'
    ],
    'lee-seunghun': ['아토피피부염', '두드러기', '건선'],
    'lee-haejin': [
        '홍조/주사', '남성형탈모시술', '실리프팅', '기미/색소', '울쎄라', '써마지',
        '세르프', 'PRP', '남성특수부위토닝', '흉터시술', '여드름', '줄기세포',
        '필러', '쥬베룩', '리투오', '옴', '아토피피부염', '한포진', '원형탈모', '피부장벽치료'
    ],
    'yoon-soyoung': [
        '울쎄라', '써마지', '세르프', '슈링크', '인모드', '브이로', '여성특수부위토닝',
        '기미/색소', '필러', '여드름', '제모', '조직검사', '한포진', '각종피부질환'
    ],
    'goo-bonceol': [
        '수술흉터', '외상흉터', '화상흉터', '여드름흉터', '시술 및 수술부작용·합병증',
        '자해흔', '선천성모반', '색소침착', '피부항노화치료', '리프팅', '타이트닝',
        '체형교정', '미용수술', '피부질환진료', '피부외과적수술', '외상', '화상'
    ],
    'jeon-sooyoung': ['색소침착', '피부질환진료', '여드름', '탈모', '비만'],
    'lee-haewoong': [
        '색소 레이저', '여드름 주사', '혈관 레이저', '흉터 레이저', '밸루티',
        '백반증', '건선', '아토피 광선치료', '사마귀', '티눈', '화상·찰과상'
    ],
    'ha-jeongmin': [
        '피부장벽', '민감성피부', '주사피부염', '아토피', '건선', '덴서티',
        '스킨부스터', '필러', '보톡스'
    ],
}

def js_str(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def fmt_treatments(arr):
    return '[' + ', '.join(js_str(t) for t in arr) + ']'

count = 0
for did, treatments in UPDATES.items():
    # Find the member block: from `id: 'did'` to next `},\n  {` or `}\n];`
    pat = re.compile(
        r"(\{\s*\n\s*id:\s*'" + re.escape(did) + r"',[\s\S]*?treatments:\s*)"
        r"\[[^\]]*\]",
        re.MULTILINE,
    )
    m = pat.search(src)
    if not m:
        print(f'NOT FOUND: {did}')
        continue
    new_arr = fmt_treatments(treatments)
    src = pat.sub(lambda mm, na=new_arr: mm.group(1) + na, src, count=1)
    count += 1
    print(f'Updated {did}: {len(treatments)} treatments')

APP.write_text(src, encoding='utf-8')
print(f'\nTotal updated: {count}/{len(UPDATES)}')
