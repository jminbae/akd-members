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
      '평일 (월~금)': '10:00 - 20:00',
      '토요일': '09:00 - 15:00',
      '일요일·공휴일': '휴무'
    },
    treatments: ['백반증', '백반증수술', '고압산소', '스컬트라', '쥬브젠', '얼굴윤곽', '더엘주사', '필러', '주름', '탄력', '리프팅', '써마지', '울쎄라', '올타이트', '티타늄', '스킨부스터', '리바이브', '힐로웨이브', '레디어스', '여드름흉터', '문신제거', '텐써마', '쥬베룩', '기미/색소', '여드름', '모공', '흉터'],
    doctorIds: ['bae-jungmin', 'jung-hanmi', 'park-saemi'],
    description: '피부과전문의 1:1 맞춤 상담을 제공하며, 커스텀 리프팅, 스킨부스터, 콜라겐부스터 등 다양한 시술을 시행합니다.'
  },
  {
    id: 'human-pyeongtaek',
    name: '휴먼피부과의원 평택점',
    shortName: '휴먼피부과 평택',
    address: '경기도 평택시 중앙2로 13, 9/10층 (평택동 센텀스카이빌딩)',
    phone: '031-655-0031',
    lat: 36.9921,
    lng: 127.0855,
    website: 'http://humanpt.co.kr',
    hours: {
      '평일 (월~금)': '10:00 - 20:30 (진료마감 20:00)',
      '토요일': '10:00 - 16:30 (진료마감 16:00)',
      '일요일·공휴일': '휴무'
    },
    treatments: ['기미/색소', '선천성모반', '여드름', '흉터', '실리프팅', '켈로이드', '내향성발톱', '비만', '다이어트', '체형교정', '여성제모', '쁘띠성형', '필러', '스킨부스터', '모공', '탈모메조테라피', '메조보톡스'],
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
    treatments: ['줄기세포', 'MCT', 'PRP', '고압산소', '필러', '실리프팅'],
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
    treatments: ['항노화', '리프팅', '탄력', '울쎄라', '소프웨이브', '피부결', '모공', '필러', '쥬베룩', '레디어스'],
    doctorIds: ['kim-hongseok'],
    description: '피부과 전문의 김홍석 원장이 직접 진료하며, 여드름, 기미, 항노화 분야 전문입니다.'
  },
  {
    id: 'foret',
    name: '포레피부과의원',
    shortName: '포레피부과',
    address: '서울시 강남구 선릉로 153길 12, 포스탐빌딩 3층',
    phone: '02-2294-4888',
    lat: 37.5240,
    lng: 127.0490,
    website: 'http://foretderma.com',
    hours: {
      '월·금': '10:00 - 20:00 (야간)',
      '화·수·목': '10:00 - 18:30',
      '토요일': '09:30 - 14:00',
      '점심시간': '13:00 - 14:00'
    },
    treatments: ['리프팅', '탄력', '써마지', '울쎄라', '티타늄', '소프웨이브', '모공', '흉터', '레이저토닝', '필러', '실리프팅', '스킨부스터', '리바이브', '여드름', '기미/색소', '문신제거', '스킨보톡스', '쥬베룩', '힐로웨이브'],
    doctorIds: ['lee-haeun'],
    description: '피부과 전문의 이하은 원장이 진료합니다.'
  }
];

