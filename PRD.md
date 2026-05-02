# 대한피부과의사회 회원 소개 사이트 — PRD & 운영 매뉴얼

**문서 버전:** 2.0 (포괄적 매뉴얼)
**최종 수정:** 2026-05-02
**프로토타입 URL:** https://jminbae.github.io/akd-members/
**Git 저장소:** https://github.com/jminbae/akd-members
**대상 확장 규모:** 약 2,800명 회원 / 약 1,500개 병원 (예상)

**문서 목적:** 다음 세션에서 이어 작업하거나 신규 개발자가 인수받을 때 **사전 정보 없이도 모든 작업을 수행 가능**하게 하기 위한 종합 매뉴얼. 단순 명세를 넘어 **자산 파이프라인, 운영 절차, 디버깅 패턴, 모바일 대응 quirk** 등 실전 작업 지식을 모두 수록.

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [사이트 맵 & 메뉴별 기능](#2-사이트-맵--메뉴별-기능)
3. [데이터 모델 (자세히)](#3-데이터-모델-자세히)
4. [디자인 시스템 (색·아이콘·타이포)](#4-디자인-시스템-색아이콘타이포)
5. [모바일 인터랙션 (Android quirk 포함)](#5-모바일-인터랙션-android-quirk-포함)
6. [통합 검색 시스템](#6-통합-검색-시스템)
7. [의사 사진 자산 파이프라인](#7-의사-사진-자산-파이프라인)
8. [OG 공유 이미지 생성](#8-og-공유-이미지-생성)
9. [정적 HTML 페이지 (SNS 크롤러용)](#9-정적-html-페이지-sns-크롤러용)
10. [라우팅 & SPA 동작](#10-라우팅--spa-동작)
11. [신규 회원 추가 절차 (Step-by-step)](#11-신규-회원-추가-절차-step-by-step)
12. [신규 병원 추가 절차](#12-신규-병원-추가-절차)
13. [신규 진료분야 추가 절차](#13-신규-진료분야-추가-절차)
14. [배포 워크플로 (GitHub Pages + Dropbox)](#14-배포-워크플로-github-pages--dropbox)
15. [디버깅 패턴 & 알려진 함정](#15-디버깅-패턴--알려진-함정)
16. [2,800명 확장 권고사항](#16-2800명-확장-권고사항)
17. [핵심 파일 구조](#17-핵심-파일-구조)
18. [중요 코드 위치 (line refs)](#18-중요-코드-위치-line-refs)
19. [향후 개선 제안 + Phase 별 마일스톤](#19-향후-개선-제안--phase-별-마일스톤)
20. [서비스 비전 — 환자·의사 관점](#20-서비스-비전--환자의사-관점)
21. [향후 백엔드 + 의사회 DB 연동](#21-향후-백엔드--의사회-db-연동)
22. [회원 본인 셀프 서비스 (UGC)](#22-회원-본인-셀프-서비스-ugc)
23. [컨텐츠 확장 시 UI 대응](#23-컨텐츠-확장-시-ui-대응)
24. [의료법 컴플라이언스 (의사회 활동 소개 프레임)](#24-의료법-컴플라이언스-의사회-활동-소개-프레임)

---

## 1. 프로젝트 개요

### 1.1 배경
대한피부과의사회 정회원(피부과 전문의)에 대해, **일반인이 위치 기반으로 신뢰할 수 있는 의사·병원을 빠르게 찾도록** 하는 공식 디렉토리. 광고성 정보를 배제하고 학회가 검증한 회원 정보만 노출.

### 1.2 핵심 가치
| 가치 | 구현 방식 |
| --- | --- |
| 신뢰성 | 학회 인증 회원만 노출, 의사 본인 입력 정보 |
| 근접성 | 사용자 위치(geolocation) 기반 거리순 정렬 |
| 공정성 | 같은 거리권(±2km) 내 의사는 매번 랜덤 순서로 노출 |
| 친근감 | 사진 2장 교차 페이드(3초/1.4s), SNS 풍선 부유 + 5초마다 위치 셔플 |
| 공유성 | 카카오톡/페이스북 공유 시 의사·병원별 OG 이미지 자동 노출 |

### 1.3 현재 프로토타입 범위
- 의사 **11명**: 배정민, 김홍석, 이하은, 계지원, 신지연, 정한미, 박새미, 남찬희, 박민기, 이설희, 정종헌
- 병원 **5곳**: 힐하우스피부과의원 강남점, 휴먼피부과의원 평택점, 헤브피부과의원 신사점, 보스피부과의원, 포레피부과의원
- 진료분야 그룹 **5개** / 항목 약 60개 (피부질환·레이저·리프팅·피부시술·기타)

---

## 2. 사이트 맵 & 메뉴별 기능

### 2.1 사이트 맵
```
헤더 (항상 표시)
├─ 통합 검색       [#home]            아이콘: fa-magnifying-glass
├─ 피부과의사 찾기  [#dermatologists]  아이콘: fa-user-md
├─ 피부과 찾기      [#hospitals]       아이콘: fa-hospital
└─ 진료분야로 찾기  [#treatments]      아이콘: fa-wand-magic-sparkles

상세 페이지 (메뉴 외):
├─ /dermatologist/{id}/   의사 상세 (정적 HTML + SPA)
├─ /clinic/{id}/          병원 상세 (정적 HTML + SPA)
└─ #treatment/{name}      진료분야 단일 항목 (해시 라우트)
```

### 2.2 통합 검색 (홈, `#home`)
사용자가 가장 먼저 보는 화면. 의사명/병원명/진료분야를 즉시 자동완성으로 제안.

**구성:**
- 메인 카피: "나에게 꼭 맞는 피부과를 찾아보세요!"
- 검색 input (자동완성 dropdown)
- 단축버튼 3개 (피부과의사 찾기 / 피부과 찾기 / 진료분야로 찾기)

**동작:**
- 데스크탑: 페이지 로드 즉시 input 자동 포커스 (`focus({preventScroll: true})`), 모바일은 키보드 자동 팝업 방지
- 키보드 입력 시 자동완성 dropdown (`absolute` overlay, scrollable, z-index 50)
- ↑/↓ 키 네비, Enter로 첫 매칭으로 이동
- 자모만 입력된 상태(`ㅂ`, `ㅏㅂ`)에선 dropdown 비움 (음절 완성 후 검색)
- 한글 받침 fuzzy 매칭: "배" → 백반증/뱀/뱅 등 매치 (단방향, query는 그대로 검색)

### 2.3 피부과의사 찾기 (`#dermatologists`)
거리순 정렬 + ±2km 버킷 내 랜덤 셔플.

**알고리즘 (`updateMembersView` in app.js):**
```
1. 사용자 geolocation 요청 (실패 시 서울시청 37.5665, 126.9780)
2. 각 의사 → 소속 병원 lat/lng로 haversine 거리 계산
3. bucket = floor(distance / 2km)
4. 정렬: bucket asc, 같은 bucket 내 random
```

**카드 구성 (`member-card`):**
- 사진 (`회원 프로필 사진/{이름}.jpg`, lazy loading)
- 이름, 소속병원 단축명 + 직책
- 거리 표시 (예: "약 5.4km")
- 진료분야 태그 (상위 N개)

### 2.4 의사 상세 (`/dermatologist/{id}/` 또는 `#member/{id}`)

**Hero 영역 (`.member-hero-v2`):**
- 좌측 (모바일은 상단): 병원 단축명 칩, 의사 이름(큰 글씨), quote
- 우측 (모바일은 하단): 인물 누끼 사진 (배경 그라데이션 위)
  - 사진 2장 보유 의사: 3초마다 cross-fade (1.4초 페이드)
  - 사진 1장 의사: 정적
  - 모바일 컨테이너 height 500px (인물 크기 유지하면서 hero 길이 단축)
- **SNS 풍선** (인물 주변):
  - `member.links` 배열로부터 자동 생성 (홈페이지/인스타/유튜브/스레드/틱톡)
  - **`balloonFloat` 키프레임**: 3.8초 ±12px 수직 + 약간의 수평 드리프트
  - **5초마다 zone 내 랜덤 위치 셔플** (`startBalloonReposition`)
  - 8개 zone(상단2/중간2/하단2/좌우)에 랜덤 배치, 인물 얼굴 안 가림
  - `transition: top 1.2s, left 1.2s` cubic-bezier로 부드러운 이동

**본문 정보 카드 (조건부):**
| 카드 | 데이터 필드 | 설명 |
| --- | --- | --- |
| 대한피부과의사회 활동 | `positions[]` | 기수별 직책 |
| 경력 | `career[]` | 경력 사항 |
| 학회 활동 | `memberships[]` | 정회원 학회 목록 |
| 학술대회 강의 | `lectures[]` | year/event/title |
| 수상·활동 | `awards[]` | |
| 진료분야 | `treatments[]` | 칩 (클릭 시 진료분야 페이지) |
| 소속 의료진 | 같은 병원 다른 의사들 | 가로 스크롤 |

`DOCTORS_WITH_TWO_PHOTOS` Set으로 사진 2장 보유 의사 추적 (현재 8명).

### 2.5 피부과 찾기 (`#hospitals`)
- 좌측: Leaflet 지도 + 병원 마커
- 우측: 거리순 병원 리스트
- 마커 hover/click ↔ 리스트 동기화

### 2.6 병원 상세 (`/clinic/{id}/` 또는 `#hospital/{id}`)
- 병원명, 주소, 전화번호, 진료시간(요일별)
- Leaflet 지도 (병원 위치)
- 진료분야 그룹별 칩 묶음
- 소속 의료진 가로 스크롤
- 병원 description

### 2.7 진료분야로 찾기 (`#treatments`)
- 5개 그룹 탭
- 항목 칩 클릭 시 그 진료를 보는 병원·의사 목록 + 지도 갱신
- **매칭 로직 (`getHospitalsByTreatment`)**: 병원의 `treatments[]` OR 소속 의사 중 한 명이라도 그 진료를 가지면 매칭
  - 즉 의사가 새 진료를 추가하면 병원 데이터를 손대지 않아도 자동 검색 결과 노출

### 2.8 진료분야 단일 항목 (`#treatment/{name}`)
- 통합 검색에서 진료분야 클릭 시 이 라우트로 이동
- `selectTreatment(name)` 단일 호출 (그룹 전체 결과 race condition 회피)
- 탭/아이템 visibility만 업데이트 후 단일 항목 결과 표시

---

## 3. 데이터 모델 (자세히)

### 3.1 Member (`MEMBERS` 배열, `js/app.js` 라인 107~)

```javascript
{
  id: 'bae-jungmin',                    // slug (소문자, 영문, 하이픈)
  name: '배정민',                        // 표시명 (한글)
  photo: '회원 프로필 사진/배정민.jpg',  // 카드 썸네일 (Korean filename!)
  hospitalId: 'healhouse-gangnam',      // HOSPITALS.id 참조
  role: '원장',                         // 직책 (원장/부원장/진료의 등)
  specialty: '피부과 전문의',
  quote: '백반증 치료의 마지막 피부과가 되겠습니다.',
  positions: [                          // 학회 직책 (대한피부과의사회 활동)
    '15기 재무이사, 학술위원, 홍보위원',
    ...
  ],
  career: [                             // 경력
    '가톨릭대학교 의과대학 피부과 부교수',
    ...
  ],
  memberships: [                        // 학회 정회원
    '대한피부과학회 정회원',
    ...
  ],
  lectures: [                           // 학술대회 강의
    { year: '2026', event: '28회 춘계 학술대회', title: '베스트렉처 리바이벌' },
    ...
  ],
  awards: [                             // 수상
    '2023 베스트 렉쳐 선정',
  ],
  treatments: [                         // 진료분야 (TREATMENT_GROUPS의 items 참조)
    '백반증', '백반증수술', '엑시머레이저', ...
  ],
  links: [                              // SNS/웹
    { type: 'website',   label: '병원 홈페이지', url: 'https://...' },
    { type: 'instagram', label: '병원 인스타그램', url: 'https://...' },
    // 가능한 type: website, instagram, youtube, threads, tiktok, linktree
  ]
}
```

**필수 필드:** id, name, photo, hospitalId, specialty, treatments
**선택 필드:** quote, positions, career, memberships, lectures, awards, links

### 3.2 Hospital (`HOSPITALS` 배열, 라인 12~)

```javascript
{
  id: 'healhouse-gangnam',
  name: '힐하우스피부과의원 강남점',
  shortName: '힐하우스피부과 강남',
  address: '서울특별시 강남구 강남대로 518, 4·5층',
  phone: '02-6951-5761',
  lat: 37.5090, lng: 127.0235,           // 지도 마커, 거리 계산용
  website: 'http://...',
  hours: {
    '평일 (월~금)': '10:00 - 20:00',
    '토요일': '09:00 - 15:00',
    '일요일·공휴일': '휴무'
  },
  treatments: [...],                      // 병원이 광고하는 진료분야
  doctorIds: ['bae-jungmin', 'jung-hanmi', 'park-saemi'],
  description: '...'
}
```

### 3.3 TreatmentGroup (`TREATMENT_GROUPS` 배열, 라인 507~)

```javascript
{
  id: 'medical',                  // medical/laser/lifting/aesthetic/other
  name: '피부질환',                // 표시명
  icon: 'fa-wand-magic-sparkles', // Font Awesome 6
  items: ['여드름', '모공', '백반증', ...]
}
```

### 3.4 데이터 무결성 규칙
- 의사가 등록한 `treatments`는 `TREATMENT_GROUPS`의 `items`에 존재해야 통합 검색 결과/필터에 노출
- `TREATMENT_GROUPS.items`에만 있고 어떤 의사·병원도 사용 안 하는 항목은 정리(현재 사용 안 하는 항목 7개 제거된 상태)
- 병원의 `doctorIds`는 `MEMBERS.id` 참조해야 함
- 의사의 `hospitalId`는 `HOSPITALS.id` 참조해야 함

---

## 4. 디자인 시스템 (색·아이콘·타이포)

### 4.1 카테고리 색상 (페이지 헤더 + 검색 dropdown 일관)

| 카테고리 | 검색 dropdown | 페이지 헤더 그라데이션 |
| --- | --- | --- |
| 의사 (member) | `#2E86DE` 파랑 | `#1B4965` → `#3E7CA1` |
| 진료분야 (treatment) | `#6E73B5` 보라 | `#3B3B6D` → `#6E73B5` |
| 병원 (hospital) | `#C84B5C` 붉은 톤 | `#6B2B36` → `#B0525E` |

### 4.2 핵심 색 토큰 (`:root`)
```css
--primary: #1B4965; --primary-dark: #143548; --primary-light: #3E7CA1;
--accent: #E8505B; --accent-light: #FF6B74;
--secondary: #5FA8D3; --secondary-light: #8FC4E0;
--text: #1a1a1a; --text-light: #555; --text-lighter: #888; --text-muted: #999;
--bg: #f7f9fc; --card: #ffffff; --border: #e0e6ed;
--nav-height: 64px;
--max-width: 1200px;
--shadow: 0 2px 8px rgba(0,0,0,0.06); --shadow-hover: 0 8px 24px rgba(0,0,0,0.12);
--radius: 16px; --radius-sm: 10px;
```

### 4.3 아이콘 (Font Awesome 6.5.1)
- 통합 검색: `fa-magnifying-glass`
- 의사: `fa-user-md`
- 병원: `fa-hospital`
- 진료분야: `fa-wand-magic-sparkles` (이전 fa-stethoscope에서 변경)
- 정보 카드: `fa-id-badge`(활동), `fa-briefcase`(경력), `fa-graduation-cap`(학회), `fa-star`(수상), `fa-stethoscope`(진료분야 카드 헤더)
- 헤더 로고: 데스크탑 48px / 모바일 42px (헤더 높이 64px 유지)

### 4.4 타이포
- Noto Sans KR (Google Fonts) — 300/400/500/600/700/800
- 본문 16px, 카드 제목 22-28px, hero 이름 44-72px

### 4.5 모바일 메뉴 레이아웃
햄버거 메뉴 펼침 시 grid 레이아웃:
- `grid-template-columns: 22px 1fr` (아이콘 좌측 컬럼 고정 + 텍스트 영역 가운데 정렬)
- 모든 메뉴 항목 텍스트가 동일 좌측 정렬됨

---

## 5. 모바일 인터랙션 (Android quirk 포함)

### 5.1 검색창 슬라이드 업/다운
**구현 위치:** `js/app.js` `slideSearchUp()` 함수 (라인 ~834)

```js
const slideSearchUp = () => {
  if (window.innerWidth > 768 || !homePage) return;
  if (homePage.classList.contains('search-focused')) return; // 가드
  const searchBox = document.querySelector('.search-box');
  if (!searchBox) return;
  clearAllPending();
  // 1. transform identity로 reset
  homePage.style.transition = 'none';
  homePage.style.transform = 'none';
  void homePage.offsetHeight;  // 동기 layout flush
  // 2. 자연 위치 측정
  const rect = searchBox.getBoundingClientRect();
  const shift = Math.min(0, -(rect.top - 80));  // target = nav 56 + 24 gap
  // 3. animate
  homePage.style.transition = '';
  homePage.style.transform = `translate3d(0, ${shift}px, 0)`;
  homePage.classList.add('search-focused');
};
```

**트리거 (3중 안전망):**
```js
searchInput.addEventListener('focus', slideSearchUp);
searchInput.addEventListener('pointerdown', () => setTimeout(slideSearchUp, 30));
searchInput.addEventListener('click',       () => setTimeout(slideSearchUp, 30));
```

**왜 이렇게?** Android Chrome quirk:
- 키보드 dismiss 시 input이 focus를 유지함
- 사용자가 다시 input을 탭해도 이미 focused → `focus` 이벤트 미발화
- `pointerdown`/`click`은 매 탭마다 무조건 발화 → fallback 트리거
- 30ms defer로 in-flight blur/revert 콜백과 충돌 방지

### 5.2 Revert 로직 (검색어 비울 때 자동 슬라이드 다운)

```js
const revertIfEmpty = () => {
  if (searchInput.value.trim()) return;          // 검색어 있으면 유지
  if (!homePage.classList.contains('search-focused')) return;
  homePage.classList.remove('search-focused');
  homePage.style.transform = 'translate3d(0, 0, 0)';  // animate to identity
  removeClassTimer = setTimeout(() => {
    homePage.style.transform = '';                // inline 제거
    removeClassTimer = null;
  }, 400);
};
```

**3중 트리거 (Android quirk 대응):**
1. `blur` 이벤트 (정상 케이스)
2. `input` 이벤트 (blurred + empty)
3. `visualViewport.resize` keyboard close 감지 (Android back button 케이스)

### 5.3 핵심 design decisions

| 결정 | 이유 |
| --- | --- |
| transform via inline (CSS var 미사용) | CSS var/class resolution race 방지 |
| 매 focus마다 `transform: 'none'` reset | mid-transition state에 의한 잘못된 측정 방지 |
| 모든 측정 후 `void offsetHeight` | 동기 layout flush 보장 |
| `100lvh` (large viewport height) min-height | Android keyboard에 의한 layout viewport 축소 무시 |
| `.fade-in` 키프레임에서 transform 제거 | forwards fill-mode가 transform 잠그던 문제 해결 |

### 5.4 햄버거 메뉴 자동 닫기
다음 모든 케이스에서 닫힘:
- 메뉴 외부 클릭 (`document click capture`)
- 입력창 포커스 (`focusin` event, input/textarea/select/contenteditable)
- 본문 스크롤 (`window scroll`)
- 본문 터치 (`touchstart`)
- 메뉴 항목 클릭, 토글 재클릭

### 5.5 페이지 전환 시 즉시 reset
`router.handle()`에서 페이지 전환 시:
```js
document.body.style.minHeight = '';           // body 높이 리셋
document.querySelector('.home-page')?.classList.remove('search-focused');
window.scrollTo({ top: 0, behavior: 'instant' });  // smooth scroll-back 방지
```
→ 검색 결과 클릭 시 위에서 슬라이드 다운하는 애니메이션 없음.

---

## 6. 통합 검색 시스템

### 6.1 검색 흐름 (`handleSearch()` in app.js ~1023)

```
입력 → trim → 빈 입력? → dropdown 비움
         → 한글 자모만? (isOnlyKoreanJamo) → dropdown 비움 (음절 완성 대기)
         → fuzzy 매칭 시작
              → MEMBERS forEach → fuzzyMatchScore(name, query) ≥ 0 ? push
              → HOSPITALS forEach → name/shortName 매칭, fallback to address (score 4)
              → TREATMENT_GROUPS.flatMap(g.items) forEach → 매칭 + 병원 카운트
         → 정렬: score asc → typeOrder(member→treatment→hospital) → alphabetical
         → render dropdown
```

### 6.2 한글 받침 fuzzy 매칭 (`fuzzyMatchScore()`, `stripKoreanFinal()`)

핵심 알고리즘: 받침 strip은 **label에만** 적용, query는 그대로
- "배" 검색 → 배정민 (score 0, exact prefix), 백반증/백반증수술/백반증탈색치료 (score 1, stripped prefix)
- "백" 검색 → 백반증 등만 (배정민은 매치 안 됨)

```js
function stripKoreanFinal(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c >= 0xAC00 && c <= 0xD7A3) {
      const offset = c - 0xAC00;
      out += String.fromCharCode(0xAC00 + (offset - (offset % 28)));
    } else {
      out += s[i];
    }
  }
  return out;
}

// 점수 (낮을수록 우선): 0=exact prefix, 1=stripped prefix, 2=exact contains, 3=stripped contains
function fuzzyMatchScore(label, query) {
  const lcLabel = label.toLowerCase();
  const lcQuery = query.toLowerCase();
  if (lcLabel.startsWith(lcQuery)) return 0;
  const sfLabel = stripKoreanFinal(lcLabel);
  if (sfLabel.startsWith(lcQuery)) return 1;
  if (lcLabel.includes(lcQuery)) return 2;
  if (sfLabel.includes(lcQuery)) return 3;
  return -1;
}
```

### 6.3 자모 단독 입력 시 검색 대기

```js
function isOnlyKoreanJamo(s) {
  return /^[\u1100-\u11FF\u3130-\u318F]+$/.test(s);
}
```
- `ㅂ` → 빈 dropdown (대기)
- `ㅂㅏ` → 빈 dropdown (아직 미완성)
- `배` → 정상 검색 (음절 완성)

### 6.4 키보드 네비
| 키 | 동작 |
| --- | --- |
| ↓ | 다음 항목 (마지막에서 첫 번째로 순환) |
| ↑ | 이전 항목 (첫 번째에서 마지막으로 순환) |
| Enter | 활성 항목 또는 첫 매칭으로 이동 |
| Esc | 입력 비우고 dropdown 닫기 |
| 돋보기 버튼 클릭 | Enter와 동일 |

### 6.5 Suggestion 항목 sub 라벨
- 의사: `힐하우스피부과 강남 원장`
- 병원: `서울특별시 강남구 강남대로 518...`
- 진료분야: `피부질환 · 진료 가능 3곳` (병원 개수 기준)

---

## 7. 의사 사진 자산 파이프라인

### 7.1 폴더 구조
```
회원 프로필 사진 원본(수정하지 말것)/   ← 보존! 절대 수정 금지
회원 프로필 사진_크롭/                   ← 사용자가 수동으로 1:1 비율로 크롭한 원본
회원 프로필 사진_누끼/                   ← rembg로 배경 제거된 PNG (hero용)
회원 프로필 사진/                        ← 카드 썸네일 JPG (Korean filename, e.g. "배정민.jpg")
```

### 7.2 새 의사 사진 추가 절차

**STEP 1: 원본 사진 받기**
- 의사로부터 받은 원본은 `회원 프로필 사진 원본(수정하지 말것)/`에 보관 (수정 금지)

**STEP 2: 사용자가 수동으로 크롭**
- 1:1 비율(또는 김홍석2.jpg 스타일)로 크롭
- 머리 약간 위쪽 여백 포함
- `회원 프로필 사진_크롭/{이름}.jpg` (또는 `{이름}2.jpg` 같은 이름)에 저장

**STEP 3: rembg로 누끼 처리 (Python)**
```python
from rembg import remove
from PIL import Image
import os

src = '회원 프로필 사진_크롭/김홍석2.jpg'
dst = '회원 프로필 사진_누끼/kim-hongseok.png'  # 영문 slug 사용

img = Image.open(src)
out = remove(img)  # u2net 모델로 배경 제거
out.save(dst, 'PNG')
```

**STEP 4: 캔버스 600x900~1200으로 정규화 + 위 22% 투명 padding**
- 머리 위 여백 확보 → 모바일 hero에서 잘림 방지
- 같은 의사의 1번/2번 사진은 동일 캔버스 크기로 맞춤 (cross-fade 점프 방지)

**예시 스크립트:**
```python
def add_top_padding(img_path, target_top_pct=0.22):
    img = Image.open(img_path).convert('RGBA')
    bbox = img.getbbox()  # 비투명 영역 bounding box
    if not bbox: return
    w, h = img.size
    current_top = bbox[1]
    if current_top / h >= target_top_pct: return  # 이미 충분
    extra = int((target_top_pct * h - current_top) / (1 - target_top_pct)) + 1
    new_h = h + extra
    new_img = Image.new('RGBA', (w, new_h), (0,0,0,0))
    new_img.paste(img, (0, extra))
    new_img.save(img_path, 'PNG', optimize=True)
```

**STEP 5: 카드 썸네일 생성**
- `회원 프로필 사진/{이름}.jpg` (Korean filename!) — 카드 리스트용
- 옵션 A: 크롭본 그대로 사용 (배경 그대로)
- 옵션 B: 누끼 PNG를 light gradient bg에 composite한 JPG
  - 머리 위 7% 여백 추가 (배경색 자동 샘플링)

**STEP 6: 사진 2장 보유 의사 등록**
`js/app.js` 라인 ~919:
```js
const DOCTORS_WITH_TWO_PHOTOS = new Set([
  'bae-jungmin', 'kim-hongseok', 'lee-haeun', 'gye-jiwon',
  'shin-jiyeon', 'jung-hanmi', 'park-saemi', 'park-mingi'
]);
```
- 새 의사가 사진 2장 보유면 추가
- 파일명 규칙: `{id}.png` (1번), `{id}_2.png` (2번)
- 1번/2번 순서 바꾸려면 두 파일을 swap (Python `shutil.move`로 임시 → 교환)

### 7.3 사진 1·2 순서 swap 예시 (kim-hongseok, shin-jiyeon)
```python
import shutil
folder = '회원 프로필 사진_누끼'
for name in ['kim-hongseok', 'shin-jiyeon']:
    p1, p2, tmp = f'{folder}/{name}.png', f'{folder}/{name}_2.png', f'{folder}/{name}_tmp.png'
    shutil.move(p1, tmp)
    shutil.move(p2, p1)
    shutil.move(tmp, p2)
```

### 7.4 사진 표시 위치별 매핑
| 위치 | 사용 자산 |
| --- | --- |
| Hero (의사 상세 페이지) | `회원 프로필 사진_누끼/{id}.png`, `{id}_2.png` |
| 카드 (의사 목록) | `회원 프로필 사진/{이름}.jpg` (Korean filename) |
| 통합 검색 dropdown | (사진 없음, fa-user-md 아이콘만) |
| OG 공유 이미지 | `회원 프로필 사진_누끼/{id}.png`을 합성 |

---

## 8. OG 공유 이미지 생성

### 8.1 스크립트
`gen_og_members.py` (프로젝트 루트)

**호출:**
```bash
cd "D:/Dropbox/Claude Code/260428 회원소개"
python gen_og_members.py
```

**동작:**
- 1200x630px 캔버스 (OG 표준)
- 좌측: 그라데이션 배경 + "피부과 전문의" 빨간 뱃지 + 병원명 + 의사명 (큰 글씨)
- 우측: `회원 프로필 사진_누끼/{id}.png` 합성 (target_h = 92% 캔버스, bottom-aligned)
- 출력: `images/og/member-{id}.jpg` (quality 88, optimized)
- 폰트: 맑은 고딕 (`C:/Windows/Fonts/malgunbd.ttf`, `malgun.ttf`)

**MEMBERS 리스트 (스크립트 내부 하드코딩):**
```python
MEMBERS = [
    ('bae-jungmin', '배정민', '힐하우스피부과의원 강남점'),
    ('kim-hongseok', '김홍석', '보스피부과의원'),
    ...
]
```

### 8.2 OG 이미지 종류
- `images/og/default.jpg` — 홈페이지 기본
- `images/og/member-{id}.jpg` — 의사별 (11개)
- `images/og/hospital-{id}.jpg` — 병원별 (5개)
- 1200x630, JPEG quality 88

### 8.3 신규 의사 OG 추가
1. `gen_og_members.py`의 `MEMBERS` 리스트에 추가:
   ```python
   ('new-doctor-id', '새의사', '병원 풀네임'),
   ```
2. `회원 프로필 사진_누끼/new-doctor-id.png` 준비
3. `python gen_og_members.py` 실행
4. `images/og/member-new-doctor-id.jpg` 자동 생성

---

## 9. 정적 HTML 페이지 (SNS 크롤러용)

### 9.1 왜 필요한가?
카카오톡/페이스북 크롤러는 SPA의 동적 메타태그를 못 읽음. **정적 HTML 파일이 의사·병원별로 따로 있어야** OG 이미지가 정상 노출됨.

### 9.2 폴더 구조
```
dermatologist/
  bae-jungmin/index.html
  kim-hongseok/index.html
  ...                          (11개)
clinic/
  healhouse-gangnam/index.html
  human-pyeongtaek/index.html
  ...                          (5개)
```

### 9.3 정적 HTML 템플릿 (bae-jungmin 예시)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>힐하우스피부과의원 강남점 배정민</title>
  <meta name="description" content="백반증 치료의 마지막 피부과가 되겠습니다.">
  <meta property="og:title" content="힐하우스피부과의원 강남점 배정민">
  <meta property="og:description" content="백반증 치료의 마지막 피부과가 되겠습니다.">
  <meta property="og:image" content="https://jminbae.github.io/akd-members/images/og/member-bae-jungmin.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://jminbae.github.io/akd-members/dermatologist/bae-jungmin/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ko_KR">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="...">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image" content="...">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="css/style.css?v=20260501bw">
</head>
<body>
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">
        <img src="images/akd-logo.png" alt="대한피부과의사회" class="logo-akd-img">
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="메뉴 열기">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#home" class="nav-link" data-page="home"><i class="fas fa-magnifying-glass"></i> 통합 검색</a></li>
        <li><a href="#dermatologists" class="nav-link" data-page="dermatologists"><i class="fas fa-user-md"></i> 피부과의사 찾기</a></li>
        <li><a href="#hospitals" class="nav-link" data-page="hospitals"><i class="fas fa-hospital"></i> 피부과 찾기</a></li>
        <li><a href="#treatments" class="nav-link" data-page="treatments"><i class="fas fa-wand-magic-sparkles"></i> 진료분야로 찾기</a></li>
      </ul>
    </div>
  </nav>
  <main id="app"></main>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-copy">&copy; 2026 대한피부과의사회. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="js/app.js?v=20260501bw"></script>
</body>
</html>
```

### 9.4 핵심 포인트

**`<base href>` 사용 안 함**: 이전 시도에서 사용했지만 SPA replaceState 후 상대 경로 문제 발생해서 제거. 대신 css/js 경로는 절대 경로 사용 가능 (`href="css/style.css"`처럼 상대 경로지만 정상 작동).

**경로 전략:**
- 정적 HTML이 `/akd-members/dermatologist/bae-jungmin/index.html`에 있을 때
- `css/style.css`는 `/akd-members/dermatologist/bae-jungmin/css/style.css`로 해석되어 404 발생할 수 있음
- 해결: `index.html`에 `<base href="/akd-members/">` 추가됨 (메인만, 정적은 그대로)

**SPA 통합:**
- `app.js`가 로드되면 router가 path를 hash로 변환 (`pathToHash()`)
- `/dermatologist/bae-jungmin/` → `#member/bae-jungmin` → `renderMemberDetail` 호출
- 정적 HTML의 `<main id="app"></main>`에 SPA가 동적 컨텐츠 주입

### 9.5 정적 HTML 일괄 업데이트

캐시 버전 갱신할 때 등 자주 일괄 업데이트:

```python
import os
files = ['index.html']
for sub in ['dermatologist', 'clinic']:
    for root, dirs, fs in os.walk(sub):
        for f in fs:
            if f == 'index.html':
                files.append(os.path.join(root, f))

n = 0
for p in files:
    with open(p, 'r', encoding='utf-8') as fp: txt = fp.read()
    new = txt.replace('v=20260501ax', 'v=20260501bw')  # 새 버전으로
    if new != txt:
        with open(p, 'w', encoding='utf-8') as fp: fp.write(new)
        n += 1
print(f'Updated {n} files')
```

### 9.6 신규 의사 정적 HTML 생성

기존 파일 복사 후 메타태그만 변경:
```python
import shutil
shutil.copy('dermatologist/bae-jungmin/index.html', 'dermatologist/new-doctor/index.html')

with open('dermatologist/new-doctor/index.html', 'r', encoding='utf-8') as f:
    txt = f.read()

txt = txt.replace('힐하우스피부과의원 강남점 배정민', '병원풀네임 새의사이름')
txt = txt.replace('백반증 치료의 마지막 피부과가 되겠습니다.', '새 의사의 quote')
txt = txt.replace('member-bae-jungmin.jpg', 'member-new-doctor.jpg')
txt = txt.replace('dermatologist/bae-jungmin/', 'dermatologist/new-doctor/')

with open('dermatologist/new-doctor/index.html', 'w', encoding='utf-8') as f:
    f.write(txt)
```

---

## 10. 라우팅 & SPA 동작

### 10.1 Router 클래스 (`app.js` ~630)

```js
class Router {
  add(pattern, handler) { ... }
  handle() {
    let hash = window.location.hash || pathToHash() || '#home';
    // body 정리 + 기존 search-focused 클래스 제거
    document.body.style.minHeight = '';
    document.querySelector('.home-page')?.classList.remove('search-focused');
    for (const route of this.routes) {
      const match = this.match(route.pattern, hash);
      if (match !== null) {
        // path/hash URL 동기화
        const pathUrl = hashToPath(hash);
        if (pathUrl) history.replaceState(null, '', pathUrl);
        else if (...) history.replaceState(null, '', SITE_BASE + '/' + hash);
        route.handler(match);
        this.updateNav(hash);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });  // 즉시 0
        return;
      }
    }
  }
}
```

### 10.2 라우트 매핑

| Hash 패턴 | Path 패턴 | 핸들러 |
| --- | --- | --- |
| `#home` | `/akd-members/` | `renderHome` |
| `#dermatologists` | `/akd-members/#dermatologists` | `renderMembers` |
| `#member/:id` | `/akd-members/dermatologist/{id}/` | `renderMemberDetail` |
| `#hospitals` | `/akd-members/#hospitals` | `renderHospitals` |
| `#hospital/:id` | `/akd-members/clinic/{id}/` | `renderHospitalDetail` |
| `#treatments` | `/akd-members/#treatments` | `renderTreatments` |
| `#treatment/:id` | `/akd-members/#treatment/{name}` | `selectTreatment` 단일 |

### 10.3 path ↔ hash 변환

```js
const SITE_BASE = '/akd-members';

function pathToHash() {
  let p = window.location.pathname.replace(SITE_BASE, '').replace(/^\/+|\/+$/g, '');
  if (!p) return null;
  let m;
  if (m = p.match(/^dermatologist\/([^/]+)$/)) return '#member/' + m[1];
  if (m = p.match(/^clinic\/([^/]+)$/)) return '#hospital/' + m[1];
  return null;
}

function hashToPath(hash) {
  let m;
  if (m = hash.match(/^#member\/(.+)$/))   return SITE_BASE + '/dermatologist/' + m[1] + '/';
  if (m = hash.match(/^#hospital\/(.+)$/)) return SITE_BASE + '/clinic/' + m[1] + '/';
  return null;
}
```

### 10.4 캐시 버전 관리
`?v=20260501bw` 형식으로 모든 css/js 링크에 query param 추가. 변경 시 한 글자씩 increment. 정적 HTML도 일괄 업데이트.

---

## 11. 신규 회원 추가 절차 (Step-by-step)

회원 한 명 추가 시 **모든 자산을 빠짐없이 등록하는 13단계**:

```
[1] 사진 원본 받기 → 회원 프로필 사진 원본(수정하지 말것)/ 보관
[2] 1:1 또는 인물 중심 크롭 → 회원 프로필 사진_크롭/{이름}.jpg 저장
[3] rembg로 배경 제거 → 회원 프로필 사진_누끼/{slug}.png 저장
[4] 캔버스 위 22% 투명 padding 추가
[5] 사진 2장이면 _2.png도 동일 절차, 캔버스 크기 1번과 동일하게 맞춤
[6] 카드 썸네일 생성 → 회원 프로필 사진/{이름}.jpg (Korean filename)
[7] js/app.js의 MEMBERS 배열에 객체 추가 (라인 107~)
[8] 병원의 doctorIds 배열에 추가
[9] DOCTORS_WITH_TWO_PHOTOS Set에 추가 (사진 2장이면)
[10] gen_og_members.py의 MEMBERS 리스트에 추가 → 실행 → images/og/member-{slug}.jpg
[11] dermatologist/{slug}/index.html 생성 (기존 복사 후 메타태그 수정)
[12] index.html + 정적 HTML 캐시 버전 bump (예: bw → bx)
[13] git add -A && commit && push (Dropbox 락 주의 — 14절 참고)
```

### 추가 의사 데이터 객체 템플릿

```js
{
  id: 'lee-saerom',                          // 영문 slug
  name: '이새롬',
  photo: '회원 프로필 사진/이새롬.jpg',
  hospitalId: 'healhouse-gangnam',
  role: '원장',
  specialty: '피부과 전문의',
  quote: '환자 한 명 한 명에게 진심으로...',  // 의사 본인의 한 줄 소개
  positions: [
    '15기 정보위원'
  ],
  career: [
    '서울대학교 의과대학 피부과 전공의',
    ...
  ],
  memberships: [
    '대한피부과학회 정회원',
    '대한피부과의사회 정회원'
  ],
  lectures: [],                              // 없으면 빈 배열
  awards: [],
  treatments: ['여드름', '모공', '기미/색소', '리프팅', ...],
  links: [
    { type: 'website', label: '병원 홈페이지', url: 'https://...' },
    { type: 'instagram', label: '병원 인스타그램', url: 'https://instagram.com/...' }
  ]
}
```

---

## 12. 신규 병원 추가 절차

```
[1] HOSPITALS 배열에 객체 추가 (js/app.js 라인 12~)
[2] lat/lng는 카카오맵·Google Maps에서 좌표 추출
[3] 소속 의사 doctorIds 추가 (의사도 함께 등록)
[4] gen_og_hospitals.py 만들어 OG 이미지 생성 (현재 없으면 OG 수동 작성 또는 default.jpg)
[5] clinic/{id}/index.html 생성
[6] 캐시 버전 bump
```

### 신규 병원 객체 템플릿
```js
{
  id: 'new-clinic-id',
  name: '새피부과의원',
  shortName: '새피부과',
  address: '서울특별시 ...',
  phone: '02-...',
  lat: 37.xxx, lng: 127.xxx,
  website: 'https://...',
  hours: {
    '평일 (월~금)': '10:00 - 20:00',
    '토요일': '09:00 - 15:00',
    '일요일·공휴일': '휴무'
  },
  treatments: [...],
  doctorIds: ['some-doctor-id'],
  description: '병원 소개...'
}
```

---

## 13. 신규 진료분야 추가 절차

진료분야가 검색·필터에 노출되려면 `TREATMENT_GROUPS`의 `items`에 등록되어야 함:

```
[1] js/app.js TREATMENT_GROUPS에서 적절한 그룹 찾기 (medical/laser/lifting/aesthetic/other)
[2] 해당 그룹의 items 배열에 추가
[3] 그 진료를 보는 의사의 treatments 배열에도 추가
[4] (선택) 병원의 treatments 배열에도 추가 (이미 의사가 가지면 자동 매칭됨)
[5] 캐시 버전 bump
```

### 그룹 분류 가이드

| 그룹 | 어떤 항목 | 색상 |
| --- | --- | --- |
| `medical` 피부질환 | 여드름, 백반증, 모공, 켈로이드, 선천성모반, 외상흉터 등 질환 | 보라 (전체 일관) |
| `laser` 레이저 | 기미/색소, 흉터, 여성제모, 문신제거, 레이저토닝 | (그룹 자체는 별색 아님) |
| `lifting` 리프팅 | 써마지, 울쎄라, 올타이트, 티타늄, 텐써마, 덴서티알파 | |
| `aesthetic` 피부시술 | 필러, 스킨부스터, 스컬트라, 쥬베룩, 리쥬란, 보톡스 종류 | |
| `other` 기타 | 비만, 다이어트, 고압산소, HPL체형교정주사시술 | |

### 사용 안 하는 항목 정리
**원칙**: `TREATMENT_GROUPS.items`에 있는데 어떤 의사·병원도 등록 안 한 항목은 제거.

```python
# 검사 스크립트
import re
with open('js/app.js', 'r', encoding='utf-8') as f: txt = f.read()
groups_match = re.search(r'const TREATMENT_GROUPS = (\[.*?\n\]);', txt, re.S)
all_items = []
for block in re.findall(r"items: \[(.*?)\]", groups_match.group(1), re.S):
    all_items.extend(re.findall(r"'([^']+)'", block))
all_used = set()
for block in re.findall(r"treatments: \[(.*?)\]", txt, re.S):
    all_used.update(re.findall(r"'([^']+)'", block))
unused = [x for x in all_items if x not in all_used]
print('사용 안 하는 항목:', unused)
```

---

## 14. 배포 워크플로 (GitHub Pages + Dropbox)

### 14.1 일반 워크플로

```bash
cd "D:/Dropbox/Claude Code/260428 회원소개"
# 변경 작업 후
git status --short                    # 변경 확인
git add -A
git commit -m "..."                   # Conventional commit 형식
git push origin master                # GitHub Pages 자동 배포
```

배포 반영: GitHub Pages CDN ~30초~1분.

### 14.2 Dropbox 락 함정 (중요!)

이 프로젝트는 Dropbox 동기화 폴더 안에 있음. Dropbox sync engine이 `.git/objects/`에 락을 걸어 git이 새 객체 파일을 못 만드는 경우 발생:

```
error: unable to write file .git/objects/XX/XXXXX...: Permission denied
error: ...: failed to insert into database
```

**해결 방법 (사용자 협조 필요):**
1. 시스템 트레이의 **Dropbox 아이콘 우클릭** → **"동기화 일시 중지"** (5분/1시간)
2. git add/commit/push 진행
3. 작업 끝나면 **"동기화 재개"**

**자동 재시도 패턴 (Dropbox 끄지 않을 때):**
```bash
for i in 1 2 3 4 5 6 7 8; do
  if git add -A 2>/dev/null; then
    if msg=$(git commit -m "..." 2>&1) && echo "$msg" | grep -q master; then
      echo "OK on $i"; break
    fi
  fi
  sleep 60
  chmod -R u+w .git 2>/dev/null
done
git push 2>&1 | tail -3
```

### 14.3 OG 이미지 손상 시 복구
git 작업 중 객체가 corrupt되면 OG 이미지 파일이 git에서 untrack될 수 있음:
```bash
git rm --cached "images/og/member-XXX.jpg"
git add "images/og/member-XXX.jpg"
git commit -m "복원: XXX OG 이미지"
```

### 14.4 캐시 버전 갱신 (모든 css/js 변경 시)

```python
# 캐시 버전 한 글자 increment (예: bw → bx)
import os
old, new = 'v=20260501bw', 'v=20260501bx'
files = ['index.html']
for sub in ['dermatologist', 'clinic']:
    for root, dirs, fs in os.walk(sub):
        for f in fs:
            if f == 'index.html':
                files.append(os.path.join(root, f))
for p in files:
    with open(p, 'r', encoding='utf-8') as fp: txt = fp.read()
    new_txt = txt.replace(old, new)
    if new_txt != txt:
        with open(p, 'w', encoding='utf-8') as fp: fp.write(new_txt)
```

---

## 15. 디버깅 패턴 & 알려진 함정

### 15.1 모바일 검색창 슬라이드 — 진단 방법

**Symptom:** 첫 사이클 정상, 2nd 이후 슬라이드 거리 다름 또는 안 됨.

**원인 후보 (해결된 것들):**
1. ✅ Android Chrome focus retention quirk: 키보드 dismiss 후 input이 focus 유지. 재탭해도 focus 이벤트 미발화. → `pointerdown`/`click` fallback 추가
2. ✅ CSS var/class resolution race: var 의존 → inline transform 직접 제어
3. ✅ `100vh` 키보드로 축소 → `100lvh` 사용
4. ✅ `.fade-in` 애니메이션 forwards fill-mode가 transform 잠금 → keyframe에서 transform 제거
5. ✅ Mid-transition 측정 오류 → focus 시 `transition: 'none'` + `transform: 'none'` reset 후 측정

**디버그 패턴 (필요시 재도입):**
```js
// 화면 상단에 디버그 오버레이
let dbgDiv = null;
const dbgShow = (msg) => {
  if (!dbgDiv) {
    dbgDiv = document.createElement('div');
    dbgDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#000c;color:#0f0;font:11px/1.3 monospace;padding:6px 10px;white-space:pre-wrap;';
    document.body.appendChild(dbgDiv);
  }
  dbgDiv.textContent = msg;
};

// focus handler 안에서
const beforeRect = searchBox.getBoundingClientRect();
const beforeTransform = getComputedStyle(homePage).transform;
// reset
homePage.style.transition = 'none';
homePage.style.transform = 'none';
void homePage.offsetHeight;
const rect = searchBox.getBoundingClientRect();
const shift = Math.min(0, -(rect.top - 80));
dbgShow(`Cycle\nBEFORE: top=${beforeRect.top.toFixed(1)} tx=${beforeTransform.slice(0,40)}\nAFTER: top=${rect.top.toFixed(1)}\nshift=${shift.toFixed(1)} innerH=${window.innerHeight} vvH=${window.visualViewport?.height}`);
```

### 15.2 SPA replaceState 후 상대 경로 문제
SPA가 `history.replaceState(null, '', '/akd-members/dermatologist/X/')` 호출하면 `document.baseURI`가 변경됨. 이후 동적으로 추가하는 `<img src="회원 프로필 사진_누끼/...">` 같은 상대 경로는 새 baseURI 기준으로 해석됨 → 404 가능.

**해결:** `index.html` head에 `<base href="/akd-members/">` 추가됨. 모든 상대 경로가 base 기준으로 해석.

### 15.3 #treatment/{name} race condition
이전: `selectTreatmentGroup` (그룹 전체 결과) → `setTimeout 50ms` → `selectTreatment` (단일 결과). 두 비동기 geolocation 콜백이 race → 그룹 결과(4곳)가 단일 결과(2곳)을 덮어쓰는 케이스.

**해결:** route handler에서 `selectTreatmentGroup` 대신 탭/아이템 visibility만 직접 업데이트, `selectTreatment` 한 번만 호출.

### 15.4 Korean filename in path
카드 썸네일은 `회원 프로필 사진/배정민.jpg` 같이 Korean filename. URL에선 `%ED%9A%8C%EC%9B%90...` 인코딩됨. JS에서 `encodeURI()`로 안전하게 처리:
```js
function photoUrl(path) { return encodeURI(path); }
```

---

## 16. 2,800명 확장 권고사항

### 16.1 데이터 계층 (가장 시급)

**현재 한계:** `js/app.js`에 11명 하드코딩. 2,800명 → 50배 → 초기 로딩 폭증, 운영자가 코드 직접 수정 필요.

**권고 단계:**
- **Phase A (최소):** `members.json`, `hospitals.json`으로 분리. GitHub Actions로 빌드 시 `app.js`에 주입
- **Phase B:** Headless CMS (Strapi/Directus/Sanity) — 어드민 UI + REST/GraphQL API
- **Phase C:** 자체 백엔드 + DB — 회원 본인 인증, 자기 프로필 편집, 운영자 검수 워크플로

### 16.2 검색 인덱스
2,800명까지는 `Array.filter`로 충분. 다만:
- 자동완성 latency 줄이려면 `Meilisearch` / `Algolia` / `ElasticSearch`
- 지리 검색은 `PostGIS` 또는 BBOX 사전 필터 후 haversine

### 16.3 카드 렌더링 최적화
2,800명 카드 = 1만 DOM 노드. `innerHTML` 일괄 → 수백 ms 멈춤.
- IntersectionObserver 기반 무한 스크롤 (페이지당 50~100명)
- 또는 가상 스크롤 (react-window 등)
- `loading="lazy"` `decoding="async"` (현재 적용됨)
- 썸네일 WebP/AVIF 변환

### 16.4 지도 마커 클러스터링
1,500개 병원 마커 = 지도 버벅임. `leaflet.markercluster` 도입 필수.

### 16.5 OG 이미지 자동 생성
- 현재: `gen_og_members.py` 수동 실행
- 권고: GitHub Actions에서 회원 정보 변경 시 자동 재생성, 또는 동적 OG 서비스 (`@vercel/og`, Cloudflare Workers Image Resizing)

### 16.6 정적 HTML 자동 생성
- 현재: 의사·병원별 HTML 17개 수동 생성
- 권고: Astro/Next.js SSG로 데이터 기반 자동 빌드. 새 회원 등록 시 정적 페이지 자동 생성

### 16.7 인증·권한·검수
필수 기능:
- 회원 본인 인증 (학회 회원번호 + 휴대폰/이메일 OTP)
- 회원 본인 프로필 편집 권한
- 운영자 검수 워크플로 (신규 가입 승인, 진료과목 검수)
- 변경 이력 audit log

### 16.8 분석·관측
- GA4 또는 Plausible
- Sentry (에러 트래킹)
- Web Vitals 모니터링

### 16.9 접근성 (WCAG AA)
- `prefers-reduced-motion` 대응 — 사진 페이드/풍선 애니메이션 비활성 옵션
- 키보드 내비
- 진료분야 칩 `role="button"`, 지도 마커 `aria-label`

### 16.10 비기능 요구사항 목표
| 항목 | 목표치 |
| --- | --- |
| FCP (Fast 3G) | < 1.5s |
| 의사 목록 첫 화면 | < 2s |
| 검색 응답 | < 200ms |
| OG KakaoTalk 노출 | 100% |
| 가용성 | 99.9% |
| 동시 접속 | 6개월 내 1,000명 |

---

## 17. 핵심 파일 구조

```
├── index.html                          # SPA 엔트리포인트 (모든 라우트 진입)
├── js/app.js                           # 라우터 + 데이터 + 렌더 함수 전체 (~2,000줄)
├── css/style.css                       # 모든 스타일 (~2,300줄)
├── PRD.md                              # 이 문서
│
├── dermatologist/                      # 의사 정적 HTML (11개)
│   ├── bae-jungmin/index.html
│   ├── kim-hongseok/index.html
│   └── ...
├── clinic/                             # 병원 정적 HTML (5개)
│   ├── healhouse-gangnam/index.html
│   └── ...
│
├── images/
│   ├── akd-logo.png                    # 헤더 로고 (네이비)
│   ├── akd-logo-white.png              # 푸터 로고 (흰색, 미사용)
│   ├── badge.jpg                       # "피부과 전문의" 빨간 뱃지
│   └── og/                             # OG 공유 이미지 1200x630
│       ├── default.jpg
│       ├── member-{id}.jpg             (11개)
│       └── hospital-{id}.jpg           (5개)
│
├── 회원 프로필 사진_누끼/                # rembg 처리된 hero용 PNG
│   ├── bae-jungmin.png
│   ├── bae-jungmin_2.png               # 2번 사진 (cross-fade용)
│   └── ...
├── 회원 프로필 사진/                     # 카드 썸네일 JPG (Korean filename!)
│   ├── 배정민.jpg
│   ├── 김홍석.jpg
│   └── ...
├── 회원 프로필 사진_크롭/                # 사용자 수동 크롭 원본 (Korean filename)
│   ├── 김홍석.jpg
│   ├── 김홍석2.jpg
│   └── ...
└── 회원 프로필 사진 원본(수정하지 말것)/  # 보존 — 절대 수정 금지
    └── ...
│
├── gen_og_members.py                   # OG 이미지 일괄 생성 스크립트 (Python+Pillow)
└── header-logo-w-02.png                # (참고용 로고 원본)
```

---

## 18. 중요 코드 위치 (line refs)

`js/app.js` 기준:

| 기능 | 시작 라인 | 비고 |
| --- | --- | --- |
| `HOSPITALS` 배열 | ~12 | 5곳 |
| `MEMBERS` 배열 | ~107 | 11명, id 순서: bae-jungmin → kim-hongseok → ... |
| `TREATMENT_GROUPS` | ~507 | 5그룹 |
| `getHospitalsByTreatment` | ~570 | 의사 fallback 매칭 포함 |
| `haversine` 거리 계산 | ~580 | |
| `photoUrl` (encodeURI) | ~589 | |
| Router class | ~622 | hash ↔ path 변환 |
| `renderHome` | ~727 | 통합 검색 + 단축버튼 |
| `setupSearchHandlers` 시작 | ~768 | 검색 input 이벤트 |
| `slideSearchUp` | ~834 | 모바일 슬라이드 핵심 |
| `revertIfEmpty` | ~882 | 빈 입력 시 슬라이드 다운 |
| `handleSearchKeydown` | ~947 | ↑↓Enter Esc |
| `highlightMatch` | ~973 | `<mark>` 하이라이트 |
| `stripKoreanFinal` | ~990 | 한글 받침 제거 |
| `fuzzyMatchScore` | ~1004 | 매칭 점수 계산 |
| `isOnlyKoreanJamo` | ~1020 | 자모 단독 입력 감지 |
| `handleSearch` | ~1023 | 통합 검색 메인 |
| `escapeHtml` | ~1148 | XSS 방지 |
| `renderMembers` | ~1156 | 의사 목록 페이지 |
| `updateMembersView` | ~1190 | 거리순 + 버킷 셔플 |
| `DOCTORS_WITH_TWO_PHOTOS` | ~919 (참고) | Set, 사진 2장 의사 |
| `startHeroPhotoCycle` | ~927 | 3초 cross-fade |
| `startBalloonReposition` | ~937 | 5초 SNS 풍선 셔플 |
| `generateBalloonPositions` | ~957 | 8개 zone 랜덤 배치 |
| `renderMemberDetail` | ~975 | 의사 상세 |
| `renderHospitals`, `renderHospitalDetail` | ~1300대 | 병원 |
| `renderTreatments`, `selectTreatmentGroup`, `selectTreatment`, `showTreatmentResults`, `updateTreatmentView` | ~1700대 | 진료분야 |
| Router `add` 호출들 | ~2049 | 라우트 등록 |

`css/style.css` 주요 섹션:
- `.navbar`, `.nav-link` ~87
- `.home-page`, `.search-box`, `.search-input` ~242
- `.search-suggest-*` ~436
- `.member-hero-v2`, `.member-hero-photo`, `.hero-sns-balloon` ~611
- `.member-card-*` ~498
- `@keyframes balloonFloat`, `balloonAppear`, `fadeIn` ~872
- 모바일 미디어 쿼리 (`@media (max-width: 768px)`) ~1979

---

## 19. 향후 개선 제안 + Phase 별 마일스톤

### 19.1 Phase 1: 데이터 분리 (1~2주)
- `members.json`, `hospitals.json`, `treatments.json` 분리
- GitHub Actions에서 JSON → app.js 자동 빌드
- 데이터 검증 스크립트 (필수 필드, 참조 무결성)

### 19.2 Phase 2: 어드민 + 인증 (4~6주)
- Headless CMS 또는 자체 백엔드
- 학회 회원번호 매핑 + OTP 인증
- 회원 본인 프로필 편집
- 운영자 검수 워크플로

### 19.3 Phase 3: 검색 인프라 (2~3주)
- Meilisearch/Algolia 통합
- 자동완성, 오타 허용, 다중 필터

### 19.4 Phase 4: 무한 스크롤 + 가상화 (1~2주)
- IntersectionObserver 기반
- WebP/AVIF 자동 변환

### 19.5 Phase 5: 지도 클러스터링 (1주)
- leaflet.markercluster

### 19.6 Phase 6: OG 자동화 (1~2주)
- GitHub Actions 또는 동적 OG 서비스

### 19.7 Phase 7: 분석·관측 (1주)
- GA4, Sentry, Web Vitals

### 19.8 미해결 / 추가 개선 아이디어
- 의사·병원 즐겨찾기 (LocalStorage 또는 로그인 후 서버 저장)
- 진료 후기 (별점 + 텍스트, 검수 후 노출)
- 예약 시스템 연동 (외부 플랫폼 연동)
- 다국어 (영어/일본어/중국어)
- PWA 설치 (홈 화면 추가, 오프라인 캐시)

---

## 20. 서비스 비전 — 환자·의사 관점

### 20.1 핵심 문제 의식

**환자의 좌절:** 아토피·사마귀·무좀 같은 흔한 피부 질환을 들고 피부과를 찾아갔는데 "질환은 안 본다"며 거절당하는 경험. 환자는 어디서 봐주는지 모르니 여러 곳을 헛걸음하고 화가 남.

**현실:** "전문의 vs GP" 또는 "질환 vs 미용"이라는 단순 프레임으로 풀리지 않음. 미용 위주의 피부과(예: 보스피부과)도 모든 질환을 본다고 기대할 수 없고, 그게 정답도 아님. 그러나 동시에:

- **아토피, 사마귀, 무좀, 백반증, 건선** 등을 **열심히 보는 피부과는 분명히 존재**함
- 4-5km 이내에 피부과가 수십 곳인데, 환자가 그 많은 홈페이지를 일일이 뒤져 어디가 어떤 질환을 잘 보는지 파악하는 것은 비현실적
- 결과: 정작 그 질환을 보고 싶어하는 의사들에게 환자가 못 닿고, 환자는 거절당하며 헤맴

### 20.2 이 사이트의 두 번째 목적 (의사 간 의뢰 허브)

**환자 측면:**
- 자기 질환(예: 아토피)으로 검색 → 그 질환을 진료하는 피부과 목록 + 거리순 → 적합한 곳을 즉시 찾아 방문
- "헛걸음 → 거절 → 분노"의 사이클을 끊음

**의사 측면:**
- 본인이 보지 않는 질환의 환자가 내원했을 때, "이 질환은 ○○피부과에서 봅니다"라며 **신뢰 있는 동료 의사회 회원에게 의뢰** 가능
- 학회·의사회가 검증한 회원 디렉토리이므로 안심하고 환자를 보낼 수 있음
- 결과: **질환을 열심히 보는 회원에게 환자가 적정 경로로 흘러감** → 진료 생태계 효율 ↑, 동료 의사 간 협력 ↑

### 20.3 운영 철학

> "어디서 보는지 몰라서 못 가는 거지, 보는 곳이 없는 게 아니다."

이 사이트는 환자와 진료의(특히 질환 진료를 하는 회원) 사이의 **정보 비대칭을 해소**하는 디렉토리다. 광고가 아니라 **회원이 자기가 진료하는 영역을 솔직하게 알리도록** 만드는 도구.

**구현상 시사점:**
- 진료분야는 의사 본인이 자유롭게 입력 — 미용 시술뿐 아니라 **질환 진료 영역도 충실히 노출**되도록 UX 유도
- 검색 우선순위에서 질환·미용 차별 없이 동등 노출
- "○○ 잘 보는 곳" 같은 광고성 문구 대신 **진료분야 자체가 검색 키워드**가 되도록 설계 (현재 검색 시스템이 이 방향)

---

## 21. 향후 백엔드 + 의사회 DB 연동

### 21.1 현재 한계
- 회원·병원 데이터가 `js/app.js`에 하드코딩
- 운영자(개발자)가 직접 코드 수정 → 커밋 → 배포해야 회원 정보 갱신
- 의사 본인이 자기 정보 수정 불가능
- 의사회 내부 회원 DB와 단절

### 21.2 목표 아키텍처

```
대한피부과의사회 회원 DB (마스터)
        ↓ (정기 동기화 또는 SSO)
백엔드 서비스 (인증/권한/검수/API)
        ↓ (REST/GraphQL)
프론트엔드 (현재 SPA + SSG 정적 페이지)
        ↑
회원 본인 (의사회 사이트에서 SSO 로그인)
```

### 21.3 백엔드 핵심 기능

**1. 의사회 SSO 연동**
- 회원이 대한피부과의사회 본 사이트에서 로그인 → 본 디렉토리 사이트로 SSO 토큰 전달
- 별도 계정 생성 불필요, 학회 회원번호 = 본 시스템 ID

**2. 회원 정보 마스터 동기화**
- 의사회 DB에서 회원 기본 정보(이름, 회원번호, 자격, 학회 직책 이력 등) 자동 수집
- 신규 정회원 가입/탈퇴 시 자동 반영
- 학회 활동(임원 직책, 수상, 학술대회 강의) 정보도 의사회가 보유하므로 동기화 가능

**3. 회원 셀프 서비스 (22절 참고)**
- 본인이 노출/비노출 결정 가능
- 본인이 직접 편집 가능한 필드 (사진, quote, 진료분야, SNS 링크 등)

**4. 운영자 검수 워크플로**
- 신규 등록·민감 정보 변경은 학회 사무국 검수 후 게시
- 변경 이력 audit log

### 21.4 양방향 동기화의 가치

- **회원 입장:** 의사회 사이트에서 한번 정보 갱신하면 디렉토리에도 자동 반영 → 중복 입력 부담 ↓
- **학회 입장:** 디렉토리에 개인이 입력한 최신 정보(병원 진료시간 변경 등)가 의사회 DB로 역동기화되어 학회 자체 회원 정보 신선도 유지

### 21.5 기술 스택 제안 (Phase 2~3)

| 영역 | 후보 |
| --- | --- |
| 백엔드 프레임워크 | Node.js + NestJS, 또는 Django REST Framework |
| 인증 | OAuth 2.0 / OIDC (의사회 IdP) |
| DB | PostgreSQL + PostGIS (지리 검색) |
| 어드민 UI | Strapi (커스터마이즈) 또는 자체 React/Next.js 어드민 |
| 미디어 저장 | Cloudflare R2 또는 AWS S3 |
| 이미지 처리 | Cloudflare Images / `@vercel/og` (동적 OG) |

---

## 22. 회원 본인 셀프 서비스 (UGC)

### 22.1 본인 편집 가능 필드

| 필드 | 본인 편집 | 의사회 마스터 | 비고 |
| --- | --- | --- | --- |
| 이름, 회원번호, 자격 | ❌ | ✅ | 의사회 DB에서 동기화 |
| 학회 직책 (positions) | ❌ | ✅ | 의사회가 임명한 공식 직책 |
| 학술대회 강의 (lectures) | ❌ | ✅ | 학회 행사 기록 |
| 학회 수상 (awards) | ❌ | ✅ | 학회 발급 |
| 소속 병원 (hospitalId) | ✅ (변경 시 검수) | — | 본인이 변경, 검수 |
| **프로필 사진 (최대 2장)** | ✅ | — | 본인 업로드 또는 학술대회 촬영 사진 사용 |
| quote (한 줄 소개) | ✅ | — | |
| career (경력) | ✅ | — | |
| memberships (학회 회원) | ✅ | — | |
| treatments (진료분야) | ✅ | — | 본인 자유 입력 + TREATMENT_GROUPS 매핑 |
| links (SNS/홈페이지) | ✅ | — | |
| 노출 여부 | ✅ | — | 본인이 사이트 노출 자체를 OFF 가능 |
| 병원 정보 (진료시간 등) | ✅ (병원 대표 1인) | — | 같은 병원 다른 의사가 못 바꾸도록 권한 분리 |

### 22.2 사진 업로드 절차 (백엔드 도입 후)

**Option A: 본인이 직접 업로드**
1. 의사회 사이트 로그인 → 디렉토리 마이페이지
2. 사진 업로드 (최대 2장, JPG/PNG, 5MB 이하)
3. 백엔드에서 자동 처리:
   - 얼굴 감지 + 1:1 또는 적절 비율로 크롭
   - rembg로 배경 제거 (hero용 PNG)
   - 캔버스 위 22% 투명 padding 추가
   - 카드 썸네일 생성 (그라데이션 배경)
   - OG 이미지 자동 생성
4. 검수 후 게시

**Option B: 의사회 학술대회 프로필 촬영 이벤트 활용**
- 춘계/추계 학술대회에서 회원 대상 프로필 촬영 부스 운영
- 전문 촬영자가 일관된 톤·구도로 촬영 → 의사회 자산으로 회원에게 제공
- 회원이 그중에서 선택해 디렉토리에 사용
- 결과: **시각적 일관성** ↑ (현재 11명에서도 사진 톤 차이가 있음)

### 22.3 진료분야 자유 입력 + 검증

회원이 자유롭게 진료분야를 입력 (예: 새로운 시술 명칭, 신규 장비 등):
1. 본인이 입력 → 임시 등록
2. 운영자가 검토하여 적절한 그룹(medical/laser/lifting/aesthetic/other)에 배정
3. `TREATMENT_GROUPS.items`에 추가 → 검색 인덱스 갱신
4. 회원 프로필에 정식 노출

**자동화 가능 영역:**
- 유사어/오타 자동 정정 (예: "써마지" / "써머지" → "써마지" 통일)
- 신규 진료분야 검토 큐 어드민 화면

---

## 23. 컨텐츠 확장 시 UI 대응

### 23.1 무한 스크롤 (의사·병원 목록)

병원 50곳, 회원 2,800명 규모로 가면 현재 카드 일괄 렌더링은 비현실적.

**구현:**
- IntersectionObserver 기반 무한 스크롤 (페이지당 50~100명)
- 첫 화면: 가까운 50명 즉시 표시
- 사용자가 스크롤하면 다음 50명 로드
- 검색·필터 적용 시 결과 50개씩 점진 로드
- "거리순"·"이름순"·"진료분야" 토글 제공

**썸네일 최적화:**
- WebP/AVIF 자동 변환
- `loading="lazy"` `decoding="async"` (이미 적용)
- srcset으로 디바이스별 해상도 제공

### 23.2 진료분야 항목 폭증 대응

회원이 자유롭게 진료분야를 입력하면 항목 수가 100~200개로 늘어날 수 있음. 현재 진료분야 페이지의 칩 그리드는 이 규모에 맞지 않음.

**대응 패턴:**

**1. 그룹별 탭 + 검색**
- 그룹 탭(피부질환/레이저/리프팅/피부시술/기타) 기존 유지
- 그룹 내 항목이 20개 이상이면 그룹 안에 작은 검색 input 추가
- 또는 알파벳/가나다 인덱스 (ㄱ ㄴ ㄷ ...)

**2. 인기순 + 보기 더 보기**
- 그룹 내 항목을 "병원 등록 수 많은 순"으로 정렬
- 상위 12~16개만 칩으로 표시
- 하단 "+ 더 보기" → 펼침

**3. Hierarchical 분류 (필요 시)**
- 큰 그룹 → 세부 그룹 (예: "리프팅" → "장비 리프팅" / "실 리프팅")
- 2단 카테고리

**4. 통합 검색이 가장 강력한 진입점**
- 환자가 "아토피"로 직접 검색 → 결과 페이지
- 칩 grid는 보조적 역할로 격하

### 23.3 지도 마커 클러스터링

- 1,500개 병원 마커는 leaflet.markercluster로 줌 레벨에 따라 클러스터화
- 줌 인 시 개별 마커 표시
- 클러스터 클릭 시 해당 영역으로 줌

### 23.4 모바일에서의 진료분야 노출

- 한 화면에 칩이 너무 많으면 가독성 ↓
- 그룹 탭 가로 스크롤(현재) + 그룹별 칩은 세로 스크롤
- "이 진료를 보는 의사 N명 · 병원 M곳" 카운트로 인기도 표시

---

## 24. 의료법 컴플라이언스 (의사회 활동 소개 프레임)

### 24.1 의료광고 규제 환경

**한국 의료법 56조** 및 의료광고 심의 기준:
- 의료인이 자기 자신의 진료 우월성, 수상 이력, 학술 활동 등을 광고에 사용하는 것은 **사전 심의 + 제한적 허용**
- "최고", "유일", "1위" 같은 표현 금지
- 환자 후기·체험담은 엄격 제한
- 학력·경력은 제한적으로 가능하지만 과장 금지

### 24.2 본 디렉토리의 법적 포지셔닝

**핵심 원칙:** 회원 개인이 자신을 광고하는 것이 아니라, **대한피부과의사회가 회원을 소개**하는 것.

- 사이트 운영 주체: 대한피부과의사회 (학회)
- 게시 컨텐츠 성격: 학회 회원 디렉토리 + 학회 활동 보고
- 본인이 작성한 광고 문구 ❌ → 학회가 보유한 객관적 정보 ✅

### 24.3 안전한 컨텐츠 vs 위험 컨텐츠

| 컨텐츠 | 안전 (의사회 활동) | 위험 (의료광고) |
| --- | --- | --- |
| 학회 직책 (positions) | ✅ 의사회가 임명한 공식 직책 | — |
| 학회 강의 이력 (lectures) | ✅ 학회 행사 기록 | — |
| 학회 수상 (awards) | ✅ 학회가 수여 | — |
| 학회 정회원 자격 (memberships) | ✅ 학회 회원 사실 | — |
| 진료분야 (treatments) | ✅ 의료법상 표시 가능 진료과목 | "○○ 전문" 같은 광고성 표현 ❌ |
| 경력 (career) | ✅ 사실 기재 | "최고", "1위" 등 ❌ |
| quote (한 줄 소개) | ⚠️ 가치 표현 정도까지 OK | 효과 보장, 후기 인용 ❌ |
| 환자 후기·평점 | — | ❌ 게시 금지 (의료법) |
| Before/After 사진 | — | ❌ 게시 금지 |
| 가격 정보 | — | ❌ 게시 금지 |

### 24.4 컨텐츠 검수 가이드

운영자(학회 사무국)가 회원 입력 컨텐츠 검수 시 체크리스트:

1. **광고성 표현 확인**
   - "최고", "1위", "유일", "독보적" 등 금지어
   - 효과·결과 보장 표현 ("100% 만족", "확실한 효과")
2. **사실 기반 확인**
   - 학회 직책: 의사회 DB와 일치
   - 강의 이력: 실제 학회 프로그램에 기록 확인
3. **환자 후기·체험담 미포함**
4. **가격·할인 정보 미포함**
5. **의료기기·약품 광고 미포함** (시술명만 노출)

### 24.5 면책 표시

사이트 푸터 또는 의사 상세 페이지 하단에 다음 명시 권장:
- "본 디렉토리는 대한피부과의사회가 학회 회원을 소개하기 위한 공식 사이트입니다. 게시된 정보는 학회 회원 본인이 입력 또는 의사회가 보유한 자료를 기반으로 하며, 의료광고가 아닙니다."
- "본 사이트는 의료광고심의 대상이 아닌 학회 회원 디렉토리이며, 진료의 우열을 평가하지 않습니다."

(법무 자문 후 정확한 문구 확정)

### 24.6 회원 위험 회피의 부수효과

회원이 "의사회 활동 (positions/lectures/awards/memberships)"을 자기 개인 홈페이지에 직접 광고하면 의료광고 위반 소지가 있지만:
- **본 디렉토리에서 학회가 회원을 소개하는 형태**로 게시 → 회원은 동일 정보를 합법적으로 노출 가능
- 회원의 학술 활동 노출 욕구를 의사회가 합법적인 채널로 충족 → **회원 가입·참여 유인** ↑

---

## 25. 마지막으로 — 다음 세션 시작 시 체크리스트

이어서 작업할 때 확인:
1. **현재 git 상태:** `git log --oneline -5`로 최근 커밋 확인. 작업 도중 끊긴 부분 있는지.
2. **캐시 버전:** `index.html`의 `?v=2026...` 값 확인. 변경할 때 +1.
3. **Dropbox 락:** 이 폴더가 Dropbox 안에 있음. git 작업 중 권한 에러 발생하면 동기화 일시 중지.
4. **PRD.md (이 문서):** 새로 추가된 기능/패턴은 여기에 반영.

자주 검증하는 패턴:
```js
// Playwright headless에서 모바일 시뮬레이션
await page.setViewportSize({ width: 375, height: 812 });
await page.goto('https://jminbae.github.io/akd-members/?_=cb' + Date.now());
// (실제 모바일 검증은 사용자 디바이스 필요)
```

---

**문서 끝.** 이 문서를 다음 세션에서 첫 read 대상으로 삼으면 사전 정보 없이 모든 작업 가능합니다.
