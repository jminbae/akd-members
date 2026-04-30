/* ========================================
   AKD 대한피부과의사회 - 회원 소개
   Application JavaScript
   ======================================== */

// ==========================================
// DATA
// ==========================================

const HOSPITALS = [
  {
    id: 'healhouse-gangnam',
    name: '힐하우스피부과의원 강남점',
    shortName: '힐하우스피부과 강남',
    address: '서울특별시 강남구 강남대로 518, 4·5층',
    phone: '02-6951-5761',
    lat: 37.5090,
    lng: 127.0235,
    website: 'http://www.healhousegn.com',
    hours: {
      '평일 (월~금)': '10:00 - 19:00',
      '토요일': '10:00 - 16:00',
      '일요일·공휴일': '휴무'
    },
    treatments: ['기미/색소', '백반증', '건선', '아토피', '여드름', '피부암/점', '레이저토닝', '리프팅/탄력'],
    doctorIds: ['bae-jungmin', 'jung-hanmi', 'park-saemi'],
    description: '피부과전문의 1:1 맞춤 상담을 제공하며, 커스텀 리프팅, 스킨부스터, 콜라겐부스터 등 다양한 시술을 시행합니다.'
  },
  {
    id: 'human-pyeongtaek',
    name: '휴먼피부과의원 평택점',
    shortName: '휴먼피부과 평택',
    address: '경기도 평택시 중앙2로 13, 10층 (평택동센텀스카이)',
    phone: '031-655-0031',
    lat: 36.9921,
    lng: 127.0855,
    website: 'http://humanpt.co.kr',
    hours: {
      '평일 (월~금)': '09:30 - 18:30',
      '토요일': '09:30 - 14:00',
      '일요일·공휴일': '휴무'
    },
    treatments: ['여드름', '기미/색소', '백반증', '사마귀/무좀', '레이저토닝', '리프팅/탄력', '모공/흉터', '아토피'],
    doctorIds: ['gye-jiwon', 'nam-chanhee', 'park-mingi'],
    description: '평택 지역 피부과 전문의 3인 진료 체제로, 정확한 진단과 맞춤 치료를 제공합니다.'
  },
  {
    id: 'hev-sinsa',
    name: '헤브피부과의원 신사점',
    shortName: '헤브피부과 신사',
    address: '서울특별시 강남구 도산대로 119, 16F (신사동)',
    phone: '02-545-0075',
    lat: 37.5233,
    lng: 127.0214,
    website: 'https://seoul.hevclinic.com',
    hours: {
      '평일 (월~금)': '10:00 - 19:00',
      '토요일': '10:00 - 15:00',
      '일요일·공휴일': '휴무'
    },
    treatments: ['여드름', '기미/색소', '리프팅/탄력', '레이저토닝', '모공/흉터', '탈모/모발', '아토피'],
    doctorIds: ['shin-jiyeon', 'lee-seolhee', 'jung-jongheon'],
    description: '피부과 전문의 3인이 진료하며, 진료 접근성과 맞춤 진료를 제공합니다.'
  },
  {
    id: 'vos',
    name: '보스피부과의원',
    shortName: '보스피부과',
    address: '서울특별시 강남구 언주로 806',
    phone: '02-515-5515',
    lat: 37.5093,
    lng: 127.0408,
    website: 'https://vos.co.kr',
    hours: {
      '월~목': '10:00 - 19:00',
      '금요일': '10:00 - 20:00',
      '토요일': '10:00 - 16:00',
      '일요일·공휴일': '휴무'
    },
    treatments: ['여드름', '기미/색소', '리프팅/탄력', '레이저토닝', '탈모/모발', '모공/흉터', '사마귀/무좀'],
    doctorIds: ['kim-hongseok'],
    description: '피부과 전문의 김홍석 원장이 직접 진료하며, 여드름, 기미, 항노화 분야 전문입니다.'
  },
  {
    id: 'foret',
    name: '포레피부과의원',
    shortName: '포레피부과',
    address: '서울특별시 성동구 한림말길 56, 2층 (옥수동)',
    phone: '02-2294-4888',
    lat: 37.5428,
    lng: 127.0175,
    website: 'http://foretderma.com',
    hours: {
      '월·금': '10:00 - 20:00 (야간)',
      '화·수·목': '10:00 - 18:30',
      '토요일': '09:30 - 14:00',
      '점심시간': '13:00 - 14:00'
    },
    treatments: ['여드름', '기미/색소', '건선', '아토피', '레이저토닝', '리프팅/탄력', '탈모/모발', '피부암/점'],
    doctorIds: ['lee-haeun', 'kim-namwoo'],
    description: '피부과 전문의 이하은 원장과 마취과 전문의 김남우 원장이 함께 진료합니다.'
  }
];