const MEMBERS = [
  {
    id: 'bae-jungmin',
    name: '배정민',
    photo: '회원 프로필 사진/배정민.jpg',
    hospitalId: 'healhouse-gangnam',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '백반증 치료의 마지막 피부과가 되겠습니다.',
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
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원',
      '대한피부레이저학회 정회원',
      '대한백반증학회 정회원',
      '대한여드름학회 정회원',
      '대한피부항노화 연구회 정회원'
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
    treatments: ['백반증', '백반증수술', '엑시머레이저', '팔라스레이저', '광선치료', '자외선치료', '백반증탈색치료', '고압산소'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://healhousegn.com/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/healhouseskin_gangnam' },
      { type: 'website', label: '힐링백반증', url: 'https://healingvitiligo.org/' }
    ]
  },
  {
    id: 'kim-hongseok',
    name: '김홍석',
    photo: '회원 프로필 사진/김홍석.jpg',
    hospitalId: 'vos',
    role: '원장',
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
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원',
      '대한레이저학회 회원',
      '대한여드름주사학회 회원',
      '대한피부과항노화학회 이사'
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
    treatments: ['항노화', '리프팅', '탄력', '울쎄라', '소프웨이브', '피부결', '모공', '필러', '쥬베룩', '레디어스'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://vos.co.kr' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/vos_skinclinic/' },
      { type: 'youtube', label: '병원 유튜브', url: 'https://www.youtube.com/channel/UCGkBcBOvxmQdR36QUc1Rb-A' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/drhong3_pr/' },
      { type: 'instagram', label: '피알남 공식 인스타그램', url: 'https://www.instagram.com/prnam_official/' },
      { type: 'youtube', label: '유튜브', url: 'https://www.youtube.com/channel/UC908f2Qj4Jz2bs9XzDdPMLg' },
      { type: 'tiktok', label: '틱톡', url: 'https://www.tiktok.com/@drhongskin' },
      { type: 'linktree', label: '링크트리', url: 'https://linktr.ee/VOS.DERMATOLOGY.CLINIC' }
    ]
  },
  {
    id: 'lee-haeun',
    name: '이하은',
    photo: '회원 프로필 사진/이하은.jpg',
    hospitalId: 'foret',
    role: '원장',
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
      '대한피부과학회 정회원',
      '대한여드름학회 정회원',
      '대한건선학회 정회원',
      '대한미용피부과학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['리프팅', '탄력', '써마지', '울쎄라', '티타늄', '소프웨이브', '모공', '흉터', '레이저토닝', '필러', '실리프팅', '스킨부스터', '리바이브', '여드름', '기미/색소', '문신제거', '스킨보톡스', '쥬베룩', '힐로웨이브'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'http://foretderma.com' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/foretskin_official' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/dermakitty' },
      { type: 'youtube', label: '유튜브', url: 'https://www.youtube.com/@drleehaeun' },
      { type: 'tiktok', label: '틱톡', url: 'https://www.tiktok.com/@dermakitty' },
      { type: 'threads', label: '스레드', url: 'https://www.threads.com/@dermakitty' }
    ]
  },
  {
    id: 'gye-jiwon',
    name: '계지원',
    photo: '회원 프로필 사진/계지원.jpg',
    hospitalId: 'human-pyeongtaek',
    role: '원장',
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
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원',
      '대한피부레이저학회 정회원',
      '대한백반증학회 정회원',
      '대한여드름학회 정회원'
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
    treatments: ['써마지', '덴서티알파', '올타이트', '탄력', '기미/색소', '밀크반점', '군집성흑자증', '베커모반', '선천성멜라닌세포성모반', '난치성모반', '여드름흉터', '외상흉터', '실리프팅', '켈로이드', '내향성발톱수술'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'http://humanpt.co.kr' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/pt_human/' },
      { type: 'youtube', label: '유튜브', url: 'https://www.youtube.com/channel/UCTG-I_EmOuI4n5C5yAu51LA' }
    ]
  },
  {
    id: 'shin-jiyeon',
    name: '신지연',
    photo: '회원 프로필 사진/신지연2.jpg',
    hospitalId: 'hev-sinsa',
    role: '원장',
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
      '대한피부과학회 정회원',
      '대한피부항노화연구회 교육위원',
      '대한임상피부치료연구회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['줄기세포', 'MCT', 'PRP', '고압산소', '필러', '실리프팅'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://seoul.hevclinic.com' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/hev_seoul' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/shinjiyn/' },
      { type: 'youtube', label: '유튜브', url: 'https://www.youtube.com/@shinjiyn' },
      { type: 'threads', label: '스레드', url: 'https://www.threads.com/@shinjiyn' }
    ]
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
      '15기 교육간사, 정보위원, 홍보간사',
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
      '대한피부과학회 정회원',
      '대한아토피피부염학회 정회원',
      '대한건선학회 정회원',
      '대한모발학회 정회원',
      '대한미용외과학회 정회원',
      '대한여드름학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['스컬트라', '쥬브젠', '얼굴윤곽', '더엘주사', '필러', '주름', '탄력', '리프팅', '써마지', '울쎄라', '올타이트', '티타늄', '스킨부스터', '리바이브', '힐로웨이브', '레디어스', '고압산소', '여드름흉터', '문신제거'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://healhousegn.com/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/healhouseskin_gangnam' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/jhanmi__' },
      { type: 'youtube', label: '유튜브', url: 'https://youtube.com/@pibutenten' },
      { type: 'threads', label: '스레드', url: 'https://www.threads.com/@jhanmi__' },
      { type: 'website', label: '블로그', url: 'https://blog.naver.com/one_crafter' }
    ]
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
      '힐하우스피부과 강남점 원장',
      '전) 후즈후피부과 압구정 원장',
      '보건복지부 인증 피부과 전문의',
      '가톨릭 중앙의료원 인턴 및 피부과 전문의 수료'
    ],
    memberships: [
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원',
      '대한피부항노화연구회 정회원',
      '대한피부레이저학회 정회원',
      '대한여드름주사학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['써마지', '울쎄라', '올타이트', '티타늄', '힐로웨이브', '고압산소', '주름', '쥬브젠', '리프팅', '탄력', '텐써마', '스컬트라', '쥬베룩', '레디어스', '필러', '스킨부스터', '기미/색소', '여드름', '모공', '흉터'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://healhousegn.com/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/healhouseskin_gangnam' }
    ]
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
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원',
      '대한아토피학회 정회원',
      '대한백반증학회 정회원',
      '대한건선학회 정회원',
      '대한여드름학회 정회원',
      '대한화장품의학회 정회원'
    ],
    memberships: [
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원',
      '대한아토피학회 정회원',
      '대한백반증학회 정회원',
      '대한건선학회 정회원',
      '대한여드름학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['비만', '다이어트', 'HPL체형교정주사시술', '여성특수제모', '써마지', '울쎄라피프라임', '탄력', '리프팅', '기미/색소', '필러', '스컬트라', '쥬베룩', '레디어스', '스킨부스터', '여드름', '모공', '흉터', '탈모메조테라피']
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
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원'
    ],
    memberships: [
      '대한피부과학회 정회원',
      '대한피부과의사회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['필러', '실리프팅', '리쥬란', '리바이브', '스킨바이브', '힐로웨이브', '고우리', '스킨보툴리늄톡신', '써마지', '덴서티알파', '올타이트', '여드름', '모공', '흉터', '탈모메조테라피']
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
      '대한피부과학회 정회원',
      '대한아토피피부염학회 정회원',
      '대한미용피부외과학회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['줄기세포', 'MCT', 'PRP', '고압산소', '필러', '실리프팅']
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
      '대한피부과학회 정회원',
      '대한피부항노화학회(KAAD) 정회원',
      '대한임상피부치료연구회 정회원'
    ],
    lectures: [],
    awards: [],
    treatments: ['줄기세포', 'MCT', 'PRP', '고압산소', '필러', '실리프팅']
  }
];

// 카테고리 그룹 + 하위 항목 트리 구조
// 사용자가 보는 모든 진료분야는 items의 평면 리스트
const TREATMENT_GROUPS = [
  {
    id: 'medical',
    name: '피부질환',
    icon: 'fa-wand-magic-sparkles',
    items: ['여드름', '모공', '백반증', '백반증수술', '엑시머레이저', '팔라스레이저', '광선치료', '자외선치료', '백반증탈색치료', '켈로이드', '내향성발톱', '내향성발톱수술', '선천성모반', '선천성멜라닌세포성모반', '난치성모반', '베커모반', '밀크반점', '군집성흑자증', '주름', '탈모메조테라피', '외상흉터']
  },
  {
    id: 'laser',
    name: '레이저',
    icon: 'fa-bolt',
    items: ['레이저토닝', '기미/색소', '흉터', '여드름흉터', '여성제모', '여성특수제모', '문신제거']
  },
  {
    id: 'lifting',
    name: '리프팅',
    icon: 'fa-arrow-up-from-bracket',
    items: ['리프팅', '탄력', '써마지', '덴서티알파', '울쎄라', '울쎄라피프라임', '올타이트', '티타늄', '소프웨이브', '텐써마']
  },
  {
    id: 'aesthetic',
    name: '피부시술',
    icon: 'fa-syringe',
    items: ['쁘띠성형', '필러', '스킨부스터', '스컬트라', '실리프팅', '힐로웨이브', '쥬베룩', '쥬브젠', '줄기세포', 'MCT', 'PRP', '메조보톡스', '항노화', '피부결', '레디어스', '리바이브', '스킨보톡스', '스킨보툴리늄톡신', '얼굴윤곽', '더엘주사', '리쥬란', '스킨바이브', '고우리']
  },
  {
    id: 'other',
    name: '기타',
    icon: 'fa-ellipsis',
    items: ['고압산소', '비만', '다이어트', '체형교정', 'HPL체형교정주사시술']
  }
];

// 기존 호환을 위한 평면 리스트 (이름만 사용하던 코드 지원)
const TREATMENT_CATEGORIES = TREATMENT_GROUPS.flatMap(g =>
  g.items.map(name => ({ id: name, name, icon: g.icon, group: g.id }))
);

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function getTreatmentGroup(treatmentName) {
  for (const g of TREATMENT_GROUPS) {
    if (g.items.includes(treatmentName)) return g.id;
  }
  return 'other';
}

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
  // 병원 자체 treatments 또는 소속 의사 중 한 명이라도 해당 진료를 하면 포함
  // (의사가 새 진료를 추가하면 자동으로 병원도 매칭되도록)
  return HOSPITALS.filter(h => {
    if (h.treatments && h.treatments.includes(treatmentName)) return true;
    return (h.doctorIds || []).some(id => {
      const m = getMember(id);
      return m && m.treatments && m.treatments.includes(treatmentName);
    });
  });
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

