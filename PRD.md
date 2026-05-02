# 대한피부과의사회 회원 소개 사이트 — PRD / 기능 명세서

**문서 버전:** 1.0
**작성일:** 2026-05-02
**프로토타입 URL:** https://jminbae.github.io/akd-members/
**Git 저장소:** https://github.com/jminbae/akd-members
**대상 확장 규모:** 약 2,800명 회원 / 약 1,500개 병원 (예상)
**문서 목적:** 신규 개발팀이 프로토타입의 구현 의도와 기능을 정확히 이해하고, 본 시스템(2,800명 규모)으로 확장할 수 있도록 설계 의도, 메뉴별 기능, 인터랙션, 기술 결정 근거를 정리한다.

---

## 1. 프로젝트 목적

### 1.1 배경
대한피부과의사회 정회원(피부과 전문의)에 대해, **일반인이 위치 기반으로 신뢰할 수 있는 의사·병원을 빠르게 찾도록** 하는 공식 디렉토리. 광고성 정보를 배제하고, 학회가 검증한 회원 정보만 노출.

### 1.2 핵심 가치
| 가치 | 구현 방식 |
| --- | --- |
| 신뢰성 | 학회 인증 회원만 노출, 의사 본인 입력 정보 |
| 근접성 | 사용자 위치(geolocation) 기반 거리순 정렬 |
| 공정성 | 같은 거리권 내 의사는 매번 다른 순서로 노출 |
| 친근감 | 정적이지 않고 살아있는 인터랙션(사진 교차 페이드, SNS 풍선 부유) |
| 공유성 | 카카오톡/페이스북 공유 시 의사·병원별 OG 이미지 정상 노출 |

### 1.3 현재 프로토타입 범위
- 의사 11명, 병원 5곳, 진료분야 그룹 5개 / 약 50개 항목

---

## 2. 사이트 맵 / 메뉴 구조

```
대한피부과의사회 (헤더 - 항상 표시)
├─ 통합 검색       [홈]              아이콘: fa-magnifying-glass
├─ 피부과의사 찾기                    아이콘: fa-user-md
├─ 피부과 찾기                        아이콘: fa-hospital
└─ 진료분야 찾기                      아이콘: fa-stethoscope

추가 페이지 (메뉴 외):
├─ /dermatologist/{id}/   의사 상세
└─ /clinic/{id}/          병원 상세
```

---

## 3. 메뉴별 기능 명세

### 3.1 통합 검색 (홈, `#home`)

**목적:** 일반인이 "내가 원하는 의사·병원·진료를 한 박스에서 찾을 수 있다"는 첫 인상.

**구성 요소:**
- 메인 카피: "나에게 꼭 맞는 피부과를 찾아보세요!"
- 통합 검색 박스 — 의사명·병원명·진료분야 통합 자동완성 검색
- 진료분야 카테고리 단축 버튼 (5개 그룹 진입 점프)
- 학회 로고

**검색 동작:**
- 사용자가 입력한 키워드로 `MEMBERS.name`, `HOSPITALS.name`, `TREATMENT_CATEGORIES` 동시 매칭
- 결과는 카테고리별 하단에 인라인 노출 (의사/병원/진료분야)

---

### 3.2 피부과의사 찾기 (`#dermatologists`)

**목적:** 거리 가까운 의사를 매번 다양하게 노출.

**정렬 알고리즘 (핵심 비즈니스 로직):**
```
1. 사용자 geolocation 획득 (실패 시 서울시청 기본값 37.5665, 126.9780)
2. 각 의사 → 소속 병원의 lat/lng로 haversine 거리 계산
3. 거리 ÷ 2km로 버킷 인덱스 산출
4. (버킷 오름차순, 같은 버킷 내에서는 random) 으로 재정렬
```

**의도:**
- 같은 병원 의사 3명이 항상 같은 순서로 보이지 않도록 → 매 방문마다 셔플
- 거리 1.8km 의사와 2.1km 의사가 다른 버킷이지만 비슷하게 가까운 경우 — 2km 버킷이면 모두 동일 버킷에 묶여 공정 셔플
- 4km 이상 차이 나는 멀리 있는 의사는 항상 뒤에 배치(거리 우선순위 보장)

**카드 구성:**
- 의사 사진 (썸네일, `loading=lazy`)
- 이름, 소속 병원 단축명, 직책 (예: "보스피부과 원장")
- 거리 표시 (예: "약 5.4km")
- 전문의 뱃지
- 진료분야 태그(상위 N개)