const MEMBERS = [
  {
    id: 'bae-jungmin',
    name: '배정민',
    photo: '회원 프로필 사진/배정민.jpg',
    hospitalId: 'healhouse-gangnam',
    role: '대표원장',
    specialty: '피부과 전문의',
    quote: '진심 어린 치료와 꾸준한 연구로 난치성 피부질환 환자들의 영원한 동반자가 되겠습니다.',
    positions: [
      '15기 재무이사, 학술위원, 홍보위원',
      '14기 학술이사, 정보위원',
      '13기 학술이사, 재무위원, 정보위원',
      '12기 대외협력이사'
    ],
    career: [
      '가톨릭대학교 의과대학 피부과 부교수',
      '가톨릭대학교 의과대학 피부과 조교수',
      '가톨릭대학교 의과대학 피부과 임상강사',
      '연세대학교 의과대학 세브란스병원 피부과 임상강사',
      '가톨릭대학교 의과대학 피부과 연구계약교원',
      '대한피부과의사회 학술이사',
      '대한백반증색소학회 기획정책이사'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부과의사회 정회원',
      '대한 피부레이저학회 정회원',
      '대한 백반증학회 정회원',
      '대한 여드름학회 정회원',
      '대한 피부항노화 연구회 정회원'
    ],
    lectures: [
      { year: '2022', event: '24회 춘계 학술대회', title: 'Surgical Pearls (동영상 세션)' },
      { year: '2022', event: '25회 추계 학술대회', title: '피부치료 역량강화 I' },
      { year: '2023', event: 'KOREADERMA 2023', title: 'Vitiligo' },
      { year: '2023', event: 'KOREADERMA 2023', title: 'Dermatologic Surgery' },
      { year: '2023', event: 'KOREADERMA 2023', title: '베스트렉쳐 리바이벌' },
      { year: '2025', event: 'KOREADERMA 2025', title: 'Ask the Experts' },
      { year: '2026', event: '28회 춘계 학술대회', title: '베스트렉처 리바이벌' }
    ],
    awards: [
      '2023 베스트 렉쳐 선정',
      '2024 베스트 기획자 상'
    ],
    treatments: ['백반증', '건선', '아토피', '여드름', '기미/색소', '피부암/점', '레이저토닝']
  },
  {
    id: 'kim-hongseok',
    name: '김홍석',
    photo: '회원 프로필 사진/김홍석.jpg',
    hospitalId: 'vos',
    role: '대표원장',
    specialty: '피부과 전문의',
    quote: '피부과전문의의 오랜 경험과 노하우로 완성된 맞춤형 피부 재생 솔루션을 제공합니다.',
    positions: [
      '15기 홍보이사, 학술위원, 재무위원',
      '14기 교육이사, 정보위원, 학술위원, 홍보위원',
      '13기 교육이사, 정보위원, 학술위원, 홍보위원',
      '12기 홍보위원',
      '11기 학술위원'
    ],
    career: [
      '동국대학교 뷰티메디컬학과 겸임교수',
      '대한피부과항노화학회 이사',
      '충청대학교 의료미용학과 겸임교수',
      '대한레이저학회 회원',
      '대한여드름주사학회 회원'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부과의사회 정회원',
      '대한 레이저학회 회원',
      '대한 여드름주사학회 회원',
      '대한 피부과항노화학회 이사'
    ],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '항노화: 부스트 업! My Anti-Aging Tips' },
      { year: '2022', event: '24회 춘계', title: '색소: 차별화된 기미 진단부터 치료까지' },
      { year: '2022', event: '25회 추계', title: '베스트렉처 리바이벌: 기미환자 상담기법' },
      { year: '2023', event: 'KOREADERMA 2023', title: "What's HOT in Korea" },
      { year: '2023', event: 'KOREADERMA 2023', title: '일타강사 시즌3: 나만의 노하우' },
      { year: '2024', event: '26회 춘계', title: '이슈포커스: 마취' }
    ],
    awards: [
      '2022 베스트렉처 수상',
      '대한피부과의사회 홍보이사'
    ],
    treatments: ['여드름', '기미/색소', '리프팅/탄력', '레이저토닝', '탈모/모발']
  },
  {
    id: 'lee-haeun',
    name: '이하은',
    photo: '회원 프로필 사진/이하은.jpg',
    hospitalId: 'foret',
    role: '대표원장',
    specialty: '피부과 전문의',
    quote: '건강한 피부와 힐링을 드리는 피부 주치의가 되겠습니다.',
    positions: [
      '15기 홍보이사, 정보위원',
      '14기 홍보이사',
      '13기 홍보이사, 학술위원',
      '12기 홍보간사'
    ],
    career: [
      '한양대학교병원 피부과 외래교수',
      '한양대학교 피부과학 의학석사',
      '대한피부과학회 정회원',
      '대한여드름학회 정회원',
      '대한건선학회 정회원',
      '대한미용피부과학회 정회원'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 여드름학회 정회원',
      '대한 건선학회 정회원',
      '대한 미용피부과학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['여드름', '기미/색소', '건선', '아토피', '레이저토닝', '리프팅/탄력']
  },
  {
    id: 'gye-jiwon',
    name: '계지원',
    photo: '회원 프로필 사진/계지원.jpg',
    hospitalId: 'human-pyeongtaek',
    role: '대표원장',
    specialty: '피부과 전문의',
    quote: '정확한 진단과 근거 있는 치료로 환자 한 분 한 분에게 최선을 다하겠습니다.',
    positions: [
      '15기 학술이사, 의무윤리위원',
      '14기 의무윤리이사, 학술위원',
      '13기 간행간사',
      '12기 간행위원, 보험위원'
    ],
    career: [
      '대한피부과학회 정회원',
      '대한피부레이저학회 정회원',
      '대한백반증학회 정회원',
      '대한여드름학회 정회원',
      '대한피부항노화 연구회 정회원'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부과의사회 정회원',
      '대한 피부레이저학회 정회원',
      '대한 백반증학회 정회원',
      '대한 여드름학회 정회원'
    ],
    lectures: [
      { year: '2022', event: '25회 추계', title: '피부치료 역량강화 I' },
      { year: '2023', event: 'KOREADERMA 2023', title: 'Vitiligo' }
    ],
    awards: [
      '제14기 대한피부과의사회 의무이사',
      '제15기 대한피부과의사회 학술이사',
      '2023 베스트 렉쳐 선정',
      '2024 베스트 기획자 상'
    ],
    treatments: ['백반증', '여드름', '기미/색소', '사마귀/무좀', '레이저토닝', '리프팅/탄력']
  },
  {
    id: 'shin-jiyeon',
    name: '신지연',
    photo: '회원 프로필 사진/신지연2.jpg',
    hospitalId: 'hev-sinsa',
    role: '대표원장',
    specialty: '피부과 전문의',
    quote: '안전한 정품·정량 시술과 개인 맞춤형 진료로 자연스러운 결과를 약속합니다.',
    positions: [
      '15기 학술이사',
      '14기 학술간사'
    ],
    career: [
      '순천향대학교 의과대학 대학원 피부과학 전공',
      '대한피부항노화연구회 교육위원회',
      '항노화미용해부연구회 홍보위원회',
      '대한임상피부치료연구회 정회원'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부항노화연구회 교육위원',
      '대한 임상피부치료연구회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['여드름', '기미/색소', '리프팅/탄력', '레이저토닝', '모공/흉터']
  },
  {
    id: 'jung-hanmi',
    name: '정한미',
    photo: '회원 프로필 사진/정한미.jpg',
    hospitalId: 'healhouse-gangnam',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '한 번 시술 후 잊혀지는 의사가 아닌, 믿고 맡길 수 있는 피부 주치의를 약속합니다.',
    positions: [
      '15기 교육간사, 정보위원, 홍보위원',
      '14기 교육간사'
    ],
    career: [
      '전) 후즈후피부과 동탄점 원장',
      '보건복지부 인증 피부과 전문의',
      '가톨릭대학교 성빈센트병원 피부과 임상강사',
      '가톨릭중앙의료원 인턴 및 피부과 전공의',
      '가톨릭대학교 의과대학 의학과 졸업'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 아토피피부염학회 정회원',
      '대한 건선학회 정회원',
      '대한 모발학회 정회원',
      '대한 미용외과학회 정회원',
      '대한 여드름학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['여드름', '기미/색소', '아토피', '건선', '레이저토닝']
  },
  {
    id: 'park-saemi',
    name: '박새미',
    photo: '회원 프로필 사진/박새미.jpg',
    hospitalId: 'healhouse-gangnam',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '시간이 흐를수록 더 깊은 아름다움을 발견하실 수 있도록 든든한 동반자가 되겠습니다.',
    positions: [],
    career: [
      '힐하우스피부과 대표원장',
      '전) 후즈후피부과 압구정 원장',
      '보건복지부 인증 피부과 전문의',
      '가톨릭 중앙의료원 인턴 및 피부과 전문의 수료'
    ],
    memberships: [],
    lectures: [],
    awards: [],
    treatments: ['여드름', '기미/색소', '레이저토닝', '리프팅/탄력']
  },
  {
    id: 'nam-chanhee',
    name: '남찬희',
    photo: '회원 프로필 사진/남찬희.jpg',
    hospitalId: 'human-pyeongtaek',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: [
      '피부과 전문의',
      '대한 피부과학회 정회원',
      '대한 피부과 의사회 정회원',
      '대한 아토피학회 정회원',
      '대한 백반증학회 정회원',
      '대한 건선학회 정회원',
      '대한 여드름학회 정회원',
      '대한 화장품의학회 정회원'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부과 의사회 정회원',
      '대한 아토피학회 정회원',
      '대한 백반증학회 정회원',
      '대한 건선학회 정회원',
      '대한 여드름학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['백반증', '여드름', '기미/색소', '아토피', '건선']
  },
  {
    id: 'park-mingi',
    name: '박민기',
    photo: '회원 프로필 사진/박민기.jpg',
    hospitalId: 'human-pyeongtaek',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: [
      '피부과 전문의',
      '대한 피부과학회 정회원',
      '대한 피부과의사회 정회원'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부과의사회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['여드름', '기미/색소', '레이저토닝', '사마귀/무좀']
  },
  {
    id: 'lee-seolhee',
    name: '이설희',
    photo: '회원 프로필 사진/이설희.jpg',
    hospitalId: 'hev-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [
      '14기 CME 위원'
    ],
    career: [
      '순천향대학교 부천병원 조교수',
      '순천향대학교 부천병원 임상조교수',
      '신촌 세브란스 병원 피부과 임상강사',
      '순천향대학교 부천병원 피부과 전공의',
      '순천향대학교 의과대학 졸업'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 아토피피부염학회 정회원',
      '대한 미용피부외과학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['아토피', '여드름', '기미/색소', '레이저토닝']
  },
  {
    id: 'jung-jongheon',
    name: '정종헌',
    photo: '회원 프로필 사진/정종헌.jpg',
    hospitalId: 'hev-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: [
      '피부과전문의',
      '동국대학교 의학과 졸업',
      '동국대학교 의과대학 대학원 의학석사',
      '동국대학교 일산병원 피부과 레지던트 수료',
      '전) 국군고양병원 피부과장'
    ],
    memberships: [
      '대한 피부과학회 정회원',
      '대한 피부항노화학회(KAAD) 정회원',
      '대한 임상피부치료연구회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['여드름', '기미/색소', '리프팅/탄력', '레이저토닝', '탈모/모발']
  },
  {
    id: 'kim-namwoo',
    name: '김남우',
    photo: '회원 프로필 사진/김남우.jpg',
    hospitalId: 'foret',
    role: '원장',
    specialty: '마취과 전문의',
    quote: '',
    positions: [],
    career: [
      '마취과 전문의',
      '포레피부과의원 원장'
    ],
    memberships: [],
    lectures: [],
    awards: [],
    treatments: []
  }
];

const TREATMENT_CATEGORIES = [
  { id: 'acne', name: '여드름', icon: 'fa-face-frown-open', color: '#FFEAA7' },
  { id: 'pigment', name: '기미/색소', icon: 'fa-sun', color: '#FFD5D5' },
  { id: 'vitiligo', name: '백반증', icon: 'fa-hand-dots', color: '#BBDEFB' },
  { id: 'psoriasis', name: '건선', icon: 'fa-shield-halved', color: '#C8E6C9' },
  { id: 'atopy', name: '아토피', icon: 'fa-allergies', color: '#E1BEE7' },
  { id: 'lifting', name: '리프팅/탄력', icon: 'fa-arrow-up', color: '#FFE0B2' },
  { id: 'laser', name: '레이저토닝', icon: 'fa-bolt', color: '#B2DFDB' },
  { id: 'warts', name: '사마귀/무좀', icon: 'fa-virus', color: '#F8BBD0' },
  { id: 'pores', name: '모공/흉터', icon: 'fa-circle-dot', color: '#D1C4E9' },
  { id: 'hair', name: '탈모/모발', icon: 'fa-head-side', color: '#FFCCBC' },
  { id: 'cancer', name: '피부암/점', icon: 'fa-microscope', color: '#B3E5FC' }
];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function getMember(id) {
  return MEMBERS.find(m => m.id === id);
}

function getHospital(id) {
  return HOSPITALS.find(h => h.id === id);
}

function getHospitalDoctors(hospitalId) {
  const hospital = getHospital(hospitalId);
  if (!hospital) return [];
  return hospital.doctorIds.map(id => getMember(id)).filter(Boolean);
}

function getHospitalsByTreatment(treatmentName) {
  return HOSPITALS.filter(h => h.treatments.includes(treatmentName));
}

function getMembersByTreatment(treatmentName) {
  return MEMBERS.filter(m => m.treatments && m.treatments.includes(treatmentName));
}

// Haversine distance (km)
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function photoUrl(path) {
  return encodeURI(path);
}

// ==========================================
// ROUTER
// ==========================================

class Router {
  constructor() {
    this.routes = [];
    window.addEventListener('hashchange', () => this.handle());
    window.addEventListener('load', () => this.handle());
  }

  add(pattern, handler) {
    this.routes.push({ pattern, handler });
  }

  handle() {
    const hash = window.location.hash || '#home';
    for (const route of this.routes) {
      const match = this.match(route.pattern, hash);
      if (match !== null) {
        route.handler(match);
        this.updateNav(hash);
        window.scrollTo(0, 0);
        return;
      }
    }
    // Default to home
    window.location.hash = '#home';
  }

  match(pattern, hash) {
    const patternParts = pattern.split('/');
    const hashParts = hash.split('/');
    if (patternParts.length !== hashParts.length) return null;
    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = decodeURIComponent(hashParts[i]);
      } else if (patternParts[i] !== hashParts[i]) {
        return null;
      }
    }
    return params;
  }

  updateNav(hash) {
    const page = hash.split('/')[0].replace('#', '');
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPage = link.dataset.page;
      link.classList.toggle('active', linkPage === page ||
        (linkPage === 'dermatologists' && page === 'member') ||
        (linkPage === 'hospitals' && page === 'hospital') ||
        (linkPage === 'treatments' && page === 'treatment'));
    });
    // Close mobile menu
    document.getElementById('navMenu').classList.remove('open');
  }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = `
    <div class="home-page fade-in">
      <div class="home-logo">
        <img src="images/badge.jpg" alt="피부과 전문의" class="home-badge-logo">
      </div>
      <h1 class="home-subtitle home-main-title">우리 동네 피부과 의사를 찾아볼까요?</h1>
      <div class="search-box">
        <input type="text" class="search-input" id="searchInput"
               placeholder="의사명, 병원명, 진료과목으로 검색" autocomplete="off">
        <button class="search-btn" id="searchBtn">
          <i class="fas fa-search"></i>
        </button>
        <div class="search-results" id="searchResults"></div>
      </div>
      <div class="home-shortcuts stagger">
        <a href="#dermatologists" class="home-shortcut">
          <i class="fas fa-user-md"></i>
          <span>피부과전문의</span>
        </a>
        <a href="#hospitals" class="home-shortcut">
          <i class="fas fa-hospital"></i>
          <span>병원 찾기</span>
        </a>
        <a href="#treatments" class="home-shortcut">
          <i class="fas fa-stethoscope"></i>
          <span>진료과목</span>
        </a>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSearch(e);
  });
}

function handleSearch(e) {
  const query = e.target.value.trim().toLowerCase();
  const resultsDiv = document.getElementById('searchResults');

  if (!query) {
    resultsDiv.innerHTML = '';
    return;
  }

  const memberResults = MEMBERS.filter(m =>
    m.name.includes(query) ||
    m.specialty.includes(query) ||
    (m.treatments && m.treatments.some(t => t.includes(query)))
  );

  const hospitalResults = HOSPITALS.filter(h =>
    h.name.includes(query) ||
    h.shortName.includes(query) ||
    h.address.includes(query) ||
    h.treatments.some(t => t.includes(query))
  );

  let html = '';

  memberResults.forEach(m => {
    const hospital = getHospital(m.hospitalId);
    html += `
      <a href="#member/${m.id}" class="search-result-item">
        <img src="${photoUrl(m.photo)}" class="search-result-photo" alt="${m.name}"
             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23e8ecf1%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-size=%2240%22 fill=%22%23b2bec3%22>${m.name[0]}</text></svg>'">
        <div class="search-result-info">
          <h4>${m.name} ${m.role}</h4>
          <p>${hospital ? hospital.shortName : ''}</p>
        </div>
        <span class="search-result-type member">의사</span>
      </a>
    `;
  });

  hospitalResults.forEach(h => {
    html += `
      <a href="#hospital/${h.id}" class="search-result-item">
        <div style="width:48px;height:48px;border-radius:50%;background:var(--primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <i class="fas fa-hospital" style="color:white;font-size:18px;"></i>
        </div>
        <div class="search-result-info">
          <h4>${h.shortName}</h4>
          <p>${h.address}</p>
        </div>
        <span class="search-result-type hospital">병원</span>
      </a>
    `;
  });

  if (!html && query.length > 0) {
    html = '<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:14px;">검색 결과가 없습니다.</div>';
  }

  resultsDiv.innerHTML = html;
}

function renderMembers() {
  const mainDoctors = MEMBERS.filter(m => m.specialty === '피부과 전문의');
  app.innerHTML = `
    <div class="page-header">
      <h1>회원 정보</h1>
      <p>대한피부과의사회 소속 피부과 전문의를 소개합니다</p>
    </div>
    <div class="members-grid stagger">
      ${mainDoctors.map(m => {
        const hospital = getHospital(m.hospitalId);
        return `
          <a href="#member/${m.id}" class="member-card">
            <div class="member-card-photo-wrap">
              <img src="${photoUrl(m.photo)}" class="member-card-photo" alt="${m.name}"
                   onerror="this.style.display='none'">
              <img src="images/badge.jpg" alt="피부과 전문의" class="member-card-badge-img">
              <span class="sr-only">${m.specialty}</span>
            </div>
            <div class="member-card-body">
              <h3>${m.name}</h3>
              <p class="member-card-role">${hospital ? hospital.shortName : ''} ${m.role}</p>
              <div class="member-card-hospital">
                <i class="fas fa-hospital"></i>
                ${hospital ? hospital.name : ''}
              </div>
              ${m.treatments && m.treatments.length > 0 ? `
                <div class="member-card-tags">
                  ${m.treatments.slice(0, 4).map((t, i) => `<span class="member-card-tag">${t}</span>`).join('')}
                  ${m.treatments.length > 4 ? `<span class="member-card-tag">+${m.treatments.length - 4}</span>` : ''}
                </div>
              ` : ''}
            </div>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

function renderMemberDetail(params) {
  const member = getMember(params.id);
  if (!member) {
    app.innerHTML = '<div class="loading">회원을 찾을 수 없습니다.</div>';
    return;
  }

  const hospital = getHospital(member.hospitalId);
  const teamDoctors = hospital ? getHospitalDoctors(hospital.id).filter(d => d.id !== member.id) : [];

  app.innerHTML = `
    <div class="member-detail fade-in">
      <button class="back-btn" onclick="history.back()">
        <i class="fas fa-arrow-left"></i> 뒤로가기
      </button>

      <div class="member-hero">
        <!-- Photo Section -->
        <div class="member-photo-section">
          <div class="member-photo-wrap">
            <img src="${photoUrl(member.photo)}" alt="${member.name}"
                 onerror="this.style.background='var(--bg)'">
            ${member.quote ? `
              <div class="member-quote">
                <p>${member.quote}</p>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Info Section -->
        <div class="member-info-section">
          <div class="member-name-area">
            <p class="member-specialty-label">${member.specialty}</p>
            <h1 class="member-name">${member.name}</h1>
          </div>

          ${hospital ? `
            <a href="#hospital/${hospital.id}" class="hospital-link-card">
              <i class="fas fa-hospital"></i>
              <div class="hospital-link-info">
                <h3>${hospital.name}</h3>
                <p>${hospital.address}</p>
              </div>
              <i class="fas fa-chevron-right arrow"></i>
            </a>
          ` : ''}

          <div class="member-info-grid">
            <!-- Position & Role -->
            ${member.positions && member.positions.length > 0 ? `
              <div class="info-card">
                <h3 class="info-card-title"><i class="fas fa-id-badge"></i> 대한피부과의사회 직책</h3>
                <ul>
                  ${member.positions.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Career -->
            ${member.career && member.career.length > 0 ? `
              <div class="info-card">
                <h3 class="info-card-title"><i class="fas fa-graduation-cap"></i> 경력</h3>
                <ul>
                  ${member.career.map(c => `<li>${c}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Memberships -->
            ${member.memberships && member.memberships.length > 0 ? `
              <div class="info-card">
                <h3 class="info-card-title"><i class="fas fa-certificate"></i> 학회 활동</h3>
                <ul>
                  ${member.memberships.map(m => `<li>${m}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Lectures -->
            ${member.lectures && member.lectures.length > 0 ? `
              <div class="info-card">
                <h3 class="info-card-title"><i class="fas fa-chalkboard-teacher"></i> 학술대회 강의</h3>
                <table class="lectures-table">
                  <thead>
                    <tr><th>년도</th><th>학술대회</th><th>세션/주제</th></tr>
                  </thead>
                  <tbody>
                    ${member.lectures.map(l => `
                      <tr><td>${l.year}</td><td>${l.event}</td><td>${l.title}</td></tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}

            <!-- Awards -->
            ${member.awards && member.awards.length > 0 ? `
              <div class="info-card">
                <h3 class="info-card-title"><i class="fas fa-trophy"></i> 수상 및 활동</h3>
                <div class="awards-list">
                  ${member.awards.map(a => `
                    <div class="award-item">
                      <i class="fas fa-award"></i>
                      ${a}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <!-- Treatments -->
            ${member.treatments && member.treatments.length > 0 ? `
              <div class="info-card full-width">
                <h3 class="info-card-title"><i class="fas fa-stethoscope"></i> 주 진료과목</h3>
                <div class="treatment-tags">
                  ${member.treatments.map((t, i) => `
                    <a href="#treatment/${encodeURIComponent(t)}" class="treatment-tag color-${i % 12}">${t}</a>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Team Section -->
      ${teamDoctors.length > 0 ? `
        <div class="team-section">
          <h2><i class="fas fa-users"></i> 함께 일하는 의사</h2>
          <div class="team-grid stagger">
            ${teamDoctors.map(d => `
              <a href="#member/${d.id}" class="team-member-card">
                <img src="${photoUrl(d.photo)}" class="team-member-photo" alt="${d.name}"
                     onerror="this.style.background='var(--bg)'">
                <div class="team-member-info">
                  <p class="specialty-label">${d.specialty}</p>
                  <h4>${d.name} ${d.role}</h4>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderHospitals() {
  app.innerHTML = `
    <div class="page-header">
      <h1>근무 병원</h1>
      <p>대한피부과의사회 회원이 근무하는 병원을 소개합니다</p>
    </div>
    <div class="hospitals-grid stagger">
      ${HOSPITALS.map(h => {
        const doctors = getHospitalDoctors(h.id);
        return `
          <a href="#hospital/${h.id}" class="hospital-card">
            <div class="hospital-card-header">
              <h3>${h.name}</h3>
              <p><i class="fas fa-map-marker-alt"></i> ${h.address}</p>
            </div>
            <div class="hospital-card-body">
              <div class="hospital-card-info">
                <div class="hospital-card-info-row">
                  <i class="fas fa-phone"></i>
                  <span>${h.phone}</span>
                </div>
                <div class="hospital-card-info-row">
                  <i class="fas fa-clock"></i>
                  <span>${Object.entries(h.hours).map(([k,v]) => `${k}: ${v}`).join(' / ')}</span>
                </div>
              </div>
              <div class="hospital-card-doctors">
                ${doctors.map(d => `
                  <img src="${photoUrl(d.photo)}" class="hospital-card-doctor-avatar" alt="${d.name}"
                       onerror="this.style.background='var(--bg-dark)'">
                `).join('')}
                <span class="hospital-card-doctor-count">
                  ${doctors.map(d => d.name).join(', ')} ${doctors.length > 1 ? '외' : ''} 진료
                </span>
              </div>
            </div>
          </a>
        `;
      }).join('')}
    </div>
  `;
}

function renderHospitalDetail(params) {
  const hospital = getHospital(params.id);
  if (!hospital) {
    app.innerHTML = '<div class="loading">병원을 찾을 수 없습니다.</div>';
    return;
  }

  const doctors = getHospitalDoctors(hospital.id);

  app.innerHTML = `
    <div class="hospital-detail fade-in">
      <div class="hospital-hero">
        <h1>${hospital.name}</h1>
        <p>${hospital.description}</p>
      </div>

      <button class="back-btn" onclick="history.back()">
        <i class="fas fa-arrow-left"></i> 뒤로가기
      </button>

      <div class="hospital-info-grid">
        <div class="info-card">
          <h3 class="info-card-title"><i class="fas fa-info-circle"></i> 병원 정보</h3>
          <ul>
            <li><strong>주소:</strong> ${hospital.address}</li>
            <li><strong>전화:</strong> ${hospital.phone}</li>
            ${hospital.website ? `<li><strong>웹사이트:</strong> <a href="${hospital.website}" target="_blank" style="color:var(--secondary)">${hospital.website}</a></li>` : ''}
          </ul>
        </div>
        <div class="info-card">
          <h3 class="info-card-title"><i class="fas fa-clock"></i> 진료 시간</h3>
          <ul>
            ${Object.entries(hospital.hours).map(([day, time]) => `
              <li><strong>${day}:</strong> ${time}</li>
            `).join('')}
          </ul>
        </div>
        <div class="info-card full-width">
          <h3 class="info-card-title"><i class="fas fa-stethoscope"></i> 진료 과목</h3>
          <div class="treatment-tags">
            ${hospital.treatments.map((t, i) => `
              <a href="#treatment/${encodeURIComponent(t)}" class="treatment-tag color-${i % 12}">${t}</a>
            `).join('')}
          </div>
        </div>
        <div class="hospital-map-container" id="hospitalMap"></div>
      </div>

      <div class="hospital-doctors-section">
        <h2><i class="fas fa-user-md"></i> 소속 의료진</h2>
        <div class="team-grid stagger">
          ${doctors.map(d => `
            <a href="#member/${d.id}" class="team-member-card">
              <img src="${photoUrl(d.photo)}" class="team-member-photo" alt="${d.name}"
                   onerror="this.style.background='var(--bg)'">
              <div class="team-member-info">
                <p class="specialty-label">${d.specialty}</p>
                <h4>${d.name} ${d.role}</h4>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Initialize map
  setTimeout(() => {
    initHospitalMap(hospital);
  }, 100);
}

function initHospitalMap(hospital) {
  const mapEl = document.getElementById('hospitalMap');
  if (!mapEl) return;

  const map = L.map('hospitalMap').setView([hospital.lat, hospital.lng], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker([hospital.lat, hospital.lng]).addTo(map);
  marker.bindPopup(`
    <div class="map-popup-title">${hospital.name}</div>
    <div class="map-popup-address">${hospital.address}</div>
  `).openPopup();
}

function renderTreatments() {
  app.innerHTML = `
    <div class="page-header">
      <h1>진료과목별 검색</h1>
      <p>진료과목을 선택하면 해당 과목을 진료하는 병원과 의료진을 확인할 수 있습니다</p>
    </div>
    <div class="treatments-page">
      <div class="treatments-categories" id="treatmentCategories">
        ${TREATMENT_CATEGORIES.map((cat, i) => `
          <button class="treatment-category-btn ${i === 0 ? 'active' : ''}"
                  data-treatment="${cat.name}"
                  onclick="selectTreatment('${cat.name}')">
            <i class="fas ${cat.icon}"></i> ${cat.name}
          </button>
        `).join('')}
      </div>
      <div class="treatments-content">
        <div class="treatments-map" id="treatmentsMap"></div>
        <div class="treatments-list" id="treatmentsList"></div>
      </div>
    </div>
  `;

  // Initialize with first category
  setTimeout(() => {
    selectTreatment(TREATMENT_CATEGORIES[0].name);
  }, 100);
}

let treatmentMap = null;
let treatmentMarkers = [];
let userLocation = null;

function selectTreatment(treatmentName) {
  // Update active button
  document.querySelectorAll('.treatment-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.treatment === treatmentName);
  });

  const hospitals = getHospitalsByTreatment(treatmentName);

  // Try to get user location for distance sorting
  if (navigator.geolocation && !userLocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        updateTreatmentView(treatmentName, hospitals);
      },
      () => {
        // Default to Seoul City Hall
        userLocation = { lat: 37.5665, lng: 126.9780 };
        updateTreatmentView(treatmentName, hospitals);
      },
      { timeout: 3000 }
    );
  } else {
    if (!userLocation) userLocation = { lat: 37.5665, lng: 126.9780 };
    updateTreatmentView(treatmentName, hospitals);
  }
}

function updateTreatmentView(treatmentName, hospitals) {
  // Sort by distance
  const sortedHospitals = hospitals.map(h => ({
    ...h,
    distance: haversine(userLocation.lat, userLocation.lng, h.lat, h.lng)
  })).sort((a, b) => a.distance - b.distance);

  // Update list
  const listDiv = document.getElementById('treatmentsList');
  listDiv.innerHTML = sortedHospitals.map((h, index) => {
    const doctors = h.doctorIds
      .map(id => getMember(id))
      .filter(d => d && d.treatments && d.treatments.includes(treatmentName));

    return `
      <div class="treatment-hospital-item" data-hospital-id="${h.id}"
           onmouseenter="highlightMarker('${h.id}')"
           onmouseleave="unhighlightMarker('${h.id}')"
           onclick="window.location.hash='#hospital/${h.id}'">
        <div class="treatment-hospital-name">
          <span style="color:var(--accent);font-weight:700;margin-right:8px;">${index + 1}</span>
          ${h.name}
        </div>
        <div class="treatment-hospital-address">
          <i class="fas fa-map-marker-alt"></i> ${h.address}
        </div>
        <div class="treatment-hospital-distance">
          <i class="fas fa-route"></i> 약 ${h.distance.toFixed(1)}km
        </div>
        <div class="treatment-hospital-doctors">
          ${doctors.map(d => `
            <a href="#member/${d.id}" class="treatment-doctor-chip" onclick="event.stopPropagation()">
              <img src="${photoUrl(d.photo)}" alt="${d.name}"
                   onerror="this.style.display='none'">
              ${d.name} ${d.role}
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Update map
  initTreatmentMap(sortedHospitals, treatmentName);
}

function initTreatmentMap(hospitals, treatmentName) {
  const mapEl = document.getElementById('treatmentsMap');
  if (!mapEl) return;

  // Clear existing map
  if (treatmentMap) {
    treatmentMap.remove();
  }

  treatmentMap = L.map('treatmentsMap');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(treatmentMap);

  treatmentMarkers = [];

  if (hospitals.length === 0) {
    treatmentMap.setView([37.5665, 126.9780], 11);
    return;
  }

  const bounds = [];

  hospitals.forEach((h, index) => {
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        width:32px;height:32px;border-radius:50%;
        background:var(--primary);color:white;
        display:flex;align-items:center;justify-content:center;
        font-size:14px;font-weight:700;
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
        border:2px solid white;
      ">${index + 1}</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    const marker = L.marker([h.lat, h.lng], { icon: customIcon }).addTo(treatmentMap);

    const doctors = h.doctorIds
      .map(id => getMember(id))
      .filter(d => d && d.treatments && d.treatments.includes(treatmentName));

    marker.bindPopup(`
      <div class="map-popup-title">${h.name}</div>
      <div class="map-popup-address">${h.address}</div>
      <div style="margin-top:6px;font-size:12px;color:#636e72;">
        ${doctors.map(d => d.name + ' ' + d.role).join(', ')}
      </div>
      <a href="#hospital/${h.id}" class="map-popup-link">병원 상세보기 &rarr;</a>
    `);

    marker.hospitalId = h.id;
    treatmentMarkers.push(marker);
    bounds.push([h.lat, h.lng]);
  });

  if (bounds.length > 0) {
    treatmentMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }
}

function highlightMarker(hospitalId) {
  const item = document.querySelector(`.treatment-hospital-item[data-hospital-id="${hospitalId}"]`);
  if (item) item.classList.add('highlighted');

  const marker = treatmentMarkers.find(m => m.hospitalId === hospitalId);
  if (marker) marker.openPopup();
}

function unhighlightMarker(hospitalId) {
  const item = document.querySelector(`.treatment-hospital-item[data-hospital-id="${hospitalId}"]`);
  if (item) item.classList.remove('highlighted');

  const marker = treatmentMarkers.find(m => m.hospitalId === hospitalId);
  if (marker) marker.closePopup();
}

// Make selectTreatment globally accessible
window.selectTreatment = selectTreatment;
window.highlightMarker = highlightMarker;
window.unhighlightMarker = unhighlightMarker;

// ==========================================
// INITIALIZATION
// ==========================================

// Mobile menu toggle
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navMenu').classList.toggle('open');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navMenu').classList.remove('open');
  });
});

// Setup router
const router = new Router();
router.add('#home', renderHome);
router.add('#dermatologists', renderMembers);
router.add('#member/:id', renderMemberDetail);
router.add('#hospitals', renderHospitals);
router.add('#hospital/:id', renderHospitalDetail);
router.add('#treatments', renderTreatments);
router.add('#treatment/:id', (params) => {
  // Redirect to treatments page and select the category
  renderTreatments();
  setTimeout(() => {
    selectTreatment(decodeURIComponent(params.id));
  }, 200);
});