// Site base path (GitHub Pages project path)
const SITE_BASE = '/akd-members';

// Convert path-based URL to internal hash route
function pathToHash() {
  let p = window.location.pathname;
  if (p.startsWith(SITE_BASE)) p = p.slice(SITE_BASE.length);
  p = p.replace(/^\/+|\/+$/g, '');
  if (!p) return null;
  const memMatch = p.match(/^dermatologist\/([^/]+)$/);
  if (memMatch) return '#member/' + memMatch[1];
  const clinicMatch = p.match(/^clinic\/([^/]+)$/);
  if (clinicMatch) return '#hospital/' + clinicMatch[1];
  return null;
}

// Convert internal hash route to path-based URL (for sharing)
function hashToPath(hash) {
  const memMatch = hash.match(/^#member\/(.+)$/);
  if (memMatch) return SITE_BASE + '/dermatologist/' + memMatch[1] + '/';
  const hospMatch = hash.match(/^#hospital\/(.+)$/);
  if (hospMatch) return SITE_BASE + '/clinic/' + hospMatch[1] + '/';
  return null;
}

class Router {
  constructor() {
    this.routes = [];
    window.addEventListener('hashchange', () => this.handle());
    window.addEventListener('popstate', () => this.handle());
    window.addEventListener('load', () => this.handle());
  }

  add(pattern, handler) {
    this.routes.push({ pattern, handler });
  }

  handle() {
    let hash = window.location.hash;
    if (!hash) {
      const fromPath = pathToHash();
      if (fromPath) hash = fromPath;
    }
    if (!hash) hash = '#home';
    // Clean up any home-page search-mode state immediately on navigation
    // (so the new page doesn't inherit expanded body height / focus class).
    document.body.style.minHeight = '';
    document.querySelector('.home-page')?.classList.remove('search-focused');
    for (const route of this.routes) {
      const match = this.match(route.pattern, hash);
      if (match !== null) {
        // Sync URL: for member/hospital, use path; otherwise clean to base + hash
        const pathUrl = hashToPath(hash);
        if (pathUrl && window.location.pathname + window.location.hash !== pathUrl) {
          history.replaceState(null, '', pathUrl);
        } else if (!pathUrl && window.location.pathname !== SITE_BASE + '/' && window.location.pathname !== SITE_BASE) {
          // For non-member/hospital pages while on a /member or /clinic path → clean to base
          history.replaceState(null, '', SITE_BASE + '/' + hash);
        }
        route.handler(match);
        this.updateNav(hash);
        // Instant scroll on navigation — overrides html scroll-behavior:smooth
        // so we don't see a slide-down animation when transitioning pages.
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        return;
      }
    }
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
    // Set body data-page for per-page styling
    let topPage = page;
    if (page === 'member') topPage = 'dermatologists';
    else if (page === 'hospital') topPage = 'hospitals';
    else if (page === 'treatment') topPage = 'treatments';
    document.body.dataset.page = topPage;
    // Close mobile menu
    document.getElementById('navMenu').classList.remove('open');
  }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

const app = document.getElementById('app');

function setPageTitle(title, ogImageName) {
  document.title = title;
  const setMeta = (sel, attr, value) => {
    let el = document.querySelector(sel);
    if (!el) {
      el = document.createElement('meta');
      const [a, n] = attr;
      el.setAttribute(a, n);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };
  setMeta('meta[property="og:title"]', ['property', 'og:title'], title);
  setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], title);
  if (ogImageName) {
    const url = 'https://jminbae.github.io/akd-members/images/og/' + ogImageName;
    setMeta('meta[property="og:image"]', ['property', 'og:image'], url);
    setMeta('meta[name="twitter:image"]', ['name', 'twitter:image'], url);
  }
}

function renderHome() {
  setPageTitle('피부과의사 찾기, 대한피부과의사회', 'default.jpg');
  app.innerHTML = `
    <div class="home-page fade-in">
      <div class="home-logo">
        <img src="images/badge.jpg" alt="피부과 전문의" class="home-badge-logo">
      </div>
      <h1 class="home-subtitle home-main-title">나에게 꼭 맞는 피부과를 찾아보세요!</h1>
      <div class="search-box">
        <input type="text" class="search-input" id="searchInput"
               placeholder="의사명, 피부과명, 진료분야로 검색" autocomplete="off">
        <button class="search-btn" id="searchBtn">
          <i class="fas fa-search"></i>
        </button>
        <div class="search-results" id="searchResults"></div>
      </div>
      <div class="home-shortcuts stagger">
        <a href="#dermatologists" class="home-shortcut">
          <i class="fas fa-user-md"></i>
          <span>피부과의사 찾기</span>
        </a>
        <a href="#hospitals" class="home-shortcut">
          <i class="fas fa-hospital"></i>
          <span>피부과 찾기</span>
        </a>
        <a href="#treatments" class="home-shortcut">
          <i class="fas fa-wand-magic-sparkles"></i>
          <span>진료분야로 찾기</span>
        </a>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
  searchInput.addEventListener('keydown', handleSearchKeydown);
  // Search button (magnifier) acts the same as Enter
  const searchBtn = document.getElementById('searchBtn');
  searchBtn?.addEventListener('click', () => {
    const items = document.querySelectorAll('#searchResults .search-suggest-item');
    const active = document.querySelector('#searchResults .search-suggest-item.search-suggest-active');
    const target = active || items[0];
    if (target) {
      const href = target.getAttribute('href');
      if (href) window.location.hash = href;
    }
  });
  // Auto-focus on desktop only (avoid forcing virtual keyboard on mobile)
  if (window.innerWidth > 768) {
    setTimeout(() => searchInput.focus({ preventScroll: true }), 50);
  }
  // Mobile: when input gains focus, expand the page height (becomes
  // scrollable) and smoothly scroll the window so the search box sits
  // just below the navbar. User can scroll freely afterwards. When the
  // keyboard is dismissed, smoothly scroll back to top.
  const homePage = document.querySelector('.home-page');
  const NAV_HEIGHT = 56;
  const NAV_GAP = 8; // small gap between navbar bottom and search box top
  // Manual smooth scroll — more reliable than window.scrollTo({behavior:'smooth'})
  // which has race-condition / state issues in some browsers across repeated calls.
  let scrollAnim = null;
  function manualSmoothScrollTo(targetY, duration = 280) {
    if (scrollAnim) cancelAnimationFrame(scrollAnim);
    const startY = window.scrollY;
    const distance = targetY - startY;
    if (Math.abs(distance) < 1) return;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
      window.scrollTo(0, startY + distance * ease);
      if (t < 1) scrollAnim = requestAnimationFrame(tick);
      else scrollAnim = null;
    };
    scrollAnim = requestAnimationFrame(tick);
  }

  // Track pending timers so we can cancel them when state flips quickly.
  let blurDelayTimer = null;
  let removeClassTimer = null;
  const clearAllPending = () => {
    if (scrollAnim) { cancelAnimationFrame(scrollAnim); scrollAnim = null; }
    clearTimeout(blurDelayTimer);
    clearTimeout(removeClassTimer);
    blurDelayTimer = removeClassTimer = null;
  };

  // Mobile flow — TRANSFORM-based, no scrolling at all:
  //   focus → set --search-shift CSS var so CSS transition slides the
  //           search-box up to just under the nav. Logo/title fade out.
  //   blur  → remove class → CSS reverses smoothly back to original.
  //   This avoids ALL scroll race conditions (iOS auto-scroll, my JS scroll,
  //   keyboard-induced viewport resize) which were causing stutter.
  // Cache slide-up offset on FIRST focus (pristine layout). Reusing this
  // prevents wrong measurements when user re-focuses mid-transition (where
  // search-box rect.top is between original and target, leading to a
  // smaller shift on subsequent slides).
  // Debug overlay so you can SEE the measurements per cycle (remove later).
  let __dbgDiv = null;
  let __dbgCycle = 0;
  const __dbgShow = (msg) => {
    if (!__dbgDiv) {
      __dbgDiv = document.createElement('div');
      __dbgDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:99999;background:#000c;color:#0f0;font:11px/1.3 monospace;padding:6px 10px;white-space:pre-wrap;pointer-events:none;';
      document.body.appendChild(__dbgDiv);
    }
    __dbgDiv.textContent = msg;
  };

  searchInput.addEventListener('focus', () => {
    if (window.innerWidth > 768 || !homePage) return;
    clearAllPending();
    if (homePage.classList.contains('search-focused')) return;
    const searchBox = document.querySelector('.search-box');
    if (!searchBox) return;
    __dbgCycle++;
    // Capture state BEFORE reset for debug
    const beforeRect = searchBox.getBoundingClientRect();
    const beforeTransform = getComputedStyle(homePage).transform;
    // STEP 1: Reset to true identity
    homePage.style.transition = 'none';
    homePage.style.transform = 'none';
    void homePage.offsetHeight;
    // STEP 2: Measure
    const rect = searchBox.getBoundingClientRect();
    const shift = Math.min(0, -(rect.top - 80));
    // Show on screen
    __dbgShow(
      `Cycle ${__dbgCycle}\n` +
      `BEFORE: rect.top=${beforeRect.top.toFixed(1)}  tx=${beforeTransform.slice(0, 50)}\n` +
      `AFTER RESET: rect.top=${rect.top.toFixed(1)}\n` +
      `shift=${shift.toFixed(1)}  innerH=${window.innerHeight}` +
      (window.visualViewport ? `  vvH=${window.visualViewport.height.toFixed(0)}` : '')
    );
    if (shift === 0) {
      homePage.style.transition = '';
      homePage.style.transform = '';
      homePage.classList.add('search-focused');
      return;
    }
    // STEP 3: Animate
    homePage.style.transition = '';
    homePage.style.transform = `translate3d(0, ${shift}px, 0)`;
    homePage.classList.add('search-focused');
  });
  const revertIfEmpty = () => {
    if (searchInput.value.trim()) return;
    if (!homePage?.classList.contains('search-focused')) return;
    homePage.classList.remove('search-focused');
    // Animate back to identity via inline transform (consistent with focus)
    homePage.style.transform = 'translate3d(0, 0, 0)';
    removeClassTimer = setTimeout(() => {
      homePage.style.transform = '';
      removeClassTimer = null;
    }, 400);
  };
  searchInput.addEventListener('blur', () => {
    blurDelayTimer = setTimeout(() => {
      revertIfEmpty();
      blurDelayTimer = null;
    }, 100);
  });
  // If user clears the field while it's BLURRED (rare), revert immediately.
  searchInput.addEventListener('input', () => {
    if (window.innerWidth > 768) return;
    if (!searchInput.value.trim() && document.activeElement !== searchInput) {
      revertIfEmpty();
    }
  });
  // Android: pressing the system back button dismisses the keyboard but may
  // KEEP the input focused. Detect keyboard close via visualViewport and
  // revert if the input has been emptied.
  if (window.visualViewport) {
    let lastKeyboardOpen = false;
    window.visualViewport.addEventListener('resize', () => {
      const keyboardOpen = (window.innerHeight - window.visualViewport.height) > 100;
      if (lastKeyboardOpen && !keyboardOpen) {
        // Keyboard just closed — if field is empty, revert (regardless of focus).
        if (!searchInput.value.trim()) {
          revertIfEmpty();
        }
      }
      lastKeyboardOpen = keyboardOpen;
    });
  }
}

// Move active highlight in the suggestion dropdown by `delta` (+1 / -1).
function moveSearchActive(delta) {
  const items = Array.from(document.querySelectorAll('#searchResults .search-suggest-item'));
  if (items.length === 0) return;
  const currentIdx = items.findIndex(el => el.classList.contains('search-suggest-active'));
  let nextIdx;
  if (currentIdx === -1) {
    nextIdx = delta > 0 ? 0 : items.length - 1;
  } else {
    nextIdx = (currentIdx + delta + items.length) % items.length;
  }
  items.forEach(el => el.classList.remove('search-suggest-active'));
  items[nextIdx].classList.add('search-suggest-active');
  // Scroll into view if dropdown is scrollable
  items[nextIdx].scrollIntoView({ block: 'nearest' });
}

function handleSearchKeydown(e) {
  const items = document.querySelectorAll('#searchResults .search-suggest-item');
  if (e.key === 'ArrowDown') {
    if (items.length === 0) return;
    e.preventDefault();
    moveSearchActive(1);
  } else if (e.key === 'ArrowUp') {
    if (items.length === 0) return;
    e.preventDefault();
    moveSearchActive(-1);
  } else if (e.key === 'Enter') {
    // Priority: highlighted item > first matching item > nothing
    const active = document.querySelector('#searchResults .search-suggest-item.search-suggest-active');
    const target = active || items[0];
    if (target) {
      e.preventDefault();
      const href = target.getAttribute('href');
      if (href) window.location.hash = href;
    }
  } else if (e.key === 'Escape') {
    e.target.value = '';
    handleSearch({ target: e.target });
  }
}

// Highlight matched substring in label (case-insensitive)
function highlightMatch(label, query) {
  if (!query) return label;
  const lcLabel = label.toLowerCase();
  const lcQuery = query.toLowerCase();
  let idx = lcLabel.indexOf(lcQuery);
  if (idx === -1) {
    // Fuzzy: search query as-is in stripped-label
    const sfLabel = stripKoreanFinal(lcLabel);
    idx = sfLabel.indexOf(lcQuery);
    if (idx === -1) return label;
  }
  const matchLen = query.length;
  return label.slice(0, idx) +
    '<mark class="search-suggest-mark">' + label.slice(idx, idx + matchLen) + '</mark>' +
    label.slice(idx + matchLen);
}

// Strip the final consonant (jongseong) from each Korean syllable so queries
// like "배" also match "백반증" (백 → 배), "신" → "신지연" / "심" / "싱" etc.
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

// Match priority score (lower = higher priority).
// IMPORTANT: only LABEL is strip-finalized, NOT the query.
// "배" (no final) matches "배정민" and "백반증" (백→배). ✓
// "백" (with final ㄱ) only matches words actually starting with 백 —
// the query is searched as-is so "배정민" does NOT match. ✓
//   0 = label starts with query exactly
//   1 = stripped-label starts with query  (e.g. 백반증→배반증 matches "배")
//   2 = label contains query exactly
//   3 = stripped-label contains query
//  -1 = no match
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

// Returns true when the query is purely Korean Jamo (consonants/vowels alone,
// no completed syllables and no other characters). In that state the user is
// still composing — wait for a syllable to form before showing results.
function isOnlyKoreanJamo(s) {
  if (!s) return false;
  return /^[\u1100-\u11FF\u3130-\u318F]+$/.test(s);
}

function handleSearch(e) {
  const query = e.target.value.trim();
  const resultsDiv = document.getElementById('searchResults');

  if (!query) {
    resultsDiv.innerHTML = '';
    return;
  }

  // Wait silently while the user is composing a Korean syllable
  // (e.g. "ㅂ" alone — a consonant without a vowel yet).
  if (isOnlyKoreanJamo(query)) {
    resultsDiv.innerHTML = '';
    return;
  }

  const suggestions = [];

  // Doctors — fuzzy match on name
  MEMBERS.forEach(m => {
    const score = fuzzyMatchScore(m.name, query);
    if (score >= 0) {
      const hospital = getHospital(m.hospitalId);
      suggestions.push({
        type: 'member',
        typeLabel: '의사',
        icon: 'fa-user-md',
        label: m.name,
        sub: hospital ? `${hospital.shortName} ${m.role}` : (m.role || ''),
        href: `#member/${m.id}`,
        score
      });
    }
  });

  // Hospitals — fuzzy match on name / shortName, fallback to address (no fuzzy)
  HOSPITALS.forEach(h => {
    const nameScore = Math.min(
      fuzzyMatchScore(h.name, query) === -1 ? 999 : fuzzyMatchScore(h.name, query),
      fuzzyMatchScore(h.shortName, query) === -1 ? 999 : fuzzyMatchScore(h.shortName, query)
    );
    if (nameScore < 999) {
      suggestions.push({
        type: 'hospital',
        typeLabel: '병원',
        icon: 'fa-hospital',
        label: h.name,
        sub: h.address,
        href: `#hospital/${h.id}`,
        score: nameScore
      });
    } else if (h.address.toLowerCase().includes(query.toLowerCase())) {
      suggestions.push({
        type: 'hospital',
        typeLabel: '병원',
        icon: 'fa-hospital',
        label: h.name,
        sub: h.address,
        subHighlight: true,
        href: `#hospital/${h.id}`,
        score: 4 // address match: lowest priority
      });
    }
  });

  // Treatments — fuzzy match on name
  const treatmentSet = new Set();
  TREATMENT_GROUPS.forEach(g => {
    g.items.forEach(name => {
      const score = fuzzyMatchScore(name, query);
      if (score >= 0 && !treatmentSet.has(name)) {
        treatmentSet.add(name);
        const hospitalCount = getHospitalsByTreatment(name).length;
        suggestions.push({
          type: 'treatment',
          typeLabel: '진료분야',
          icon: 'fa-wand-magic-sparkles',
          label: name,
          sub: hospitalCount > 0 ? `${g.name} · 진료 가능 ${hospitalCount}곳` : g.name,
          href: `#treatment/${encodeURIComponent(name)}`,
          score
        });
      }
    });
  });

  // Sort by (score asc, type group, alphabetical) so:
  //   1) Exact prefix matches across all types come first
  //   2) Strip-final prefix matches (받침 다른 글자로 시작) come next
  //   3) Contains matches at the bottom
  const typeOrder = { member: 0, treatment: 1, hospital: 2 };
  suggestions.sort((a, b) => {
    if (a.score !== b.score) return a.score - b.score;
    if (typeOrder[a.type] !== typeOrder[b.type]) return typeOrder[a.type] - typeOrder[b.type];
    return a.label.localeCompare(b.label, 'ko');
  });

  if (suggestions.length === 0) {
    resultsDiv.innerHTML = `<div class="search-suggest-empty">'${escapeHtml(query)}'에 해당하는 항목이 없습니다.</div>`;
    return;
  }

  // Render as compact suggestion list
  resultsDiv.innerHTML = suggestions.map(s => `
    <a href="${s.href}" class="search-suggest-item search-suggest-${s.type}">
      <i class="fas ${s.icon} search-suggest-icon"></i>
      <span class="search-suggest-label">${
        s.subHighlight ? escapeHtml(s.label) : highlightMatch(s.label, query)
      }</span>
      <span class="search-suggest-sub">${
        s.subHighlight ? highlightMatch(s.sub, query) : escapeHtml(s.sub || '')
      }</span>
      <span class="search-suggest-type">${s.typeLabel}</span>
    </a>
  `).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function renderMembers() {
  setPageTitle('피부과의사 찾기, 대한피부과의사회', 'default.jpg');
  app.innerHTML = `
    <div class="page-header">
      <h1>피부과의사 찾기</h1>
      <p>내 위치에서 가까운 피부과 전문의를 찾아드립니다.</p>
    </div>
    <div class="members-grid stagger" id="membersGrid">
      <div class="loading">위치 확인 중...</div>
    </div>
  `;

  if (navigator.geolocation && !userLocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        updateMembersView();
      },
      () => {
        userLocation = { lat: 37.5665, lng: 126.9780 };
        updateMembersView();
      },
      { timeout: 3000 }
    );
  } else {
    if (!userLocation) userLocation = { lat: 37.5665, lng: 126.9780 };
    setTimeout(updateMembersView, 100);
  }
}