**확장 시 변경 권고:**
- 2,800명 카드를 한 번에 렌더하면 약 1만 DOM 노드 → 무한 스크롤(IntersectionObserver) 또는 가상 스크롤 도입 필수

---

### 3.3 의사 상세 페이지 (`/dermatologist/{id}/`)

**목적:** 의사 1명에 대한 신뢰감 있는 풀 프로필.

**Hero 영역:**
- 좌측 (모바일은 상단): 병원 단축명 칩, 의사 이름(큰 글씨), 한 줄 소개(quote)
- 우측 (모바일은 하단): 인물 누끼 사진
  - **사진 2장 교차 페이드** (3초 주기, 1.4초 페이드, opacity transition)
  - 1번/2번 사진 순서는 데이터에 의해 결정 (예: 김홍석/신지연은 의도적으로 1·2 순서를 swap한 상태)
- 배경: `radial-gradient(ellipse at 70% 30%, #e8ecf1, #c8cfd5, #a3aab1)`
- **SNS 풍선 (인물 주변):**
  - 의사 `links` 배열로부터 자동 생성 (홈페이지/인스타/유튜브/스레드/틱톡 등)
  - **부유 모션** — `balloonFloat` 키프레임 3.8초, ±12px 수직 + 약간의 수평 드리프트
  - **5초마다 zone 내 랜덤 위치 셔플** — `top/left` CSS transition 1.2초 부드러운 이동
  - 8개 zone(상단2/중간2/하단2/좌우)에 랜덤 배치하여 인물 얼굴은 가리지 않음

**본문 정보 카드 (의사 데이터에 있을 때만 노출):**
| 카드 | 데이터 필드 | 표시 |
| --- | --- | --- |
| 학회 직책 | `positions[]` | 기수별 직책 (예: "15기 재무이사, 학술위원") |
| 경력 | `career[]` | 경력 사항 (대학병원 부교수 등) |
| 학회 활동 | `memberships[]` | 정회원 학회 목록 |
| 학술대회 강의 | `lectures[]` | year/event/title 표 |
| 수상·활동 | `awards[]` | 베스트 렉쳐 등 |
| 진료분야 | `treatments[]` | 진료 항목 칩(클릭 시 진료분야 찾기로 이동) |
| 소속 의료진 | 같은 병원 다른 의사들 | 가로 스크롤 카드 |

**모바일 최적화:**
- Hero 영역 높이 500px (인물 크기는 유지, 배경 단축을 위해 컨테이너 overflow:hidden + 누끼 PNG의 위 22% 투명 영역이 클립됨)
- 모바일 grid 1열 (info 위 / photo 아래)

---

### 3.4 피부과 찾기 (`#hospitals`)

**목적:** 병원 단위로 가까운 곳 찾기 + 지도 시각화.

**구성:**
- 좌측: 지도 (Leaflet + OpenStreetMap)
- 우측: 거리순 병원 리스트
- 마커 클릭 ↔ 리스트 hover/scroll 동기화
- 마커 클릭 시 미니 정보 팝업
- 리스트 카드 클릭 → 병원 상세 페이지

**확장 시 변경 권고:**
- 1,500개 병원 마커는 `leaflet.markercluster`로 줌 레벨에 따라 클러스터링 필수

---

### 3.5 병원 상세 페이지 (`/clinic/{id}/`)

**목적:** 병원 1곳의 상세 정보 + 그곳 의료진.

**구성:**
- 병원명, 주소, 전화번호, 진료시간(요일별)
- 병원 위치 지도(Leaflet)
- 진료분야 그룹별 칩 묶음 (피부질환/레이저/리프팅/...별로 묶어 표시)
- 소속 의료진 카드 (가로 스크롤)
- 병원 설명문(description)

---

### 3.6 진료분야 찾기 (`#treatments`)

**목적:** "백반증 보는 의사 어디 있나?" 같은 진료 중심 탐색.

**구성:**
- 5개 그룹 탭 (`피부질환` / `레이저` / `리프팅` / `피부시술` / `기타`)
- 그룹 선택 시 해당 그룹의 항목 칩이 가로/세로로 wrap되어 표시
- 항목 칩 클릭 시 그 진료를 보는 병원·의사 목록 + 지도 갱신
- 좌측 지도, 우측 병원 리스트(거리순) — 각 병원 카드에 그 병원에서 해당 진료를 보는 의사들 노출