function updateMembersView() {
  const mainDoctors = MEMBERS.filter(m => m.specialty === '피부과 전문의');

  // Sort doctors by distance, but bucket within ±2km and randomize within bucket
  // (so same-hospital doctors and nearby-distance doctors appear in different order each visit)
  const BUCKET_KM = 2.0;
  const withDistance = mainDoctors.map(m => {
    const hospital = getHospital(m.hospitalId);
    const distance = hospital
      ? haversine(userLocation.lat, userLocation.lng, hospital.lat, hospital.lng)
      : Infinity;
    return { member: m, hospital, distance, _rand: Math.random() };
  });
  // Step 1: sort ascending by distance
  withDistance.sort((a, b) => a.distance - b.distance);
  // Step 2: assign each entry a bucket index = floor(distance / BUCKET_KM)
  // so entries within the same 1km bucket are interchangeable
  withDistance.forEach(e => {
    e._bucket = Number.isFinite(e.distance) ? Math.floor(e.distance / BUCKET_KM) : Infinity;
  });
  // Step 3: re-sort by (bucket asc, random tiebreaker) so within a bucket order is random
  const sorted = withDistance.sort((a, b) => {
    if (a._bucket !== b._bucket) return a._bucket - b._bucket;
    return a._rand - b._rand;
  });

  const grid = document.getElementById('membersGrid');
  if (!grid) return;
  grid.innerHTML = sorted.map(({ member: m, hospital, distance }) => `
    <a href="#member/${m.id}" class="member-card">
      <div class="member-card-photo-wrap">
        <img src="${photoUrl(m.photo)}" class="member-card-photo" alt="${m.name}"
             loading="lazy" decoding="async"
             onerror="this.style.display='none'">
        <img src="images/badge.jpg" alt="피부과 전문의" class="member-card-badge-img"
             loading="lazy" decoding="async">
        <span class="sr-only">${m.specialty}</span>
      </div>
      <div class="member-card-body">
        <h3>${m.name}</h3>
        <p class="member-card-role">${hospital ? hospital.shortName : ''} ${m.role}</p>
        <div class="member-card-hospital">
          <i class="fas fa-hospital"></i>
          ${hospital ? hospital.name : ''}
          ${isFinite(distance) ? `<span class="member-card-distance">· 약 ${distance.toFixed(1)}km</span>` : ''}
        </div>
        ${m.treatments && m.treatments.length > 0 ? `
          <div class="member-card-tags">
            ${m.treatments.slice(0, 4).map((t, i) => `<span class="member-card-tag">${t}</span>`).join('')}
            ${m.treatments.length > 4 ? `<span class="member-card-tag">+${m.treatments.length - 4}</span>` : ''}
          </div>
        ` : ''}
      </div>
    </a>
  `).join('');
}

// Generate scattered "balloon" positions around the photo (avoiding center where face is)
// Doctors with two photos for hero cross-fade
const DOCTORS_WITH_TWO_PHOTOS = new Set([
  'bae-jungmin', 'kim-hongseok', 'lee-haeun', 'gye-jiwon',
  'shin-jiyeon', 'jung-hanmi', 'park-saemi', 'park-mingi'
]);

let _heroPhotoTimer = null;
function startHeroPhotoCycle() {
  if (_heroPhotoTimer) { clearInterval(_heroPhotoTimer); _heroPhotoTimer = null; }
  const imgs = document.querySelectorAll('.hero-photo-img');
  if (imgs.length < 2) return;
  let idx = 0;
  _heroPhotoTimer = setInterval(() => {
    imgs[idx].classList.remove('active');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('active');
  }, 3000);
}

let _balloonReposTimer = null;
function startBalloonReposition() {
  if (_balloonReposTimer) { clearInterval(_balloonReposTimer); _balloonReposTimer = null; }
  const balloons = Array.from(document.querySelectorAll('.hero-sns-balloon'));
  if (balloons.length < 2) return;
  _balloonReposTimer = setInterval(() => {
    const positions = generateBalloonPositions(balloons.length);
    balloons.forEach((b, i) => {
      const p = positions[i];
      if (!p) return;
      b.style.top = p.top;
      b.style.left = p.left;
    });
  }, 5000);
}