**중요 매칭 로직 (`getHospitalsByTreatment`):**
- 병원 자체의 `treatments[]`에 항목이 있거나, **소속 의사 중 한 명이라도** `treatments[]`에 그 항목을 가지면 매칭
- 의도: 의사 본인이 새 진료를 추가하면(예: 백반증탈색치료, 자외선치료) 병원 데이터를 손대지 않아도 자동 검색 결과에 노출

**진료분야 마스터 리스트(`TREATMENT_GROUPS`) 관리 원칙:**
- 어떤 의사·병원도 등록하지 않은 항목은 마스터 리스트에서 삭제 (현재 프로토타입에서 7개 정리: 건선/아토피/사마귀/무좀/탈모/피부암/점)
- 새 진료가 등장하면 의사 데이터에 추가 + 적절한 그룹의 `items`에 추가

---

## 4. 공통 인터랙션 / UI 시스템

### 4.1 헤더 / 네비게이션
- `position: fixed`, height 64px
- 로고: 데스크탑 48px, 모바일 42px
- 햄버거 메뉴(모바일): `.nav-toggle`로 토글
- 네비 링크 4개: 통합 검색 / 피부과의사 찾기 / 피부과 찾기 / 진료분야 찾기

### 4.2 모바일 반응형 분기
- Breakpoint: 1024px(태블릿), 768px(모바일), 480px(소형)
- Hero 영역: 데스크탑은 grid 2열, 모바일은 1열
- 메뉴: 데스크탑 가로 펼침, 모바일은 햄버거

### 4.3 카드 썸네일
- 비율 1:1.1 (`padding-top: 110%`)
- `object-fit: cover`, `object-position: top`
- 모든 썸네일 위 7% 패딩 추가됨 (배경색 자동 샘플링) — 머리 위 여유 공간

### 4.4 의사 누끼 PNG (Hero용)
- 캔버스 600×900~1200 (의사별 다름)
- 위 22% 투명 padding (머리 위 여유)
- 같은 의사의 1번/2번 사진은 동일 캔버스 크기로 정규화 (페이드 시 점프 방지)
- 인물 하단 정렬

### 4.5 OG 메타태그 (SNS 공유)
- 정적 HTML 파일이 의사·병원별로 따로 있음 (`/dermatologist/{id}/index.html`)
- 카카오톡/페이스북 크롤러는 정적 HTML의 메타태그를 읽음 → 의사별 OG 이미지 노출
- SPA가 로드되면 `history.replaceState`로 path URL 유지하면서 동적 렌더
- 핵심 메타: `og:title`, `og:description`, `og:image`(1200×630), `og:url`, `twitter:card="summary_large_image"`

### 4.6 라우팅
- Hash 라우트 (`#member/{id}`) ↔ Path 라우트 (`/dermatologist/{id}/`) 양방향 동기화
- `<base href="/akd-members/">`을 SPA 엔트리에 두어 SPA `replaceState` 후에도 상대 이미지 경로 안정 해석

---

## 5. 데이터 모델 (현재 프로토타입)

### 5.1 Member
```javascript
{
  id: 'bae-jungmin',                      // slug
  name: '배정민',
  photo: '회원 프로필 사진/배정민.jpg',     // 카드 썸네일
  hospitalId: 'healhouse-gangnam',
  role: '원장',
  specialty: '피부과 전문의',
  quote: '백반증 치료의 마지막 피부과가 되겠습니다.',
  positions: ['15기 재무이사, 학술위원, 홍보위원', ...],
  career: ['가톨릭대학교 의과대학 피부과 부교수', ...],
  memberships: ['대한피부과학회 정회원', ...],
  lectures: [{ year: '2026', event: '28회 춘계 학술대회', title: '...' }, ...],
  awards: ['2023 베스트 렉쳐 선정', ...],
  treatments: ['백반증', '백반증수술', '엑시머레이저', ...],
  links: [
    { type: 'website', label: '병원 홈페이지', url: 'https://...' },
    { type: 'instagram', label: '병원 인스타그램', url: 'https://...' }
  ]
}
```

### 5.2 Hospital
```javascript
{
  id: 'healhouse-gangnam',
  name: '힐하우스피부과의원 강남점',
  shortName: '힐하우스피부과',
  address: '서울특별시...',
  lat: 37.5..., lng: 127.0...,
  phone: '02-...',
  hours: { '평일 (월~금)': '10:00 - 20:00', ... },
  treatments: ['백반증', '백반증수술', ...],   // 병원이 명시적 광고
  doctorIds: ['bae-jungmin', 'jung-hanmi', 'park-saemi'],
  description: '...'
}
```

### 5.3 TreatmentGroup
```javascript
{
  id: 'medical',
  name: '피부질환',
  icon: 'fa-stethoscope',
  items: ['여드름', '모공', '백반증', ..., '탈모메조테라피']
}
```

---

## 6. 현재 기술 스택

| 항목 | 사용 기술 |
| --- | --- |
| 프론트엔드 | Vanilla JS SPA (1,705줄), CSS (2,305줄), HTML |
| 호스팅 | GitHub Pages (정적 사이트) |
| 데이터 | `js/app.js` 내 하드코딩 (`MEMBERS`, `HOSPITALS`, `TREATMENT_GROUPS`) |
| 지도 | Leaflet 1.9.4 + OpenStreetMap |
| 폰트/아이콘 | Noto Sans KR, Font Awesome 6.5.1 |
| 이미지 처리 | Python (Pillow), rembg (U2Net) — 누끼/OG 이미지 일괄 생성 |
| 라우팅 | Hash + path 양방향 (history.replaceState) |
| 빌드 | 없음 (정적 파일 직접 배포) |

---

## 7. 2,800명 확장을 위한 권고 (기존 기능 유지 전제)

### 7.1 데이터 계층 (필수)
**현재 한계:** 11명 → 2,800명 시 `app.js`가 약 50배 → 초기 로딩 폭증, 운영자가 코드를 직접 수정해야 함.

**권고:**
- **Phase A (최소):** `members.json`, `hospitals.json` 분리 + GitHub Actions로 CI 갱신
- **Phase B:** Headless CMS(Strapi/Directus/Sanity) 도입 — 어드민 UI + API
- **Phase C:** 자체 백엔드 + DB — 회원 본인 인증·자기 프로필 편집 + 운영자 검수 워크플로

### 7.2 검색 인덱스
- 클라이언트 측 `Array.filter`는 2,800명에서 무리 없음(메모리에 다 올림). 다만 사용자 경험상:
- **Meilisearch / Algolia / ElasticSearch** 중 1택 — 자동완성, 오타 허용, 진료분야 다중 필터
- 지리 검색: PostGIS 또는 BBOX 사전 필터 후 haversine

### 7.3 카드 렌더링 성능
- **무한 스크롤** + `loading="lazy"` (현재 적용됨) + `decoding="async"` (적용됨)
- 카드 썸네일 WebP/AVIF 변환

### 7.4 지도 마커
- `leaflet.markercluster` 도입 필수 (1,500개 병원)

### 7.5 OG 이미지 자동화
- **현재:** Python 스크립트 수동 실행 후 commit
- **권고:** 회원 정보 변경 시 GitHub Actions에서 자동 재생성, 또는 동적 OG 서비스 (`@vercel/og`, Cloudflare Workers)

### 7.6 정적 HTML 자동 생성
- **현재:** 의사·병원별 정적 HTML 17개 수동 생성
- **권고:** Astro/Next.js SSG로 회원 수만큼 자동 빌드

### 7.7 인증·권한 (필수)
- 회원 본인 인증 (학회 회원번호 + 휴대폰/이메일 OTP)
- 회원 본인 프로필 편집 권한
- 운영자 검수 워크플로 (신규 가입 승인, 진료과목 검수)
- 변경 이력 (audit log)

### 7.8 분석·관측
- GA4 또는 Plausible
- Sentry (에러 트래킹)
- Web Vitals 모니터링

### 7.9 접근성 (WCAG AA)
- `prefers-reduced-motion` 대응 (현재는 미대응) — 사진 페이드, 풍선 애니메이션 비활성화 옵션
- 키보드 내비게이션
- 진료분야 칩 `role=button`, 지도 마커 `aria-label`

---

## 8. 비기능 요구사항 (확장 시)

| 항목 | 목표치 |
| --- | --- |
| FCP (First Contentful Paint) | < 1.5s (Fast 3G) |
| 의사 목록 첫 화면 | < 2s |
| 검색 응답 | < 200ms |
| OG 이미지 KakaoTalk 노출 | 100% |
| 가용성 | 99.9% |
| 동시 접속 | 6개월 내 동시 1,000명 |

---

## 9. 데이터 마이그레이션 (현재 프로토타입 → 신규 시스템)

1. `js/app.js`에서 `MEMBERS`, `HOSPITALS`, `TREATMENT_GROUPS` JSON으로 export
2. 신규 DB 스키마로 변환 (필드 정규화, 진료분야 슬러그 통일)
3. 사진 자산은 별도 CDN(Cloudflare R2 / AWS S3)으로 이전
4. 누끼 PNG / OG 이미지는 자동 재생성 파이프라인에 등록
5. 기존 URL 구조(`/dermatologist/{id}/`, `/clinic/{id}/`) 유지 (SEO + 외부 공유 링크 호환)