function generateBalloonPositions(count) {
  if (count === 0) return [];
  // Each zone: [topMin, topMax, leftMin, leftMax]
  // Keep balloons safely inside the photo container (15-85% horizontal range when accounting for translate -50%)
  const zones = [
    [6, 16, 18, 32],    // top-left
    [4, 12, 64, 80],    // top-right
    [24, 36, 16, 26],   // upper-left
    [22, 34, 72, 84],   // upper-right
    [48, 62, 14, 24],   // mid-left
    [52, 66, 76, 86],   // mid-right
    [76, 88, 22, 34],   // bottom-left
    [80, 90, 64, 80]    // bottom-right
  ];
  const shuffled = [...zones].sort(() => Math.random() - 0.5);
  return Array.from({ length: count }, (_, i) => {
    const z = shuffled[i % shuffled.length];
    const top = z[0] + Math.random() * (z[1] - z[0]);
    const left = z[2] + Math.random() * (z[3] - z[2]);
    return {
      top: top.toFixed(1) + '%',
      left: left.toFixed(1) + '%',
      delay: (Math.random() * 0.6).toFixed(2)
    };
  });
}

function renderMemberDetail(params) {
  const member = getMember(params.id);
  if (!member) {
    app.innerHTML = '<div class="loading">회원을 찾을 수 없습니다.</div>';
    return;
  }

  const hospital = getHospital(member.hospitalId);
  const teamDoctors = hospital ? getHospitalDoctors(hospital.id).filter(d => d.id !== member.id) : [];

  setPageTitle((hospital ? hospital.name + ' ' : '') + member.name, 'member-' + member.id + '.jpg');

  const snsIconMap = {
    website: 'fa-solid fa-globe',
    instagram: 'fa-brands fa-instagram',
    youtube: 'fa-brands fa-youtube',
    threads: 'fa-brands fa-threads',
    tiktok: 'fa-brands fa-tiktok',
    linktree: 'fa-solid fa-link'
  };

  // Generate random positions for SNS balloons
  const balloonPositions = generateBalloonPositions(member.links ? member.links.length : 0);

  app.innerHTML = `
    <div class="member-detail-v2 fade-in">
      <!-- Hero Section -->
      <section class="member-hero-v2">
        <div class="member-hero-inner">
          <div class="member-hero-info-top">
            ${hospital ? `
              <a href="#hospital/${hospital.id}" class="hero-hospital-name">
                <i class="fas fa-hospital"></i>
                <span>${hospital.name}</span>
              </a>
            ` : ''}
            <h1 class="hero-name">${member.name}</h1>
            ${member.quote ? `
              <p class="hero-quote">${member.quote}</p>
            ` : ''}
          </div>

          <div class="member-hero-photo${DOCTORS_WITH_TWO_PHOTOS.has(member.id) ? ' has-multi' : ''}">
            ${(() => {
              const photos = [`회원 프로필 사진_누끼/${member.id}.png`];
              if (DOCTORS_WITH_TWO_PHOTOS.has(member.id)) {
                photos.push(`회원 프로필 사진_누끼/${member.id}_2.png`);
              }
              return photos.map((p, i) => `
                <img src="${photoUrl(p)}" alt="${member.name}"
                     class="hero-photo-img${i === 0 ? ' active' : ''}"
                     onerror="this.style.display='none'">
              `).join('');
            })()}

            ${member.links && member.links.length ? `
              <div class="hero-sns-balloons">
                ${member.links.map((l, i) => {
                  const pos = balloonPositions[i] || { top: '50%', left: '50%', delay: 0 };
                  return `
                  <a href="${l.url}" target="_blank" rel="noopener"
                     class="hero-sns-balloon"
                     style="top:${pos.top};left:${pos.left};animation-delay:${pos.delay}s"
                     title="${l.label}">
                    <i class="${snsIconMap[l.type] || 'fa-solid fa-link'}"></i>
                    <span class="balloon-label">${l.label}</span>
                  </a>
                  `;
                }).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      </section>

      <div class="member-detail-body">
        <!-- Spacer to keep info-grid container -->
        <div style="display:none;"></div>

          <div class="member-info-grid">
            <!-- Position & Role -->
            ${member.positions && member.positions.length > 0 ? `
              <div class="info-card">
                <h3 class="info-card-title"><i class="fas fa-id-badge"></i> 대한피부과의사회 활동</h3>
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
                    ${[...member.lectures].sort((a, b) => String(b.year).localeCompare(String(a.year))).map(l => `
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
                <h3 class="info-card-title"><i class="fas fa-wand-magic-sparkles"></i> 진료분야</h3>
                <div class="treatment-tags">
                  ${member.treatments.map((t, i) => `
                    <a href="#treatment/${encodeURIComponent(t)}" class="treatment-tag group-${getTreatmentGroup(t)}">${t}</a>
                  `).join('')}
                </div>
              </div>
            ` : ''}
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

  // Start cross-fade for hero photos (if 2 exist)
  setTimeout(startHeroPhotoCycle, 100);
  // Start periodic random repositioning of SNS balloons (independent of photo cycle)
  setTimeout(startBalloonReposition, 100);
}

let hospitalsMap = null;
let hospitalsMarkers = [];

function renderHospitals() {
  setPageTitle('피부과 소개, 대한피부과의사회', 'default.jpg');
  app.innerHTML = `
    <div class="page-header">
      <h1>피부과의원 찾기</h1>
      <p>내 위치에서 가까운 피부과를 보여드립니다.</p>
    </div>
    <div class="hospitals-page">
      <div class="hospitals-map-large" id="hospitalsMapLarge"></div>
      <div class="hospitals-list" id="hospitalsList"></div>
    </div>
  `;

  // Get user location and render
  if (navigator.geolocation && !userLocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        updateHospitalsView();
      },
      () => {
        userLocation = { lat: 37.5665, lng: 126.9780 };
        updateHospitalsView();
      },
      { timeout: 3000 }
    );
  } else {
    if (!userLocation) userLocation = { lat: 37.5665, lng: 126.9780 };
    setTimeout(updateHospitalsView, 100);
  }
}

function updateHospitalsView() {
  // Sort by distance from user
  const sortedHospitals = HOSPITALS.map(h => ({
    ...h,
    distance: haversine(userLocation.lat, userLocation.lng, h.lat, h.lng)
  })).sort((a, b) => a.distance - b.distance);

  // Render list
  const listEl = document.getElementById('hospitalsList');
  if (listEl) {
    listEl.innerHTML = sortedHospitals.map((h, index) => {
      const doctors = getHospitalDoctors(h.id);
      return `
        <a href="#hospital/${h.id}" class="hospital-list-item"
           onmouseenter="highlightHospitalMarker('${h.id}')"
           onmouseleave="unhighlightHospitalMarker('${h.id}')">
          <div class="hospital-list-rank">${index + 1}</div>
          <div class="hospital-list-content">
            <h3 class="hospital-list-name">${h.name}</h3>
            <p class="hospital-list-address"><i class="fas fa-map-marker-alt"></i> ${h.address}</p>
            <p class="hospital-list-distance"><i class="fas fa-route"></i> 약 ${h.distance.toFixed(1)}km</p>
            <div class="hospital-list-doctors">
              ${doctors.map(d => `
                <img src="${photoUrl(d.photo)}" class="hospital-list-doctor-avatar" alt="${d.name}"
                     onerror="this.style.background='var(--bg-dark)'">
              `).join('')}
              <span class="hospital-list-doctor-names">
                ${doctors.map(d => d.name).join(', ')} ${doctors.length > 1 ? '외' : ''} 진료
              </span>
            </div>
          </div>
          <i class="fas fa-chevron-right hospital-list-arrow"></i>
        </a>
      `;
    }).join('');
  }

  // Render map
  initHospitalsMap(sortedHospitals);
}

function initHospitalsMap(hospitals) {
  const mapEl = document.getElementById('hospitalsMapLarge');
  if (!mapEl) return;

  if (hospitalsMap) {
    try { hospitalsMap.remove(); } catch (e) {}
    hospitalsMap = null;
  }

  hospitalsMap = L.map('hospitalsMapLarge');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(hospitalsMap);

  hospitalsMarkers = [];
  const bounds = [[userLocation.lat, userLocation.lng]];

  // User marker
  const userIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width:20px;height:20px;border-radius:50%;
      background:#3498db;border:3px solid white;
      box-shadow:0 0 0 3px rgba(52,152,219,0.4);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
    .addTo(hospitalsMap)
    .bindPopup('<div class="map-popup-title">내 위치</div>');

  hospitals.forEach((h, index) => {
    const icon = L.divIcon({
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

    const marker = L.marker([h.lat, h.lng], { icon }).addTo(hospitalsMap);
    const doctors = getHospitalDoctors(h.id);
    marker.bindPopup(`
      <div class="map-popup-title">${h.name}</div>
      <div class="map-popup-address">${h.address}</div>
      <div style="margin-top:6px;font-size:12px;color:#636e72;">
        ${doctors.map(d => d.name + ' ' + d.role).join(', ')}
      </div>
      <a href="#hospital/${h.id}" class="map-popup-link">병원 상세보기 &rarr;</a>
    `);
    marker.hospitalId = h.id;
    hospitalsMarkers.push(marker);
    bounds.push([h.lat, h.lng]);
  });

  hospitalsMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });

  // Ensure correct rendering when container size changes
  setTimeout(() => {
    if (hospitalsMap) {
      hospitalsMap.invalidateSize();
      hospitalsMap.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
    }
  }, 250);
}

function highlightHospitalMarker(hospitalId) {
  const marker = hospitalsMarkers.find(m => m.hospitalId === hospitalId);
  if (marker) marker.openPopup();
}

function unhighlightHospitalMarker(hospitalId) {
  const marker = hospitalsMarkers.find(m => m.hospitalId === hospitalId);
  if (marker) marker.closePopup();
}

function renderHospitalDetail(params) {
  const hospital = getHospital(params.id);
  if (!hospital) {
    app.innerHTML = '<div class="loading">병원을 찾을 수 없습니다.</div>';
    return;
  }

  const doctors = getHospitalDoctors(hospital.id);

  setPageTitle(hospital.name, 'hospital-' + hospital.id + '.jpg');

  app.innerHTML = `
    <div class="hospital-detail fade-in">
      <div class="hospital-hero">
        <h1>${hospital.name}</h1>
        <p>${hospital.description}</p>
      </div>

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

      <div class="hospital-treatments-section">
        <h2><i class="fas fa-wand-magic-sparkles"></i> 진료분야</h2>
        <p class="hospital-treatments-desc">소속 원장님들이 진료하는 분야입니다</p>
        <div class="treatment-tags">
          ${TREATMENT_GROUPS.flatMap(g =>
            hospital.treatments
              .filter(t => g.items.includes(t))
              .map(t => `<a href="#treatment/${encodeURIComponent(t)}" class="treatment-tag group-${g.id}">${t}</a>`)
          ).join('')}
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
  setPageTitle('피부과의사 찾기, 대한피부과의사회', 'default.jpg');

  // Compute counts for each item, sorted by count + 가나다 within group
  const sortedGroups = TREATMENT_GROUPS.map(g => {
    const items = g.items.map(name => ({
      name,
      group: g.id,
      icon: g.icon,
      count: MEMBERS.filter(m => m.treatments && m.treatments.includes(name)).length
    })).sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      return a.name.localeCompare(b.name, 'ko');
    });
    return { ...g, items };
  });

  // Find first group with at least one doctor (show all items selected by default)
  const firstGroup = sortedGroups.find(g => g.items.some(i => i.count > 0)) || sortedGroups[0];

  app.innerHTML = `
    <div class="page-header">
      <h1>진료분야로 찾기</h1>
      <p>해당 분야를 진료하는 가까운 피부과를 찾을 수 있습니다.</p>
    </div>
    <div class="treatments-page">
      <div class="treatment-group-tabs" id="treatmentGroupTabs">
        ${sortedGroups.map((g, i) => `
          <button class="treatment-group-tab ${g.id === firstGroup.id ? 'active' : ''}"
                  data-group="${g.id}"
                  onclick="selectTreatmentGroup('${g.id}')">
            <i class="fas ${g.icon}"></i> ${g.name}
          </button>
        `).join('')}
      </div>
      <div class="treatments-categories-wrap">
        <div class="treatments-categories" id="treatmentCategories">
          ${sortedGroups.map(g => g.items.map(item => `
            <button class="treatment-category-btn group-${item.group}"
                    data-treatment="${item.name}"
                    data-group="${item.group}"
                    style="${item.group === firstGroup.id ? '' : 'display:none'}"
                    onclick="selectTreatment('${item.name}')">
              ${item.name}
            </button>
          `).join('')).join('')}
        </div>
      </div>
      <div class="treatments-content">
        <div class="treatments-map" id="treatmentsMap"></div>
        <div class="treatments-list" id="treatmentsList"></div>
      </div>
    </div>
  `;

  // Initialize with all items in first group (no specific item active)
  setTimeout(() => {
    selectTreatmentGroup(firstGroup.id);
  }, 100);
}

function selectTreatmentGroup(groupId) {
  // Update tab active state
  document.querySelectorAll('.treatment-group-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.group === groupId);
  });
  // Show items of this group, deselect any active item (group-wide selection)
  document.querySelectorAll('.treatment-category-btn').forEach(btn => {
    btn.style.display = btn.dataset.group === groupId ? '' : 'none';
    btn.classList.remove('active');
  });
  // Show all hospitals/doctors for any item in this group
  const group = TREATMENT_GROUPS.find(g => g.id === groupId);
  const items = group ? group.items : [];
  showTreatmentResults(items);
}

let treatmentMap = null;
let treatmentMarkers = [];
let userLocation = null;

function selectTreatment(treatmentName) {
  // Mark only this item as active
  document.querySelectorAll('.treatment-category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.treatment === treatmentName);
  });
  showTreatmentResults([treatmentName]);
}

// Show map and list for one or many treatment names (any-match)
function showTreatmentResults(treatmentNames) {
  // Collect hospitals matching any of the treatments
  const hospitalSet = new Set();
  treatmentNames.forEach(t => {
    getHospitalsByTreatment(t).forEach(h => hospitalSet.add(h));
  });
  const hospitals = Array.from(hospitalSet);

  if (navigator.geolocation && !userLocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        updateTreatmentView(treatmentNames, hospitals);
      },
      () => {
        userLocation = { lat: 37.5665, lng: 126.9780 };
        updateTreatmentView(treatmentNames, hospitals);
      },
      { timeout: 3000 }
    );
  } else {
    if (!userLocation) userLocation = { lat: 37.5665, lng: 126.9780 };
    updateTreatmentView(treatmentNames, hospitals);
  }
}