---

## 10. 확장 단계 마일스톤

| 단계 | 산출물 |
| --- | --- |
| Phase 1: 데이터 분리 | 정적 JSON, 데이터 검증 스크립트, GitHub Actions 빌드 |
| Phase 2: 인증 + 어드민 | 회원 로그인, 프로필 편집, 운영자 검수 |
| Phase 3: 검색 인프라 | Meilisearch/Algolia, 자동완성 |
| Phase 4: 무한 스크롤 + 가상화 | 2,800명 카드 렌더 최적화 |
| Phase 5: 지도 클러스터링 | 1,500개 병원 마커 |
| Phase 6: OG 자동화 | GitHub Actions / 동적 OG 서비스 |
| Phase 7: 분석·관측 | GA4, Sentry, Web Vitals |

---

## 11. 핵심 디자인 결정 (확장 시에도 유지 권장)

| 결정 | 의도 |
| --- | --- |
| 거리 정렬 + ±2km 버킷 랜덤 셔플 | 같은 병원 의사 공정 노출, 광고성 고정 노출 방지 |
| 사진 1·2 교차 페이드 (3s/1.4s) | 의사를 입체적으로, 정적이지 않게 |
| SNS 풍선 부유 + 5초 위치 셔플 (1.2s 이동) | 살아있는 인터랙션, 시선 유도 |
| 누끼 PNG 위 22% 투명 padding | 머리 위 여유, 모바일 hero 클리핑 시 안전 마진 |
| 모바일 hero 컨테이너 height 500px | 인물 크기 유지하면서 hero 길이 단축 (overflow hidden + 투명 padding 클리핑) |
| Hero radial-gradient 배경 | 의사 단독 노출 시 학회/병원 인지도와 독립적 톤 |
| 정적 HTML로 의사·병원별 OG 메타 | KakaoTalk/Facebook 크롤러 호환 |
| `<base href="/akd-members/">` | SPA replaceState 후에도 상대 경로 안전 |
| 진료분야 매칭 fallback (의사 treatments까지 검사) | 의사가 새 진료 추가 시 운영자 개입 없이 자동 검색 노출 |

---

## 12. 핵심 파일 구조 (현재 프로토타입)

```
index.html                          # SPA 엔트리포인트 (모든 라우트의 진입점)
js/app.js                           # 라우터 + 데이터 + 렌더 함수 전체 (1,705줄)
css/style.css                       # 모든 스타일 (2,305줄)

dermatologist/{id}/index.html       # 의사별 정적 OG 메타 페이지 (11개)
clinic/{id}/index.html              # 병원별 정적 OG 메타 페이지 (5개)

images/og/                          # OG 공유 이미지 (1200×630)
  member-{id}.jpg
  hospital-{id}.jpg
  default.jpg

회원 프로필 사진_누끼/{id}.png       # 의사 hero 누끼 PNG (1·2번)
  bae-jungmin.png, bae-jungmin_2.png ...
회원 프로필 사진/{이름}.jpg          # 카드 썸네일 (Korean filename)
회원 프로필 사진_크롭/                # 사용자 수동 크롭 원본
회원 프로필 사진 원본(수정하지 말것)/  # 보존된 원본 (편집 금지)

gen_og_members.py                   # OG 이미지 일괄 생성 스크립트 (Python+Pillow)
```

---

## 13. 운영 워크플로 (현재)

신규 회원 추가 시:
1. `js/app.js`의 `MEMBERS` 배열에 객체 추가
2. 사진을 `회원 프로필 사진 원본/`에 보관, 크롭 후 `회원 프로필 사진_크롭/`에 저장
3. rembg로 누끼 처리 → `회원 프로필 사진_누끼/{id}.png` 생성, 위 22% 투명 padding 추가
4. 카드 썸네일 → `회원 프로필 사진/{이름}.jpg` 저장
5. `python gen_og_members.py` 실행 → OG 이미지 생성
6. 정적 HTML `dermatologist/{id}/index.html` 생성 (메타태그 포함)
7. `index.html` 캐시 버전 bump
8. git commit + push → GitHub Pages 자동 배포

확장 시 이 모든 단계가 자동화되어야 함 (CMS / CI 파이프라인).

---

**작성자:** 프로토타입 개발 진행자
**문의:** 학회 사무국 / 프로토타입 GitHub Issues