function updateTreatmentView(treatmentNames, hospitals) {
  // Normalize: accept array or single string for backward compatibility
  const treatments = Array.isArray(treatmentNames) ? treatmentNames : [treatmentNames];

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
      .filter(d => d && d.treatments && d.treatments.some(t => treatments.includes(t)));

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
  initTreatmentMap(sortedHospitals, treatments);
}

function initTreatmentMap(hospitals, treatmentNames) {
  const treatments = Array.isArray(treatmentNames) ? treatmentNames : [treatmentNames];
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
      .filter(d => d && d.treatments && d.treatments.some(t => treatments.includes(t)));

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
document.getElementById('navToggle').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('navMenu').classList.toggle('open');
});

// Auto-close mobile menu when user interacts elsewhere
// (clicks outside the menu/toggle, or focuses an input/textarea)
document.addEventListener('click', (e) => {
  const navMenu = document.getElementById('navMenu');
  if (!navMenu.classList.contains('open')) return;
  // Ignore clicks inside nav-menu itself or on the toggle
  if (e.target.closest('#navMenu') || e.target.closest('#navToggle')) return;
  navMenu.classList.remove('open');
}, true);
// Also close when an input or textarea anywhere gains focus
document.addEventListener('focusin', (e) => {
  const navMenu = document.getElementById('navMenu');
  if (!navMenu.classList.contains('open')) return;
  if (e.target.matches('input, textarea, select, [contenteditable]')) {
    navMenu.classList.remove('open');
  }
});
// Close on scroll or any touch on the body content
window.addEventListener('scroll', () => {
  const navMenu = document.getElementById('navMenu');
  if (navMenu?.classList.contains('open')) navMenu.classList.remove('open');
}, { passive: true });
document.addEventListener('touchstart', (e) => {
  const navMenu = document.getElementById('navMenu');
  if (!navMenu?.classList.contains('open')) return;
  if (e.target.closest('#navMenu') || e.target.closest('#navToggle')) return;
  navMenu.classList.remove('open');
}, { passive: true });

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
  // Render treatments page then go directly to single-treatment view.
  // (Previously we called selectTreatmentGroup first, which dispatched a
  // GROUP-wide showTreatmentResults whose async geolocation callback could
  // race with the subsequent selectTreatment, leaving the page showing the
  // group result instead of the single treatment.)
  const treatmentName = decodeURIComponent(params.id);
  renderTreatments();
  setTimeout(() => {
    const groupId = getTreatmentGroup(treatmentName);
    // Update tabs / item visibility to reflect the chosen group, but do NOT
    // run a group-wide showTreatmentResults.
    document.querySelectorAll('.treatment-group-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.group === groupId);
    });
    document.querySelectorAll('.treatment-category-btn').forEach(btn => {
      btn.style.display = btn.dataset.group === groupId ? '' : 'none';
    });
    // Now select the single treatment (this is the only showTreatmentResults call)
    selectTreatment(treatmentName);
  }, 200);
});
