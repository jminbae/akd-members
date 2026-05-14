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
    description: '피부과전문의 1:1 맞춤 상담을 제공하며, 커스텀 리프팅, 스킨부스터, 콜라겐부스터 등 다양한 시술을 시행합니다.',
    slogan: '커스텀 리프팅·스킨부스터·콜라겐부스터 전문, 피부과 전문의 1:1 맞춤 상담',
    heroImages: [
      '병원 소개 이미지/healhouse-gangnam/01.jpg',
      '병원 소개 이미지/healhouse-gangnam/02.jpg',
      '병원 소개 이미지/healhouse-gangnam/03.jpg'
    ],
    interiorPhotos: [
      { image: '병원 소개 이미지/healhouse-gangnam/01.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/02.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/03.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/04.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/05.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/06.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/07.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/08.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/09.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/10.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/11.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/12.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/13.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/14.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/15.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/16.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/17.jpg', category: 'other', caption: '' },
      { image: '병원 소개 이미지/healhouse-gangnam/18.jpg', category: 'other', caption: '' }
    ],
    equipment: [
      { name: '3DEEP', image: '장비 소개 이미지/healhouse-gangnam/01.png', treatmentTags: ['안티에이징'] },
      { name: 'alltite05', image: '장비 소개 이미지/healhouse-gangnam/02.png', treatmentTags: ['안티에이징'] },
      { name: '더마샤인', image: '장비 소개 이미지/healhouse-gangnam/03.png', treatmentTags: ['안티에이징'] },
      { name: '미라젯', image: '장비 소개 이미지/healhouse-gangnam/04.png', treatmentTags: ['안티에이징'] },
      { name: '버츄', image: '장비 소개 이미지/healhouse-gangnam/05.png', treatmentTags: ['안티에이징'] },
      { name: '슈링크유니버스', image: '장비 소개 이미지/healhouse-gangnam/06.png', treatmentTags: ['안티에이징'] },
      { name: '써마지', image: '장비 소개 이미지/healhouse-gangnam/07.png', treatmentTags: ['안티에이징'] },
      { name: '울쎄라', image: '장비 소개 이미지/healhouse-gangnam/08.png', treatmentTags: ['안티에이징'] },
      { name: '인터오션-고압산소', image: '장비 소개 이미지/healhouse-gangnam/09.png', treatmentTags: ['안티에이징'] },
      { name: '쥬브젠', image: '장비 소개 이미지/healhouse-gangnam/10.png', treatmentTags: ['안티에이징'] },
      { name: '텐써마 01', image: '장비 소개 이미지/healhouse-gangnam/11.png', treatmentTags: ['안티에이징'] },
      { name: '티타늄', image: '장비 소개 이미지/healhouse-gangnam/12.png', treatmentTags: ['안티에이징'] },
      { name: '피아모', image: '장비 소개 이미지/healhouse-gangnam/13.png', treatmentTags: ['안티에이징'] },
      { name: 'CO2', image: '장비 소개 이미지/healhouse-gangnam/14.png', treatmentTags: ['레이저'] },
      { name: 'GV', image: '장비 소개 이미지/healhouse-gangnam/15.png', treatmentTags: ['레이저'] },
      { name: 'M22', image: '장비 소개 이미지/healhouse-gangnam/16.png', treatmentTags: ['레이저'] },
      { name: '레블라이트', image: '장비 소개 이미지/healhouse-gangnam/17.png', treatmentTags: ['레이저'] },
      { name: '로터스3', image: '장비 소개 이미지/healhouse-gangnam/18.png', treatmentTags: ['레이저'] },
      { name: '브이빔', image: '장비 소개 이미지/healhouse-gangnam/19.png', treatmentTags: ['레이저'] },
      { name: '울트라펄스 앙코르', image: '장비 소개 이미지/healhouse-gangnam/20.png', treatmentTags: ['레이저'] },
      { name: '인라이튼 루비피코', image: '장비 소개 이미지/healhouse-gangnam/21.png', treatmentTags: ['레이저'] },
      { name: '젠틀맥스프로', image: '장비 소개 이미지/healhouse-gangnam/22.png', treatmentTags: ['레이저'] },
      { name: '포토나스타워커', image: '장비 소개 이미지/healhouse-gangnam/23.png', treatmentTags: ['레이저'] },
      { name: '헬리오스Ⅳ', image: '장비 소개 이미지/healhouse-gangnam/24.png', treatmentTags: ['레이저'] },
      { name: 'FN광선(UV700)', image: '장비 소개 이미지/healhouse-gangnam/25.png', treatmentTags: ['피부치료장비'] },
      { name: 'HF광선(UV400NB)', image: '장비 소개 이미지/healhouse-gangnam/26.png', treatmentTags: ['피부치료장비'] },
      { name: '손발광선기', image: '장비 소개 이미지/healhouse-gangnam/27.png', treatmentTags: ['피부치료장비'] },
      { name: '얼굴광선기', image: '장비 소개 이미지/healhouse-gangnam/28.png', treatmentTags: ['피부치료장비'] },
      { name: '엑시머 EXL-440', image: '장비 소개 이미지/healhouse-gangnam/29.png', treatmentTags: ['피부치료장비'] },
      { name: '전신광선기', image: '장비 소개 이미지/healhouse-gangnam/30.png', treatmentTags: ['피부치료장비'] },
      { name: '전신광선기2', image: '장비 소개 이미지/healhouse-gangnam/31.png', treatmentTags: ['피부치료장비'] }
    ]
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
  },
  {
    id: 'yonsei-star',
    name: '연세스타피부과의원',
    shortName: '연세스타피부과',
    address: '서울특별시 서대문구 신촌로 73 테라운드 6층',
    phone: '02-332-0023',
    lat: 37.5563,
    lng: 126.9381,
    website: 'http://yonseistar.co.kr',
    hours: {
      '평일 (월~금)': '09:00 - 20:00',
      '토요일': '09:00 - 15:00',
      '점심시간': '13:00 - 14:00',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['lee-sangju', 'kang-jinmoon', 'jung-jeanne', 'lim-jaeyun', 'park-byoungjin'],
    description: '신촌역 도보 5분. 흉터·문신제거·색소·웰에이징 클리닉. 연세대 의과대 출신 전문의 진료.'
  },
  {
    id: 'human-bundang',
    name: '휴먼피부과의원 분당점',
    shortName: '휴먼피부과 분당점',
    address: '경기도 성남시 분당구 백현로 97 다운타운 304호',
    phone: '031-713-9995',
    lat: 37.3795,
    lng: 127.1148,
    website: 'https://humanbd.co.kr',
    hours: {},
    treatments: [],
    doctorIds: ['yoon-hongseok'],
    description: '수내역 3번 출구 도보 5분. 분당 지역 휴먼피부과 네트워크 분점.'
  },
  {
    id: 'louis',
    name: '루이피부과의원',
    shortName: '루이피부과',
    address: '경기도 구리시 장자대로 72 204호 (수택동, 미림프라자)',
    phone: '031-553-7522',
    lat: 37.5944,
    lng: 127.1417,
    website: 'http://www.louiskin.com',
    hours: {},
    treatments: [],
    doctorIds: ['lee-haewoong'],
    description: '구리·남양주 지역 피부과 전문의 진료. 색소레이저·여드름·흉터·보험질환 중점.'
  },
  {
    id: 'leaders-apgujeong',
    name: '리더스피부과의원 압구정점',
    shortName: '리더스피부과 압구정점',
    address: '서울특별시 강남구 언주로 843 4층, 5층 (신사동)',
    phone: '02-548-7833',
    lat: 37.5249,
    lng: 127.0292,
    website: 'https://leaders-aj.com',
    hours: {
      '평일 (월~금)': '10:00 - 19:30',
      '토요일': '10:00 - 15:00',
      '점심시간': '13:00 - 14:00 (토요일은 점심없이 진료)',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['kang-seunghee', 'youn-seongjae'],
    description: '리더스피부과 네트워크 압구정점.'
  },
  {
    id: 'bethel',
    name: '벧엘피부과의원',
    shortName: '벧엘피부과',
    address: '부산광역시 동래구 충렬대로 160 창림빌딩 4층',
    phone: '',
    lat: 35.2057,
    lng: 129.0807,
    website: 'http://busan.bethelskin.com',
    hours: {
      '월~목': '10:00 - 19:00',
      '금요일': '10:00 - 20:30 (야간)',
      '토요일': '10:00 - 14:00',
      '점심시간': '13:00 - 14:30',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['choi-sooyoung'],
    description: '부산 동래역 도보 1분. 피부과 전문의 진료.'
  },
  {
    id: 'mijiye',
    name: '미지예피부과의원',
    shortName: '미지예피부과',
    address: '광주광역시 서구 상무중앙로 9 5층 (동양빌딩)',
    phone: '062-382-7002',
    lat: 35.1521,
    lng: 126.8419,
    website: 'http://www.skin-clinic.co.kr',
    hours: {},
    treatments: [],
    doctorIds: ['kim-dohyun', 'jung-jinwook'],
    description: '광주 상무역 4번 출구 도보 2분. 광주 서구 지역 피부과 전문의 진료.'
  },
  {
    id: 'hayan-j',
    name: '하얀J피부과의원',
    shortName: '하얀J피부과',
    address: '서울특별시 노원구 한글비석로 235 304호 (중계동, 세신빌딩)',
    phone: '02-933-3145',
    lat: 37.6505,
    lng: 127.0775,
    website: '',
    hours: {},
    treatments: [],
    doctorIds: ['joo-hyunjoong'],
    description: '노원 중계동 피부과 전문의 진료.'
  },
  {
    id: 'ten',
    name: '티엔피부과의원',
    shortName: '티엔피부과',
    address: '서울특별시 서초구 서초중앙로 227, 8층 (반포동, 진일빌딩)',
    phone: '02-537-6030',
    lat: 37.4942,
    lng: 127.0146,
    website: 'https://tnskin.kr',
    hours: {
      '월·화·수·금': '09:30 - 18:30',
      '목요일': '14:00 - 20:30 (야간)',
      '토요일': '09:30 - 15:30',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['kim-jihyun'],
    description: '서초·반포 지역 피부과 전문의 진료.'
  },
  {
    id: 'thehill-sinsa',
    name: '더힐피부과의원 신사점',
    shortName: '더힐피부과 신사점',
    address: '서울 강남구 강남대로 652 신사스퀘어 7층',
    phone: '',
    lat: 37.5198,
    lng: 127.0204,
    website: 'http://www.thehealskin.co.kr',
    hours: {
      '평일·토': '10:00 - 19:30',
      '점심시간': '13:00 - 14:00'
    },
    treatments: [],
    doctorIds: ['cho-sooick', 'park-juhyuk', 'lee-kyounggeun', 'kang-hyunah', 'park-minwoo', 'cho-eunbyul', 'heo-geunyeong', 'kim-junki'],
    description: '신사역 6번 출구 도보 5분. 더힐피부과 네트워크 신사 본점.'
  },
  {
    id: 'yonsei-ab',
    name: '연세A&B피부과의원',
    shortName: '연세A&B피부과',
    address: '서울특별시 송파구 백제고분로 365 태문빌딩 3층 (석촌동)',
    phone: '',
    lat: 37.5028,
    lng: 127.1063,
    website: 'http://www.anbskin.com',
    hours: {},
    treatments: [],
    doctorIds: ['lee-haejin', 'lee-seunghun', 'yoon-soyoung'],
    description: '석촌역 2번 출구 170m. 송파 지역 피부과 전문의 진료.'
  },
  {
    id: 'eoullim',
    name: '어울림피부과의원',
    shortName: '어울림피부과',
    address: '대전광역시 유성구 문지로 299번길 86-4, 2층 (문지동)',
    phone: '',
    lat: 36.3863,
    lng: 127.4011,
    website: '',
    hours: {},
    treatments: [],
    doctorIds: ['ha-jeongmin'],
    description: '대전 유성구 문지동 피부과 전문의 진료.'
  },
  {
    id: 'celody-gangseo',
    name: '셀로디피부과의원 강서점',
    shortName: '셀로디피부과 강서점',
    address: '서울시 강서구 공항대로 525 비원 오피스텔 202·203호',
    phone: '02-3664-1675',
    lat: 37.551,
    lng: 126.8634,
    website: 'https://ks.cellodyskin.com',
    hours: {
      '월·수·목': '10:00 - 19:00',
      '화·금': '10:00 - 20:00 (야간)',
      '토요일': '09:30 - 15:00 (점심없이)',
      '점심시간': '13:00 - 14:00',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['kwon-wonjoo', 'lee-hojung', 'jung-joonwoo'],
    description: '9호선 등촌역 2번 출구 도보. 셀로디피부과 네트워크 강서점.',
    slogan: '9호선 등촌역 도보 1분, 강서구 피부과 전문의 진료',
    heroImages: [
      '병원 소개 이미지/celody-gangseo/03.jpg',
      '병원 소개 이미지/celody-gangseo/04.jpg',
      '병원 소개 이미지/celody-gangseo/05.jpg'
    ],
    philosophy: [
      { title: '피부과 전문의 진료', description: '대한피부과의사회 정회원으로서 의학적 근거와 정품 의료기기를 기반으로 진료합니다.' },
      { title: '맞춤 시술 설계', description: '환자의 피부 상태와 생활 패턴을 고려한 1:1 맞춤 시술 플랜을 제안합니다.' },
      { title: '정품 장비 운영', description: '울쎄라·써마지·포텐자 등 식약처 허가 정품 장비를 운영합니다.' },
      { title: '안전 우선 원칙', description: '모든 시술은 사전 상담을 통해 적응증·금기증을 충분히 확인한 후 진행합니다.' }
    ],
    interiorPhotos: [
      { image: '병원 소개 이미지/celody-gangseo/01.jpg', category: 'treatment',    caption: '시술실 (울쎄라 프라임)' },
      { image: '병원 소개 이미지/celody-gangseo/02.jpg', category: 'treatment',    caption: '시술실' },
      { image: '병원 소개 이미지/celody-gangseo/03.jpg', category: 'reception',   caption: '리셉션' },
      { image: '병원 소개 이미지/celody-gangseo/04.jpg', category: 'reception',   caption: '대기 공간' },
      { image: '병원 소개 이미지/celody-gangseo/05.jpg', category: 'consultation',caption: '상담실' },
      { image: '병원 소개 이미지/celody-gangseo/06.jpg', category: 'consultation',caption: '상담실' },
      { image: '병원 소개 이미지/celody-gangseo/07.jpg', category: 'treatment',    caption: '시술실' },
      { image: '병원 소개 이미지/celody-gangseo/08.jpg', category: 'treatment',    caption: '시술실' },
      { image: '병원 소개 이미지/celody-gangseo/09.jpg', category: 'other',        caption: '내부 공간' },
      { image: '병원 소개 이미지/celody-gangseo/10.jpg', category: 'other',        caption: '내부 공간' },
      { image: '병원 소개 이미지/celody-gangseo/11.jpg', category: 'treatment',    caption: '시술실' },
      { image: '병원 소개 이미지/celody-gangseo/12.jpg', category: 'other',        caption: '내부 공간' }
    ],
    equipment: [],
    parkingInfo: '건물 내 주차장 이용 가능 (사전 문의)',
    transitInfo: '9호선 등촌역 2번 출구 도보 17m'
  },
  {
    id: 'doctors-daegu',
    name: '닥터스피부과의원 대구점',
    shortName: '닥터스피부과 대구점',
    address: '대구광역시 수성구 달구벌대로 2360 메트로안과빌딩 5층',
    phone: '053-710-1007',
    lat: 35.8579,
    lng: 128.6263,
    website: 'https://daegu.doctors365.co.kr',
    hours: {
      '월·금': '10:00 - 20:30 (야간)',
      '화·수·목': '10:00 - 19:30',
      '토요일': '09:30 - 15:30 (점심없이)',
      '점심시간': '13:00 - 14:00',
      '일요일': '휴무'
    },
    treatments: [],
    doctorIds: ['eun-donghyuk', 'sohng-chihyeon'],
    description: '2호선 범어역 2번 출구 도보 5분. 닥터스피부과 네트워크 대구점.'
  },
  {
    id: 'celody-anyang',
    name: '셀로디피부과의원 안양점',
    shortName: '셀로디피부과 안양점',
    address: '경기도 안양시 동안구 비산로 18 평촌자이아이파크 1Gate 근린상가 1동 304호',
    phone: '031-465-5575',
    lat: 37.4002,
    lng: 126.9406,
    website: 'https://cellodyskin.com',
    hours: {},
    treatments: [],
    doctorIds: ['ryu-taehyung', 'jeong-jaeyeong'],
    description: '안양 동안구 셀로디피부과 안양점.'
  },
  {
    id: 'kye',
    name: '계피부과의원',
    shortName: '계피부과',
    address: '서울특별시 영등포구 영중로 68 (영등포동5가)',
    phone: '02-2634-0108',
    lat: 37.5181,
    lng: 126.9038,
    website: 'http://www.kye.net',
    hours: {},
    treatments: [],
    doctorIds: ['kye-heesang', 'kye-youngchul'],
    description: '영등포시장역 5번 출구 앞. 1961년 개원, 3대 피부과 전문의 가족 진료.'
  },
  {
    id: 'academy-human',
    name: '아카데미휴먼피부과의원',
    shortName: '아카데미휴먼피부과',
    address: '부산광역시 금정구 구서로 10 우지메디컬 4층',
    phone: '0507-1417-7577',
    lat: 35.2542,
    lng: 129.0917,
    website: 'http://academydermatology.co.kr',
    hours: {},
    treatments: [],
    doctorIds: ['seo-jongkeun'],
    description: '부산 구서역 1번 출구 도보 2분. 구서동 지역 피부과 전문의 진료.'
  },
  {
    id: 'park-seonghyeon',
    name: '박성현피부과의원',
    shortName: '박성현피부과',
    address: '전라북도 김제시 검산택지길 62 2층 (검산동)',
    phone: '063-545-6767',
    lat: 35.8013,
    lng: 126.8806,
    website: 'http://www.psh-skin.com',
    hours: {},
    treatments: [],
    doctorIds: ['park-seonghyeon'],
    description: '김제 지역 피부과 전문의 진료.'
  },
  {
    id: 'naeum',
    name: '나음피부과의원',
    shortName: '나음피부과',
    address: '서울특별시 중구 세종대로 11 (남대문로5가, 조광빌딩 5·6층)',
    phone: '02-6959-7533',
    lat: 37.5562,
    lng: 126.9722,
    website: 'http://www.naeumskin.com',
    hours: {},
    treatments: [],
    doctorIds: ['goo-bonceol', 'jeon-sooyoung'],
    description: '서울역 3번 출구 70m. 흉터·외상·화상·자해흔 등 피부외과적 수술 전문.'
  },
  {
    id: 'galleria-gaepo',
    name: '갤러리아피부과의원 개포도곡점',
    shortName: '갤러리아피부과 개포도곡점',
    address: '서울특별시 강남구 개포동 167-9 마커스나인빌딩 3층',
    phone: '02-573-9839',
    lat: 37.4847,
    lng: 127.0577,
    website: 'http://www.galleriaskin3.com',
    hours: {
      '평일 (월~금)': '10:00 - 20:00',
      '토요일': '10:00 - 16:00'
    },
    treatments: [],
    doctorIds: ['lee-solam', 'seo-jimyung', 'jeong-giyang', 'lee-minseok', 'kim-jeeeun', 'hong-wonjin', 'chung-kyunbae', 'on-hyerang'],
    description: '개포·도곡 지역 갤러리아피부과 네트워크 분점.'
  },
  {
    id: 'siheung-human',
    name: '시흥휴먼피부과의원',
    shortName: '시흥휴먼피부과',
    address: '경기도 시흥시 비둘기공원 6길 4 성원상떼빌 더센트럴 4층',
    phone: '031-315-5501',
    lat: 37.3795,
    lng: 126.7889,
    website: 'https://siheunghuman.com',
    hours: {
      '평일 (월~금)': '10:00 - 19:00',
      '토요일': '09:30 - 15:30',
      '점심시간': '13:00 - 14:00',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['ahn-insu', 'kim-taeeun'],
    description: '시흥 지역 휴먼피부과 네트워크 분점.'
  },
  {
    id: 'healhouse-konkuk',
    name: '힐하우스피부과의원 건대점',
    shortName: '힐하우스피부과 건대점',
    address: '서울 광진구 능동로 90 더클래식500 B동 2층',
    phone: '02-444-7585',
    lat: 37.541,
    lng: 127.0784,
    website: 'https://healhousegd.com',
    hours: {
      '월·금': '10:00 - 20:00 (야간)',
      '화·목': '10:00 - 19:00',
      '토요일': '10:00 - 15:00',
      '일요일·공휴일': '휴무'
    },
    treatments: [],
    doctorIds: ['rhee-doyoung', 'kang-hyunjin', 'kim-yulhee'],
    description: '건대입구역 도보. 힐하우스피부과 네트워크 건대점.'
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
      { type: 'website', label: '병원 홈페이지', url: 'http://www.psh-skin.com' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/psh_skin67' }
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
    treatments: ['항노화', '리프팅', '탄력', '울쎄라', '소프웨이브', '피부결', '모공', '필러', '쥬베룩', '레디어스', '고압산소', '줄기세포', 'MCT', 'PRP', '쁘띠성형', '리제네라'],
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
      { type: 'website', label: '병원 홈페이지', url: 'http://www.humanpt.co.kr/main/' },
      { type: 'instagram', label: '병원 인스타그램(pt_human)', url: 'https://www.instagram.com/pt_human' },
      { type: 'youtube', label: '병원 유튜브', url: 'https://www.youtube.com/@HUMAN_PT' },
      { type: 'linktree', label: '링크트리', url: 'https://litt.ly/pt_human' }
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
    treatments: ['리프팅', '탄력', '울쎄라', '써마지', '필러', '스킨부스터', '스컬트라', '쥬베룩볼륨', '리투오', '바디온다', '기미/색소', '흉터'],
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
    treatments: ['리프팅', '탄력', '울쎄라', '써마지', '온다', '필러', '쥬베룩', '스컬트라', '쥬브아셀', '흉터', '여드름', '민감성피부']
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
    treatments: ['리프팅', '탄력', '울쎄라', '써마지', '온다', '필러', '스컬트라', '쥬베룩볼륨', '리투오', '쥬브아셀', '스킨부스터', '기미/색소', '흉터']
  },
  {
    id: 'lee-sangju',
    name: '이상주',
    photo: '회원 프로필 사진/이상주.jpg',
    hospitalId: 'yonsei-star',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 회장', '14기 부회장+교육위원장+보험위원+재무위원', '13기 부회장+재무위원+정보위원', '11기 총무이사+윤리위원+재무위원', '10기 대외협력이사+보험위원+학술위원/1인시위', '9기 학술이사+보험위', '8기 기획정책이사+기획위+보험위+미용치료연구회+홍보위', '7기 보험이사+홍보위+학술위+기자재 및 화장품평가위', '6기 학술간사+교육위+보험위+기자재 및 화장품평가위원회소위원회(NAR)', '5기 보험간사+교육위+기자재 및 화장품평가위원회소위원회(NAR)'],
    career: ['연세대학교 의과대학 졸업', '연세대학교 의과대학 대학원 졸업(의학박사)', '세브란스병원 피부과 전공의', '현)연세의대 피부과학교실 외래교수', '현)대한피부과의사회 회장', '전)영동 세브란스병원 피부과 교수', '전)국립 경찰병원 피부과 과장', '전)뉴트로지나 자문의사', '전)아모레퍼시픽 아이오페 자문의사', '-저서', 'Pigmentary system 외국의학', '메디칼 바디케어(여문각)', '여드름 바이블(진솔)', '메디칼 스킨케어(여문각)', 'Skin Barrier(한국피부장벽학회)', '골드PTT를 이용한 미용치료(정우의학서적)', '메디칼 네일케어(정우의학서적)'],
    memberships: ['대한피부과의사회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '여드름 I: 여드름의 과거, 현재 그리고 미래' },
      { year: '2022', event: '25회 추계', title: '이슈포커스: 흉터 치료 마스터로부터 듣는다' },
      { year: '2024', event: '26회 춘계', title: 'Surgical Pearls: 동영상으로 배우는 Tips & Pearls' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'kang-jinmoon',
    name: '강진문',
    photo: '회원 프로필 사진/강진문.jpg',
    hospitalId: 'yonsei-star',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '세브란스병원 피부과 전공의', '현)연세의대 피부과학교실 외래교수', '전)분당 차병원 교수', '-저서', '디칼 바디케어(여문각)'],
    memberships: ['대한피부과학회 회원', '대한의학레이저학회 회원', '대한피부과의사회 회원', '대한피부미용외과학회 회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'jung-jeanne',
    name: '정지인',
    photo: '회원 프로필 사진/정지인.jpg',
    hospitalId: 'yonsei-star',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '연세대학교 의과대학 대학원 졸업(피부과학 석사)', '세브란스병원 피부과 전공의', '전)킴스 피부과 원장', '전)아름다운나라 피부과 원장', '전)더 삼점영 피부과 원장', '전)후즈후 피부과 원장', '전)강한 피부과 원장'],
    memberships: ['대한피부과학회 회원', '대한피부과의사회 회원', '대한의학레이저학회 회원', '미용피부외과학회 회원', '대한여드름학회 회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'lim-jaeyun',
    name: '임재윤',
    photo: '회원 프로필 사진/임재윤.jpg',
    hospitalId: 'yonsei-star',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['삼성의료원 강북삼성병원 피부과 전공의', '전) 타임리스피부과 마포본점 원장', '전) 오가나셀피부과 잠실점 원장'],
    memberships: ['대한피부과학회 회원', '대한피부과의사회 회원', '대한피부레이저학회 회원', '대한피부미용외과학회 회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'park-byoungjin',
    name: '박병진',
    photo: '회원 프로필 사진/박병진.jpg',
    hospitalId: 'yonsei-star',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['한양대학교 의과대학 우등 졸업', '한양대학교 대학원 의학과 석사 피부과학 전공', '서울 한양대병원 피부과 레지던트 수료', '전) 삼척의료원 피부과장', '전) 일산 오킴스피부과 원장', '전) 신사 오수진피부과 원장', '전) 압구정 웰스피부과 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화연구회 정회원', '대한여드름학회 정회원', '대한아토피피부염학회 정회원', '대한레이저학회 정회원', '대한임상피부치료연구회 정회원', '대한코스메틱피부과학회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'yoon-hongseok',
    name: '윤홍석',
    photo: '회원 프로필 사진/윤홍석.jpg',
    hospitalId: 'human-bundang',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 부회장+재무위원장+교육위원', '14기 부회장+재무위원장+보험위원+교육위원', '13기 총무이사', '11기 교육이사+보험위원', '10기 보험이사/1인시위', '9기 보험이사', '8기 보험이사+보험위', '7기 보험간사', '6기 기자재및화장품평가위소위원회(화장품)', '5기 기자재및화장품평가위소위원회(화장품)'],
    career: ['고려대학교 의과대학', '고려대학교 의과대학원', '고려대학교 의료원 피부과전공의', '대한피부과의사회 부회장', '대한피부과학회 정회원', '대한피부과학회 보험위원회 위원', '대한피부과학회 신의료기술위원회 위원', '대한피부과의사회 교육이사', '상해 구베이 한경미용병원 피부과자문의', '(18~21)', '전) 한센복지협회 청주지부 원장', '전) 서울코스메디 피부과 공동원장', '전) 윤피부과 대표원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'lee-haewoong',
    name: '이해웅',
    photo: '회원 프로필 사진/이해웅.jpg',
    hospitalId: 'louis',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 부회장+기획정책위원장+의무윤리위원+교육위원+재무위원', '14기 총무이사', '13기 재무이사+의무윤리위원+학술위원', '12기 의무윤리이사', '11기 기획정책이사+학술위원', '10기 기획정책간사+학술위원', '8기 교육위'],
    career: ['서울아산병원 피부과 전문의', '울산의대 서울아산병원 피부과 의학박사', '서울아산병원 피부과 외래 교수', '서울아산병원 피부과 동문회장', '서울아산병원 피부과 최우수 전공의 (2006)', '서울아산병원 최우수 학술 전공의 (2005)', '울산의대 서울아산병원 피부과 외래 교수', '전) 건국대학교 의학전문대학원 피부과 외래 교수', '전) 국군광주병원/ 국군함평병원 피부과장', '전) 분당 고운세상 피부과 원장', '대한피부과의사회 학술대회 Best Lecture (2016, 2019, 2023)', '부산울산경남 피부과의사회 학술대회 Best Lecture (2023)', '영국 Cambridge 국제인명센터 2000 Outstanding Intellectuals ot the 21st century (2007)', '미국 인명정보기관 The International Directory of Experts and Expertise (2007)', '미국 인명정보기관 Man of the Year (2007, 2010)', 'The Marquis Who\'s Who in the World (2019-2020)', '국제 피부과학 SCI 논분 35편, 국내 피부과학회지 20여 편 저술', '피부외과학 3판 (2023) 공저자 대한피부과학회 회원', '대한피부과의사회 기획정책이사 (2018-2019)', '대한피부과의사회 의무이사 (2020-2021)', '대한피부과의사회 제무이사 (2022-2023)', '대한피부과의사회 총무이사 (2024-2025)', '대한피부과의사회 부회장 (2026-2027)', '대한여드름주사학회 학술이사 (2021-2022)', '대한피부레이저학회 교육이사'],
    memberships: ['대한피부과의사회 정회원', '대한여드름주사학회 정회원', '대한피부레이저학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '여드름 I: 여드름의 과거, 현재 그리고 미래' },
      { year: '2022', event: '25회 추계', title: '색소 I: 다시보는 레이저토닝 - From the Beginning and Now' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Melasma' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '베스트렉쳐 리바이벌' },
      { year: '2023', event: '26회 추계', title: 'The Red: 여드름과 주사, 새로운 길을 찾아서' },
      { year: '2024', event: '26회 춘계', title: '피블리의 블랙박스: 피부과 전문의의 차별점은 부작용의 예방과 해결' },
      { year: '2025', event: '27회 춘계', title: '피부과 전문의 차별화! 까다로운 색소질환 치료하기' },
      { year: '2025', event: 'KOREADERMA2025(28회추계)', title: '[Panel Discussion] 까다로운 색소에 맞서는 우리의 자세' },
      { year: '2026', event: '28회 춘계', title: '더마에스트로(DerMaestro): 나의 시술은 이렇게 다시 쓰였다' }
    ],
    awards: ['2023 베스트오브베스트렉처상', '2023 베스트기획자상'],
    treatments: ['색소레이저', '여드름 주사', '혈관 레이저', '흉터레이저', '벨루티', '백반증', '건선', '아토피 광선치료', '사마귀', '티눈', '화상', '찰과상'],
    links: []
  },
  {
    id: 'kang-seunghee',
    name: '강승희',
    photo: '회원 프로필 사진/강승희.jpg',
    hospitalId: 'leaders-apgujeong',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 부회장+교육위원장+의무윤리위원+재무위원', '14기 부회장+재무위원'],
    career: ['서울대학교 의과대학 졸업', '서울아산병원 피부과 (전문의 취득)', '피부과 전문의 시험 전국 수석 합격', '서울아산병원 피부과 외래교수', '대한 피부과의사회 부회장', '대한 피부과의사회 교육위원장', '대한 피부항노화학회 부회장', '대한 피부항노화학회 간행위원장'],
    memberships: ['대한피부과의사회 정회원', '대한피부항노화학회 정회원'],
    lectures: [
      { year: '2023', event: '26회 추계', title: '피부치료 역량강화II: 피부력 넥스트 레벨' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'youn-seongjae',
    name: '윤성재',
    photo: '회원 프로필 사진/윤성재.jpg',
    hospitalId: 'leaders-apgujeong',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['11기 간행간사', '9기 교육위'],
    career: ['서울대학교 의과대학 졸업', '삼성서울병원 피부과 (전문의 취득)', '삼성서울병원 피부과 외래교수', '대한 피부항노화학회 부회장', '대한 피부항노화학회 학술위원장', '대한 피부외과학회 홍보이사'],
    memberships: ['대한피부과의사회 정회원', '대한피부항노화학회 정회원', '대한피부외과학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '항노화 II: 레벨 업! My Injection Skills' },
      { year: '2022', event: '24회 춘계', title: 'Latest trends in EBD II: 다양한 타겟, 다양한 테크놀로지로 진화하는 탄력, 리프팅 EBDs' },
      { year: '2022', event: '25회 추계', title: 'Well-aging, 품격있는 노화를 위한 첫걸음 : EBD II' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Body Contouring' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Beyond the Horizon: 기존의 한계를 넘어선 보다 효과적인 항노화 치료' },
      { year: '2024', event: '26회 춘계', title: '피블리의 블랙박스: 피부과 전문의의 차별점은 부작용의 예방과 해결' },
      { year: '2024', event: 'KOREADERMA2024(27회추계)', title: '탄력: 탱탱한 피부를 위한 3W1H' },
      { year: '2025', event: '27회 춘계', title: '[패널 디스커션] 노화, 어떻게 치료할 것인가' },
      { year: '2025', event: '27회 춘계', title: 'Luncheon 01 멀츠 / 원텍 /라로슈포제' },
      { year: '2025', event: 'KOREADERMA2025(28회추계)', title: '베스트렉처 리바이벌' },
      { year: '2026', event: '28회 춘계', title: '트렌드 더마 2026: Read the Trend, Lead the Trend' }
    ],
    awards: ['2025 베스트렉쳐상'],
    treatments: [],
    links: []
  },
  {
    id: 'choi-sooyoung',
    name: '최수영',
    photo: '회원 프로필 사진/최수영.jpg',
    hospitalId: 'bethel',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 부회장+법제위원장+재무위원', '14기 부울경지부회 회장', '13기 교육위원+학술위원+부울경지부회 차석부회장', '12기 부울경지부회 교육이사+교육위원', '11기 기획정책위원'],
    career: ['현) 벧엘피부과 원장', '고신대학교 의과대학원 피부과학 의학박사', '고신대학교 피부과 외래교수', '전) 2011 ~ 2016 고운세상 김양제 피부과 원장', '전) 2013 ~ 2021 대한피부과 의사회 부산울산경남 의사회 학술, 기획정책, 재무, 교육이사', '전) 2022.1 ~ 2023.12 대한피부과 의사회 부산울산경남 의사회 부회장', '전) 2024.1 ~ 2025.12 대한피부과 의사회 부산울산경남 의사회 회장', '전) 2017.11 ~ 2019.11 대한피부과 의사회 기획정책위원', '전) 2022.1 ~ 2023.12 대한피부과 의사회 학술, 교육위원', '현) 2026.1 ~ 2027.12 대한피부과 의사회 부회장', '2008~2010 MBC 라디오 건강세상 피부과 상담의', '2012~2014 KBS 라디오 정보센터 피부과 상담의', '2018.5~ 피부사랑 나눔회', '2018.7~ 의학채널 비온뒤 피부과 자문의(멘토)'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부레이저학회 정회원', '미국피부레이저학회(ASLMS) 정회원', '한국피부장벽학회 정회원', '손발톱연구회 정회원', '대한미용피부외과학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '색소 I: 까다로운 색소 쉽고 안전하게 치료하기' },
      { year: '2022', event: '24회 춘계', title: '이슈 포커스: 놓치지 말아야할 블루오션, 진단초음파' },
      { year: '2022', event: '25회 추계', title: '색소 II: 표피 색소 치료 길을 찾다 Navigating the treatment of epidermal pigment lesions' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'EBD: Pigment' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '피부치료 역량강화II: 우리 병원을 한층 업그레이드 할 수 있는 플러스 알파 시술법' },
      { year: '2023', event: '26회 추계', title: '이슈포커스: Unveiling Biostimulators' },
      { year: '2024', event: '26회 춘계', title: '색소 명의되는 MBTI' },
      { year: '2024', event: 'KOREADERMA2024(27회추계)', title: '탄력: 탱탱한 피부를 위한 3W1H' },
      { year: '2025', event: '27회 춘계', title: '베스트렉처 리바이벌' }
    ],
    awards: ['2025 베스트렉처상', '2023 우수기획자상'],
    treatments: ['여드름흉터', '쿠션흉터', '홍조/주사', '울트라펄스 알파', '스컬트라', '고우리', '힐로웨이브', '약물전달치료', '큐어젯', '스킨젯', '트리필 프로', '더블타이트', '이미지가이드 필러', '이미지가이드 보톡스'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'http://busan.bethelskin.com/' },
      { type: 'youtube', label: '병원 유튜브', url: 'https://www.youtube.com/@bethelskin/' }
    ]
  },
  {
    id: 'kim-dohyun',
    name: '김도현',
    photo: '회원 프로필 사진/김도현.jpg',
    hospitalId: 'mijiye',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 광주전남지부회 고문+감사', '14기 광주전남지부회 고문', '13기 광주전남지부회 회장', '12기 광주전남지부회 부회장'],
    career: ['전남대학교 의과대학 졸업', '전남대학교 대학원 의학박사 수료', '전남대학교 병원 피부과 전문의', '국군광주병원 피부과장', '천주의 성요한병원 피부과장'],
    memberships: ['대한여드름학회 회원', '대한레이저학회 회원', '대한미용피부외과 학회 회원', '대한피부과학회 회원', '대한피부과개원의협의회 회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'jung-jinwook',
    name: '정진욱',
    photo: '회원 프로필 사진/정진욱.jpg',
    hospitalId: 'mijiye',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 광주전남지부회 고문', '14기 대외협력위원', '13기 부회장+재무위원+광주전남지부회 고문', '11기 기획정책위원장+24+광주전남지부회장', '10기 광주전남지부회장', '9기 교육이사'],
    career: ['헤어플란트 모발 이식센터 원장', '2000년-2004년 광주 보건대학 외래교수 역임', '1997년 미국 제퍼슨 의과 대학병원(Jefferson Medical', 'College Hospital) 레이저미용센터 연구원 역임', '2000년-2004년 미지예 피부과 모발이식센터 원장 역임', '1997년 전남대학교병원 피부과 전문의', '미국 샌디에고 캘리포니아대학 피부외과 워크샵 연수', '미국 샌디에고 캘리포니아대학 레이저 워크샵 연구', '대한 피부과학회 회원', '국제 피부외과학회 회원', '국제 모발이식학회 회원', '미국 워싱턴 국제 피부연구학회(SID) 논문발표'],
    memberships: ['대한 피부과학회 회원', '국제 피부외과학회 회원', '국제 모발이식학회 회원'],
    lectures: [
      { year: '2022', event: '25회 추계', title: '함께하면 더 좋은 깐부치료' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'joo-hyunjoong',
    name: '주현중',
    photo: '회원 프로필 사진/주현중.jpg',
    hospitalId: 'hayan-j',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 감사', '14기 기획정책위원', '13기 기획정책이사+보험위원+홍보위원', '11기 보험이사+홍보위원', '10기 홍보간사', '9기 홍보위', '8기 홍보간사(홍보위)'],
    career: [],
    memberships: [],
    lectures: [
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '기미치료 사칙연산÷×+- : 베스트 솔루션 찾기!' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'kim-jihyun',
    name: '김지현',
    photo: '회원 프로필 사진/김지현.jpg',
    hospitalId: 'ten',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 총무이사', '14기 재무이사', '13기 정보이사+간행위원+교육위원', '12기 간행이사+의무윤리위원', '11기 교육위원+의무간사', '10기 1인시위'],
    career: ['서울과학고등학교 졸업', '서울대학교 전기공학부 최우등 졸업', '연세대학교 의과대학 최우등 졸업', '연세대학교 의과대학원 졸업 (피부과학 전공)', '연세대학교 신촌 세브란스 병원 피부과 전문의', '미국 M.D. Anderson Cancer Center 단기 연수', '미국 Skin Care Physicians 피부외과 단기연수', '피그랜드 성형외과 피부과 대표원장'],
    memberships: ['대한피부과의사회 정회원'],
    lectures: [
      { year: '2022', event: '25회 추계', title: '스페셜T: Vascular Response' },
      { year: '2024', event: '26회 춘계', title: '모공은 좁히고 흉터는 채워서 깐달걀 피부 만들기' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'cho-sooick',
    name: '조수익',
    photo: '회원 프로필 사진/조수익.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 기획정책이사', '14기 간행이사', '13기 법제간사+학술위원', '12기 법제간사'],
    career: ['서울대학교 의과대학 학사', '가톨릭대학교 의과대학 박사', '서울대병원 피부과 진료교수', '전) 오킴스피부과 원장', '전) 미소가인피부과 삼성점 원장', '전) 루닛 Medical Director', '현) 더힐피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 기획정책이사', '대한피부항노화학회 간행이사', '대한임상피부치료연구회 이사', '대한피부연구학회 정회원', '대한의료인공지능학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '여드름 I: 여드름의 과거, 현재 그리고 미래' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'AI and Future Aesthetic Medicine' }
    ],
    awards: ['2024 베스트기획자상'],
    treatments: ['AI 진단', '울쎄라', '써마지', '리쥬란', '리투오'],
    links: [
      { type: 'facebook', label: '페이스북', url: 'https://www.facebook.com/chlroe' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/nicederma/' },
      { type: 'threads', label: '쓰레드', url: 'https://www.threads.com/@nicederma' }
    ]
  },
  {
    id: 'lee-haejin',
    name: '이해진',
    photo: '회원 프로필 사진/이해진.jpg',
    hospitalId: 'yonsei-ab',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 기획정책이사', '14기 보험간사+간행위원', '13기 보험위원'],
    career: ['연세대학교 의학과, 대학원 전공의 수료', '원주세브란스병원 피부과 전공의 수료', '육군교육사령부 상무대 근무지원단 의무실장, 피부과장', '연세대학교 의과대학 피부과학교실 교수직', '연세대학교 원주의과대학 피부과학교실 교수직', '전) 강한피부과 서초점 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한모발학회 정회원', '대한탈모치료학회 정회원', '한국피부장벽학회 대한피부연구학회 정회원', '대한피부항노화연구회 정회원', '여드름연구학회 정회원', '대한의학레이저학회 정회원', '대한케미컬필링연구회 정회원', '대한아토피피부염학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '피부치료 역량강화 I: 한 번 들으면 두고두고 써먹는 필수 최신지견' },
      { year: '2022', event: '24회 춘계', title: '피부유형에 따른 올바른 화장품 고르기' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '일타강사 시즌3: 나만의 자신있는 노하우 공개' }
    ],
    awards: [],
    treatments: ['홍조/주사', '남성형탈모시술', '실리프팅', '기미/색소', '울쎄라', '써마지', '세르프', 'PRP', '남성특수부위토닝', '흉터시술', '여드름', '줄기세포', '필러', '쥬베룩', '리투오', '옴', '아토피피부염', '한포진', '원형탈모', '피부장벽치료'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://www.anbskin.com' },
      { type: 'youtube', label: '이해진의 황금피부', url: 'https://youtube.com/@goldskins' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/haejin.skindoc' }
    ]
  },
  {
    id: 'lee-seunghun',
    name: '이승헌',
    photo: '회원 프로필 사진/이승헌.jpg',
    hospitalId: 'yonsei-ab',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의학과, 대학원 전공의 수료', '세브란스병원 피부과 전공의 수료', '연세대학교 의과대학 피부과학교실 주임교수', '연세대학교 의과대학 강남세브란스병원 부원장', '연세대학교 의과대학 피부생물학연구소 소장', '연세대학교 원주의학대학 피부과학교실 주임교수, 과장', '연세대학교 의과대학 강남세브란스병원 피부과 과장', '연세대학교 의과대학 피부과학교실 전임강사, 교수, 명예교수'],
    memberships: ['아시아 태평양 피부장벽학회 회장', '대한코스메틱피부과학회 회장', '한국피부장벽학회 회장, 명예회장', '대한피부과학회 부회장', '대한피부과학회 학술이사, 수련고시이사, 교육이사', '대한여드름학회 평의원'],
    lectures: [],
    awards: [],
    treatments: ['아토피피부염', '두드러기', '건선'],
    links: []
  },
  {
    id: 'yoon-soyoung',
    name: '윤소영',
    photo: '회원 프로필 사진/윤소영.jpg',
    hospitalId: 'yonsei-ab',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 기획정책위원'],
    career: ['서울대학교 의학과 수석졸업', '서울대학교 피부과 전공의 수료, 전문의 취득', '클린업피부과 노원점 원장', '리뉴미피부과 분당점 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['울쎄라', '써마지', '세르프', '슈링크', '인모드', '브이로', '여성특수부위토닝', '기미/색소', '필러', '여드름', '제모', '조직검사', '한포진', '피부질환'],
    links: []
  },
  {
    id: 'ha-jeongmin',
    name: '하정민',
    photo: '회원 프로필 사진/하정민.jpg',
    hospitalId: 'eoullim',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 보험이사+대전세종충청지부회 총무이사+정보위원', '14기 대전세종충청지부회 학술이사+교육위원', '13기 대전세종충청지부회 총무이사', '12기 보험위원'],
    career: ['충남대학교 의과대학 의학사', '충남대학교 의과대학원 피부과 석사', '충남대학교병원 피부과 전공의 수료', '전) 더웰피부과 유성점 부원장', '전) 대한피부과의사회 교육위원', '전) 대한피부과의사회 대세충청지부 학술이사', '현) 대한피부과의사회 대세충청지부 총무이사', '현) 대한피부과의사회 보험이사'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한아토피피부염학회 정회원', '한국피부장벽학회 정회원', '대한백반증색소학회 정회원', '대한항노화학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['피부장벽', '민감성피부', '주사피부염', '아토피', '건선', '덴서티', '스킨부스터', '필러', '보톡스'],
    links: []
  },
  {
    id: 'kwon-wonjoo',
    name: '권원주',
    photo: '회원 프로필 사진/권원주.jpg',
    hospitalId: 'celody-gangseo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 보험이사+학술위원', '14기 홍보간사+학술위원', '13기 홍보위원'],
    career: ['전) 더힐피부과의원 동대문점 원장', '전) 우태하한승경 피부과 과장', '전) 국군포천병원 피부과 과장', '현) 대한피부과의사회 제 15기 학술위원회 위원', '현) 대한피부과의사회 제 15기 보험위원회 이사', '전) 대한피부과의사회 제 14기 홍보위원회 위원', '전) 대한피부과의사회 제 14기 학술위원회 위원', '전) 대한피부항 노화학회 간행간사', '현) 대한피부항노화학회 학술간사', '전) 대한피부과의사회 제 13기 홍보위원회 위원'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화학회 정회원', '대한임상피부치료연구회 정회원', '대한피부레이저학회 정회원', '대한아토피피부염학회 정회원', '대한백반증색소학회 정회원'],
    lectures: [
      { year: '2024', event: 'KOREADERMA2024(27회추계)', title: 'Video Hot Secret (VHS)' },
      { year: '2025', event: '27회 춘계', title: '일타강사 : 내일 당장 시작하는 필러와 톡신' }
    ],
    awards: ['2026 우수기획자상', '2024 베스트기획자상'],
    treatments: ['리프팅', '탄력', '울쎄라', '써마지', '온다', '기미/색소', '검버섯', '백반증', '엑시머레이저', '광선치료', '여드름', '흉터', '모공', '포텐자', '필러', '보톡스', '스킨부스터', '쥬베룩볼륨', '리쥬란', '보험질환'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://ks.cellodyskin.com/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/cellodyskin_ks' },
      { type: 'blog', label: '병원 네이버 블로그', url: 'https://blog.naver.com/cellodyskin_ks' },
      { type: 'youtube', label: '셀로디 병원 유튜브', url: 'https://www.youtube.com/@Melodyskin' }
    ]
  },
  {
    id: 'lee-hojung',
    name: '이호정',
    photo: '회원 프로필 사진/이호정.jpg',
    hospitalId: 'celody-gangseo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['6기 재무간사', '4기 홍보위'],
    career: ['연세대학교 의과대학 졸업 및 동 대학원 졸업', '연세의료원 세브란스 병원 인턴', '연세의료원 세브란스 병원 피부과 전공의 수료', '연세대학교 의과대학 피부과 외래교수', '중문의과대학 분당차병원 피부과 외래교수', '강남우태하 피부과 진료원', '삼성동 마이피부과 대표원장', '미국 Thomas Jefferson 의과대학 병원 피부과', '레이저 센터 및 피부외과 연수', '미국 피부과학회(AAD) 레이저 & 필링 포럼 연수', '프랑스 세계피부과학회 레이저 광회춘술 포럼연수', '이태리 유럽피부과학회 노화방지 포럼연수', '로레알 라로슈포제 화장품 아카데미 연수'],
    memberships: ['대한피부과학회', '대한의학레이저학회', '대한천식 및 알레르기학회', '대한코스메틱의학회', '대한향기(아로마)의학회', '미국피부과학회(AAD)', '대한비만학회', '대한보톡스학회', '대한지방성형 이식학회', '대한메조테라피학회'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'jung-joonwoo',
    name: '정준우',
    photo: '회원 프로필 사진/정준우.jpg',
    hospitalId: 'celody-gangseo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: [],
    memberships: ['대한피부과학회 회원', '대한피부과의사회 회원', '대한피부항노화학회 회원', '대한피부레이저학회 회원', '대한여드름주사학회 회원', '대한모발학회 회원', '대한아토피피부염학회 회원', '대한임상피부치료연구회 회원'],
    lectures: [],
    awards: [],
    treatments: ['울쎄라', '써마지', '슈링크', '여드름', '홍조/주사', '기미/색소', '검버섯', '제모', '냉동치료', '흉터', '모공', '포텐자', '탈모', '조직검사', '필러', '스킨부스터', '리쥬란', '핀포인트레이저', '켈로이드'],
    links: []
  },
  {
    id: 'eun-donghyuk',
    name: '은동혁',
    photo: '회원 프로필 사진/은동혁.jpg',
    hospitalId: 'doctors-daegu',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 의무윤리이사+대경지부회 학술이사', '14기 기획정책위원+대경지부회 홍보이사(25년)'],
    career: ['연세대학교 이학사 수석졸업', '경북대학교 의학전문대학원 의무석사 최우등졸업', '경북대학교병원 피부과 레지던트 수료', '경북대학교병원 피부과 임상교수', '대한피부과의사회 의무의사', '대구경북피부과의사회 학술이사', '더케이피부과학연구소 자문 전문의', '전) 닥터스피부과 신사본점'],
    memberships: ['대한피부과학회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 정회원', '대한피부레이저학회 정회원', '대한여드름주사학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['리프팅', '탄력', '써마지', '울쎄라', '덴서티', '소프웨이브', '온다', '필러', '스컬트라', '힐로웨이브', '리투오', '스킨부스터', '기미/색소'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://daegu.doctors365.co.kr/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/doctors_daegu/' },
      { type: 'youtube', label: '병원 유튜브', url: 'https://www.youtube.com/@피부라운지' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/fooxfox_ed/' }
    ]
  },
  {
    id: 'sohng-chihyeon',
    name: '송치현',
    photo: '회원 프로필 사진/송치현.jpg',
    hospitalId: 'doctors-daegu',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['경북대학교 의학전문대학원 의무석사', '경북대학교병원 피부과 레지던트 수료', '전) 경북대학교병원 피부과 임상교수', '전) 대구 황금피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 정회원', '대한피부레이저학회 정회원', '대한미용피부외과학회 정회원', '대한여드름주사학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['리프팅', '탄력', '써마지', '울쎄라', '덴서티', '소프웨이브', '온다', '필러', '스컬트라', '힐로웨이브', '리투오', '스킨부스터', '기미/색소'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://daegu.doctors365.co.kr/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/doctors_daegu/' },
      { type: 'youtube', label: '병원 유튜브', url: 'https://www.youtube.com/@피부라운지' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/dr.ch_ssong/' }
    ]
  },
  {
    id: 'ryu-taehyung',
    name: '유태형',
    photo: '회원 프로필 사진/유태형.jpg',
    hospitalId: 'celody-anyang',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 의무윤리이사', '14기 의무윤리간사', '13기 의무윤리간사'],
    career: ['고려대학교 의과대학 피부과학 박사 수료', '고려대학교 의료원 인턴 및 피부과 레지던트 수료', '고려대학교 의료원 피부과 외래교수', '현) 대한피부과의사회 의무이사', '현) 대웅제약사 공식지정 미용전문 자문의', '전) 국군포천병원 피부과 과장', '전) 리뉴 미피부과 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한여드름학회 정회원', '대한피부레이저학회 정회원', '대한피부항노화학회 정회원', '대한미용피부외과학회 정회원', '대한아토피피부염학회 정회원', '대한백반증색소학회 정회원', '대한건선학회 정회원', '대한피부과의사회', '색소/항노화/여드름 마스터 인증'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'jeong-jaeyeong',
    name: '정재영',
    photo: '회원 프로필 사진/정재영.jpg',
    hospitalId: 'celody-anyang',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['대한피부과학회 정회원', '고려대학교 의과대학 졸업', '고려대학교 의과대학 피부과학 석사', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '고려대학교 의료원 인턴 및 피부과 레지던트 수료 대한피부레이저학회 정회원', '전) 서울지방병무청 피부과장', '대한피부항노화학회 정회원', '대한여드름주사학회 정회원', '대한백반증색소학회 정회원', '대한아토피피부염학회 정회원'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 정회원', '대한여드름주사학회 정회원', '대한백반증색소학회 정회원', '대한아토피피부염학회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'kye-heesang',
    name: '계희상',
    photo: '회원 프로필 사진/계희상.jpg',
    hospitalId: 'kye',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 법제이사+의무윤리위원', '14기 의무윤리이사', '13기 의무윤리이사'],
    career: ['현) 고려대학교 의과대학 피부과 외래교수', '고려대학교 의과대학 졸업 및 피부과 전공의 수료', '고려대학교 안암병원 외래 교수', '대한피부과의사회 상임이사', '대한피부과학회 의무위원회 위원', '전) 타임리스, 오가나 피부과 원장'],
    memberships: ['대한피부과학회 회원', '대한피부과의사회 회원', '대한여드름학회 회원', '대한피부항노화연구원 회원', '대한피부레이저학화 회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'kye-youngchul',
    name: '계영철',
    photo: '회원 프로필 사진/계영철.jpg',
    hospitalId: 'kye',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['고려대학교 의과대학 졸업 및 피부과 전공의 수료', '고려대학교 안암병원 피부과 교수 및 과장 (1988-2020)', '대한피부과학회 이사장 (2011-2013)', '대한미용피부학회 회장 및 현재 고문', '대한피부레이저학회 회장 및 현재 명예회장 대한여드름주사학회 현 자문위원', '10대 피부과 명의 선정 (동아일보 2003)', 'KBS 생로병사의 비밀, TV조선 새로운 발견 유레카, SBS 뉴스 등 다수 출연 (2014-2021)', '레이저의 임상적이용, 레이저 박피술 저술 및 국내 도입 (1997-1998)', '-저서', '대한피부과학학회 피부과학 교과서 공동저자', '레이저의 임상적이용 (1997년)', '레이저 박피술 (1998년)'],
    memberships: ['대한피부과학회 이사장 대한미용피부외과학회 이사장 대한미용피부외과학회 회장 대한피부레이저학회 회장 대한피부과학회 총무이사', '22차 세계피부과학회 재정위원장 대한미용피부외과학회 고문 대한피부레이저학회 명예회장'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'seo-jongkeun',
    name: '서종근',
    photo: '회원 프로필 사진/서종근.jpg',
    hospitalId: 'academy-human',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 정보이사+부울경지부회 회장', '14기 정보이사+학술위원+부울경지부회 부회장', '13기 정보이사+학술위원+홍보위원+부울경지부회 학술이사', '12기 부울경지부회 간행이사', '11기 학술위원', '10기 교육위원+정보위원'],
    career: ['부산대학교 의과대학 및 대학원', '전) 메리놀병원 피부과전공의, 진료과장', '전) 인제대학교 동래백병원 피부과 임상강사', '전) 인제대학교 해운대백병원 피부과 조교수', '전) 인제대학교 부산백병원 피부과 조교수, 과장, 책임교수'],
    memberships: ['대한피부과의사회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: 'Early-bird Session 01 (일동제약)' },
      { year: '2022', event: '24회 춘계', title: '색소 I: 까다로운 색소 쉽고 안전하게 치료하기' },
      { year: '2022', event: '25회 추계', title: '색소 II: 표피 색소 치료 길을 찾다 Navigating the treatment of epidermal pigment lesions' },
      { year: '2022', event: '25회 추계', title: '이슈포커스: 흉터 치료 마스터로부터 듣는다' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Pore' },
      { year: '2023', event: '26회 추계', title: 'The Red: 여드름과 주사, 새로운 길을 찾아서' },
      { year: '2025', event: '27회 춘계', title: 'Luncheon 01 멀츠 / 원텍 /라로슈포제' }
    ],
    awards: ['2026 베스트기획자상', '2024 문신책 발간', '2024 우수기획자상', '2023 베스트기획자상'],
    treatments: [],
    links: []
  },
  {
    id: 'park-seonghyeon',
    name: '박성현',
    photo: '회원 프로필 사진/박성현.jpg',
    hospitalId: 'park-seonghyeon',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 정보이사+전북지부회 학술이사+교육위원', '14기 전북지부회 총무이사', '13기 전북지부회 감사'],
    career: ['전북대학교 의과대학졸업', '전북대학교 의학대학원 수료', '전북대학교병원 피부과 전문의 과정 수료', '전)익산 드림21피부과 원장', '전)전주기전대학 메디칼스킨케어과 겸임교수'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화연구회 정회원', '대한피부레이저학회 정회원', '대한미용피부외과학회 정회원', '대한모발학회 정회원', '대한백반증학회 정회원', '대한아토피피부염학회 정회원', '대한여드름학회 정회원', '대한건선학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['보험질환', '백반증', '백반증수술', '팔라스레이저', '광선치료', '손발톱무좀레이저', '내향성발톱', '기미/색소', '탄력', '텐쎄라', '덴서티', '보톡스', '쥬베룩', '리투오', '리쥬란', '모공', '흉터', '여드름', '탈모', '제모', '혈관질환'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'http://www.psh-skin.com' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/psh_skin67' }
    ]
  },
  {
    id: 'park-juhyuk',
    name: '박주혁',
    photo: '회원 프로필 사진/박주혁.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 교육이사+학술위원+홍보위원', '14기 홍보위원'],
    career: ['전) 국군양주병원 피부과장', '전) 후즈후피부과의원 천호점 원장', '전) 후즈후피부과의원 압구정점 원장', '전) 청담오라클피부과의원 원장', '전) 중국오라클피부과의원 장춘점, 대련점, 쑤저우점 원창', '현) 더힐피부과의원 대표원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '아토피피부염학회 정회원', '대한줄기세포치료학회 정회원', '대한모발학회 정회원', '대한여드름학회 정회원', '대한의학레이저학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '항노화 II: 레벨 업! My Injection Skills' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '피부치료 역량강화II: 우리 병원을 한층 업그레이드 할 수 있는 플러스 알파 시술법' },
      { year: '2023', event: '26회 추계', title: 'The Silver: 초보자도! 숙련자도! 앉아서 듣는 보톡스·필러·실 핸즈온' },
      { year: '2025', event: '27회 춘계', title: '이슈 포커스: BODY Rejuvenation & Contouring' }
    ],
    awards: ['2025 우수렉처상'],
    treatments: ['콜라겐부스터', '여드름흉터', '줄기세포'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'http://www.thehealskin.co.kr/' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/the_heal_derma/' },
      { type: 'instagram', label: '더힐피부과 병원 전체 인스타그램', url: 'https://www.instagram.com/the_healderma/' },
      { type: 'linktree', label: '링크트리', url: 'https://linktr.ee/thehealclinic' },
      { type: 'kakao', label: '카카오 플러스친구', url: 'http://pf.kakao.com/_LxagWxb/chat' }
    ]
  },
  {
    id: 'lee-kyounggeun',
    name: '이경근',
    photo: '회원 프로필 사진/이경근.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['전) 은평우태하피부과 원장', '현) 더힐피부과의원 대표원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한아토피피부염학회 정회원', '대한피부항노화학회 정회원', '대한미용피부외과학회 정회원', '대한화장품의학회 정회원', '대한모발학회 정회원', '대한피부면역학회 정회원', '대한피부병리학회 정회원', '대한임상피부치료연구회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['콜라겐부스터', '필러'],
    links: []
  },
  {
    id: 'kang-hyunah',
    name: '강현아',
    photo: '회원 프로필 사진/강현아.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['가톨릭대학교 의과대학 졸업', '가톨릭의료원 서울성모병원 인턴 수료', '가톨릭의료원 서울성모병원 피부과 레지던트 수료', '가톨릭의과대학원 피부과학 석사학위 취득', '전) 양재 CNP차앤박피부과 원장', '전) 분당정자 CNP차앤박피부과 대표원장', '전) 명동 CNP차앤박피부과 원장', '현) 더힐피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부레이저학회 정회원', '대한피부항노화학회 정회원', '대한여드름학회 정회원', '대한아토피피부염학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['울쎄라', '써마지', '리쥬란', '리투오'],
    links: []
  },
  {
    id: 'park-minwoo',
    name: '박민우',
    photo: '회원 프로필 사진/박민우.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['공군 제10전투비행단 피부과장', '미엘피부과 광명본점 원창', '아로하피부과 원장', '현) 더힐피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 정회원', '대한아토피피부염학회 정회원', '대한여드름학회 정회원', '대한피부레이저학회 회원'],
    lectures: [],
    awards: [],
    treatments: ['콜라겐부스터', '필러'],
    links: []
  },
  {
    id: 'cho-eunbyul',
    name: '조은별',
    photo: '회원 프로필 사진/조은별.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['한림대학교 의과대학 졸업', '한림대학교 성심병원 인턴', '한림대학교 성심병원 피부과 전공의', '한림대학교 의과대학 피부과 임상강사', '한림대학교 의과대학 피부과 임상조교수', '전) 디앤에이 피부과 원장', '전) 에버피부과 원장', '현) 더힐피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한여드름주사학회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['울쎄라', '써마지', '리쥬란', '리투오', '필러'],
    links: []
  },
  {
    id: 'heo-geunyeong',
    name: '허근영',
    photo: '회원 프로필 사진/허근영.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['서울대학교 의과대학 수석 졸업', '서울대학교병원 수련의', '서울대학교병원 피부과 전공의 수료', 'Beth Israel Deaconess Medical Center', '(Harvard Medical School teaching', 'hospital) 연수', 'University of Washington Medical', 'Center 연수', '현) 더힐피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 정회원', '대한아토피피부염학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['콜라겐부스터', '필러'],
    links: []
  },
  {
    id: 'goo-bonceol',
    name: '구본철',
    photo: '회원 프로필 사진/구본철.jpg',
    hospitalId: 'naeum',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 교육이사', '14기 교육위원', '13기 학술위원'],
    career: ['나음피부과 원장', '연세의료원 세브란스병원 피부과 전공의', '방문연구 VISITING SCHOLAR: 미시간대학교병원 (ANN ARBOR, MIl, USA)', '서울대학교병원 피부과 피부과 전임의 (피부외과, 레이저 및 피부암 수술, 피부 노화 연구)', '(주)루트로닉 이사', '클리닉 엘 피부과 원장', '세계 유일의 레이저 회사 임원직 의사이며, 현재까지 교육한 세계 의사 수 (2014년 말, 해 당 강의 등록 수 기준) 약 4만5천명 도달'],
    memberships: ['대한피부과의사회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: 'Latest trends in EBD I: 색소 치료의 새로운 선택' },
      { year: '2022', event: '25회 추계', title: '이슈포커스: 흉터 치료 마스터로부터 듣는다' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Pigment Treatment in Asians' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Injectables' },
      { year: '(Co-session with TSDAS)', event: '', title: '' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Surgical Pearls: 동영상으로 배우는 Tips & Pearls' },
      { year: '2023', event: '26회 추계', title: '협찬 1도 없는 찐! 핫! EBD 2023' },
      { year: '2024', event: 'KOREADERMA2024(27회추계)', title: '톤: 피부를 환하게 맑게 하려면 어떻게 해야되나요? @ChatAKD' },
      { year: '2025', event: 'KOREADERMA2025(28회추계)', title: 'EBDs: 2025 Updates II' }
    ],
    awards: ['2023 우수기획자상'],
    treatments: ['수술흉터', '외상흉터', '화상흉터', '여드름흉터', '시술 및 수술부작용·합병증', '자해흔', '선천성모반', '색소침착', '피부항노화치료', '리프팅', '타이트닝', '체형교정', '미용수술', '제모', '피부질환', '피부외과적수술', '외상', '화상'],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://www.naeumskin.com' },
      { type: 'instagram', label: '병원 인스타그램', url: 'https://www.instagram.com/naeum_skin' },
      { type: 'instagram', label: '개인 인스타그램', url: 'https://www.instagram.com/boncheolleogoo' },
      { type: 'facebook', label: '병원 페이스북', url: 'https://www.facebook.com/naeumskin' },
      { type: 'facebook', label: '개인 페이스북', url: 'https://www.facebook.com/boncheolleogoo' }
    ]
  },
  {
    id: 'jeon-sooyoung',
    name: '전수영',
    photo: '회원 프로필 사진/전수영.jpg',
    hospitalId: 'naeum',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['나음피부과 원장', '연세대학교 원주세브란스 기독병원 피부과 전공의', '연세대학교 원주세브란스 기독병원 피부과 연구강사', '대전 건양대학교 의과대학 건양대학교병원 피부과 과장/주임교수'],
    memberships: ['대한피부과학회 정회원', '대한피부연구학회 정회원', '대한피부과의사회 정회원', '한국피부장벽학회 정회원', '대한여드름학회 정회원', '대한모발학회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['색소침착', '피부질환', '여드름', '탈모', '비만'],
    links: []
  },
  {
    id: 'lee-solam',
    name: '이솔암',
    photo: '회원 프로필 사진/이솔암.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 간행이사'],
    career: ['연세대학교 의과대학 최우등 졸업', '연세대학교 피부과 레지던트', '연세대학교 대학원 의학박사', '연세대학교 피부과학교실 조교수, 2022~2025', 'The Lancet, JAMA 학회지 등 SCI-E 논문 96편 게재', 'BRIC 한국을 빛낸 사람들 등재, 2018, 2019, 2023, 2024, 2025', 'Nature 자매학술지 편집위원', '도서 여드름흉터, 피부미용성분학, 흔히보는피부질환, 탈모 영문교과서 등 저술', '보건복지부 보건의료기술진흥 유공자 장관표창', '대한사립대학병원협회 학술상 대상', '대한피부과학회 Dr.G 학술상, 동아학술상', '대한피부연구학회 신진연구자상', '대한피부과학회 전공의평가 전국 수석', '미국 University of Minnesota, 프랑스 Universite Paris-Est Creteil 공동연구원', 'ASPCR (The Asian Society for Pigment Cell Research) 39i', '대한백반증색소학회 상임이사', '대한피부과학회 신의료기술 위원회', '대한피부과의사회 간행이사', '전) 서울홍피부과의원 원장', '전) 새봄피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한백반증색소학회 정회원'],
    lectures: [
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '피부치료 역량강화I: 한번 들으면 진료 스킬 만렙 고수되는 피부과 전문의의 비기 대방출' },
      { year: '2026', event: '28회 춘계', title: 'Luncheon 02_멀츠' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'seo-jimyung',
    name: '서지명',
    photo: '회원 프로필 사진/서지명.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 최우등졸업', '연세대학교 신촌세브란스 인턴 레지던트', '세브란스병원 피부과 최우수 전공의', '연세대학교 대학원 피부과학 의학석사', 'KAIST 의과학대학원 의학박사 (대체복무)', '미국 Cincinnati University 피부암센터 연수', '미국 Andrea Willey 피부성형센터 연수', '2022 BRIC 한국을 빛낸 사람들 (한빛사) 등재', '2020 IFPCS (국제색소 세포학회) Travel Award', 'SGPF 글로벌인재 양성사업 장학생', '연세대학교 의과대학 알렌장학생', 'Nature Comms, AACR 미국암학회지 등 SCI급 논문 34편 저자', '대한피부과학회 동아학술상', '대한피부과학회 전공의 평가시험 전국 수석', '엔지노믹스 Enzynomics 박사학위 학술상', '연세대학교 대학원 최우수 학술상', '연세대학교 석사학위논문 우수논문상 (2016)', '대한피부암학회 우수연제상 (2016)', '대한미용피부외과학회 우수연제상 (2016)', '연세의대 세브란스병원 전공의 우수논문상 (2016)', '연세의대 석사학위 연구업적 최우수상 (2015)', '대한피부암학회 및 대한미용피부외과학회 우수상 (2015)', '대한피부과학회 최우수 영어 구연상 (2014)', 'ASPCR (The Asian Society for Pigment Cell Research)', 'DASIL (The Dermatologic & Aesthetic Surgery International League)', '전) 나의 미래피부과성형외과 원장, 서울 여의도', '전) 연세더셀피부과 원장, 서울 역삼', '전) 갤러리아피부과 광교점 원장, 수원'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원'],
    lectures: [
      { year: '2022', event: '25회 추계', title: '함께하면 더 좋은 깐부치료' },
      { year: '2023', event: '26회 추계', title: 'The Brown: 까다로운 색소 질환을 치료하는 나의 노하우' },
      { year: '2024', event: 'KOREADERMA2024(27회추계)', title: '결: 결을 잡았더니 톤까지! 완전 러키비키잖아?' }
    ],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'jeong-giyang',
    name: '정기양',
    photo: '회원 프로필 사진/정기양.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 피부과학교실 주임교수', '신촌세브란스병원 피부과 과장', '연세대학교 의과대학 졸업', '세브란스병원 피부과 전공의', '연세대학교 의과대학 의학박사', '미국 Thomas Jefferson 의대 피부과 박사후 연구원', '미국 Thomas Jefferson 의대 피부과 방문교수', 'EBS 명의 367회, 466회 출연', '대한피부연구학회 우암학술상 (2015년)', '미국피부외과학회 International Traveling Mentorship Program 공로상 (2015년)', '미국피부외과학회 Lawrence M Fied MD 기념특별강연 연자 (2019년)', '미국 Thomas Jefferson 의대 Young C Kauh교수 기념특별강연 연자 (2021년)', '대한피부과학회 남송학술상 (2022년)'],
    memberships: ['대한피부암학회 회장', '대한피부외과학회 회장', '대한피부과학회 정회원', '대한피부연구학회 정회원', '국제피부외과/미용외과연맹 이사', '아시아피부과학회 이사', '미국피부외과학회 International traveling mentor 정회원', '미국피부연구학회 정회원', '유럽피부연구학회 정회원'],
    lectures: [
      { year: '2025', event: 'KOREADERMA2025(28회추계)', title: '더 마스터 클라스' }
    ],
    awards: ['2025 더마스터클래스'],
    treatments: [],
    links: []
  },
  {
    id: 'lee-minseok',
    name: '이민석',
    photo: '회원 프로필 사진/이민석.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '연세대학교 세브란스병원 인턴', '연세대학교 신촌세브란스병원 피부과 전공의', '세브란스병원 피부과 최우수 전공의', '연세대학교 대학원 피부과학 의학석사', '독일 Heidelberg University Hospital 피부과 연수', '대한피부과의사회 미래위원회 위원', '네이버 건강상담 피부과 자문의', '스컬트라 Sculptra 엑스퍼트', '고우리 GOURI 키 오피니언 리더', '스텔라 M22 어드바이저리 멤버', '전) 연세A&B피부과 잠실점 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화학회(KAAD) 정회원', '대한임상피부치료연구회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'kim-jeeeun',
    name: '김지언',
    photo: '회원 프로필 사진/김지언.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '연세대학교 의과대학 석박사과정 수료', '연세대학교 세브란스병원 인턴 수료', '연세대학교 강남세브란스병원 피부과 레지던트 수료', '연세의료원 피부과학교실 강사', '세브란스병원 우수협력의', '독일 Heidelberg University Hospital 피부과 연수', '국민건강보험 일산병원 전임의', '국민건강보험 일산병원 임상교수'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화학회(KAAD) 정회원', '대한임상피부치료연구회 정회원', '대한아토피피부염학회 정회원', '대한임상피부치료연구회 정회원', '대한모발학회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'hong-wonjin',
    name: '홍원진',
    photo: '회원 프로필 사진/홍원진.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '연세대학교 대학원 피부과학 의학석사', '연세대학교 세브란스병원 인턴 수료', '연세대학교 강남세브란스병원 피부과 레지던트 수료', '세브란스병원 우수협력의', '일본 오사카 대학병원 피부과 연수', '전) 나의미래피부과 여의도점 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화학회 (KAAD) 정회원', '대한임상피부치료연구회 정회원', '대한아토피피부염학회 정회원', '대한모발학회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'chung-kyunbae',
    name: '정경배',
    photo: '회원 프로필 사진/정경배.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '연세대학교 신촌세브란스 인턴', '연세대학교 신촌세브란스병원 피부과 전공의', '연세대학교 의학대학원 피부과학 의학박사', '연세대학교 신촌세브란스병원 전임의', '세브란스병원 우수협력의', '전) 신사 리프톤피부과의원 원장', '전) 새봄피부과 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한임상피부치료연구회 정회원', '대한피부항노화학회 회원', '대한피부레이저학회 회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'on-hyerang',
    name: '온혜랑',
    photo: '회원 프로필 사진/온혜랑.jpg',
    hospitalId: 'galleria-gaepo',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['연세대학교 의과대학 졸업', '연세대학교 세브란스병원 인턴', '연세대학교 의과대학원 피부과학 석사', '연세대학교 강남세브란스병원 피부과 전공의', '세브란스병원 우수협력의', '전) 연세스타피부과 원장', '전) 연세파스텔피부과 원장', '현) 눈꽃피부과의원 원장'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화학회 정회원', '대한여드름학회 정회원', '대한아토피피부염학회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'ahn-insu',
    name: '안인수',
    photo: '회원 프로필 사진/안인수.jpg',
    hospitalId: 'siheung-human',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 대외협력이사', '14기 홍보이사+정보위원', '13기 간행이사+학술위원'],
    career: ['한림대학교 의과대학 졸업', '한림대학교 의과대학 대학원 석사', '강남성심병원 피부과 레지던트 수료', '전) 미소가인피부과 시흥점 원장', '전) 미소가인피부과 목동점 원장', '전) 국군홍천병원 피부과'],
    memberships: ['대한피부과학회 회원', '대한피부과의사회 회원', '대한모발학회 회원', '대한미용성형레이저의학회 회원', '대한여드름학회 회원', '대한아토피피부염학회 회원', '대한피부항노화연구회(구 보톡스 필러 학회) 회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: '피부치료 역량강화 II: 피부과 전문의로서 더 엣지있게 치료하기' },
      { year: '2022', event: '24회 춘계', title: '포인트만 콕콕, 일타 강사를 한 자리에' },
      { year: '2022', event: '25회 추계', title: '색소 I: 다시보는 레이저토닝 - From the Beginning and Now' },
      { year: '2022', event: '25회 추계', title: '이슈포커스: 흉터 치료 마스터로부터 듣는다' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Melasma' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: '피부치료 역량강화II: 우리 병원을 한층 업그레이드 할 수 있는 플러스 알파 시술법' },
      { year: '2023', event: '26회 추계', title: 'Surgical Pearls: 동영상으로 배우는 Tips & Pearls' },
      { year: '2024', event: '26회 춘계', title: 'Biostimulator X EBD (feat 피부과전문의)' },
      { year: '2024', event: 'KOREADERMA2024(27회추계)', title: '톤: 피부를 환하게 맑게 하려면 어떻게 해야되나요? @ChatAKD' },
      { year: '2025', event: '27회 춘계', title: 'Luncheon 02 덱스레보 / 파마리서치 / 한국오가논' },
      { year: '2025', event: 'KOREADERMA2025(28회추계)', title: 'Luncheon 01_덱스레보' },
      { year: '2026', event: '28회 춘계', title: '트렌드 더마 2026: Read the Trend, Lead the Trend' },
      { year: '2026', event: '28회 춘계', title: 'Luncheon 01_원텍' }
    ],
    awards: ['2024 우수기획자상', '2022 베스트세션(기획자)'],
    treatments: ['리프팅', '울쎄라', '써마지', '스킨부스터', '리투오', '힐로웨이브', '고우리', '쥬베룩', '스컬트라', '레디어스', '수면마취', 'MCT', '수액치료'],
    links: []
  },
  {
    id: 'kim-taeeun',
    name: '김태은',
    photo: '회원 프로필 사진/김태은.jpg',
    hospitalId: 'siheung-human',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['경희대학교 의학전문대학원 졸업', '경희대학교병원 레지던트 수료', '피부과 전문의/지도 전문의', '전) 오아로피부과 청량리 원장'],
    memberships: ['대한피부과학회 회원', '대한피부연구학회 회원'],
    lectures: [],
    awards: [],
    treatments: ['리프팅', '스킨부스터', '미라드라이', '다한증치료', '색소', '여드름', '모공', '흉터'],
    links: []
  },
  {
    id: 'rhee-doyoung',
    name: '이도영',
    photo: '회원 프로필 사진/이도영.jpg',
    hospitalId: 'healhouse-konkuk',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: ['15기 대외협력이사+학술위원+재무위원', '14기 학술이사', '13기 학술이사+재무위원', '12기 교육위원+법제간사', '11기 기획정책간사+학술위원', '10기 정보간사'],
    career: ['힐하우스피부과 건대점 대표원장', '울산대학교 의과대학 피부과 외래교수', '전) 리더스피부과 건대점 대표원장', '전) 한센복지협회 강원지부 부설 복지의원 원장', '서울대학교 의과대학 졸업', '서울아산병원 피부과 전공의', '서울아산병원 피부과 임상전임강사', 'New York Presbyterian Hospital 피부 외과 클리닉 연수'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부항노화학회 정회원', '대한피부레이저학회 정회원', '대한여드름학회 정회원', '대한모발학회 정회원'],
    lectures: [
      { year: '2022', event: '24회 춘계', title: 'Latest trends in EBD II: 다양한 타겟, 다양한 테크놀로지로 진화하는 탄력, 리프팅 EBDs' },
      { year: '2022', event: '25회 추계', title: '함께하면 더 좋은 깐부치료' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Toxins and Fillers in Practice I' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Beautification Strategy' },
      { year: '2023', event: 'KOREADERMA 2023(25회춘계)', title: 'Injectables' },
      { year: '(Co-session with TSDAS)', event: '', title: '' }
    ],
    awards: ['2026 우수기획자상', '2024 베스트기획자상', '2022 베스트세션(기획자)', '2022 베스트세션(연자)'],
    treatments: [],
    links: [
      { type: 'website', label: '병원 홈페이지', url: 'https://healhousegd.com/' },
      { type: 'instagram', label: '인스타그램', url: 'https://www.instagram.com/dr.rhee50/' },
      { type: 'threads', label: '쓰레드', url: 'https://www.threads.com/@dr.rhee50' }
    ]
  },
  {
    id: 'kang-hyunjin',
    name: '강현진',
    photo: '회원 프로필 사진/강현진.jpg',
    hospitalId: 'healhouse-konkuk',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['힐하우스피부과 원장', '가톨릭중앙의료원 인턴 및 피부과 전공의 수료', '가톨릭대학교 의과대학 의학화 졸업', '토론토대학교 생명과학 전공'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원', '대한피부레이저학회 정회원', '대한피부항노화학회 정회원', '대한여드름주사학회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  },
  {
    id: 'kim-yulhee',
    name: '김율희',
    photo: '회원 프로필 사진/김율희.jpg',
    hospitalId: 'healhouse-konkuk',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: ['아주대학교병원 피부과 임상강사', '아주대학교병원 인턴 및 피부과 전공의', '아주대학교 의과대학 의학과 졸업'],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원'],
    lectures: [],
    awards: [],
    treatments: [],
    links: []
  }  ,
  {
    id: 'kim-junki',
    name: '김준기',
    photo: '회원 프로필 사진/김준기.jpg',
    hospitalId: 'thehill-sinsa',
    role: '원장',
    specialty: '피부과 전문의',
    quote: '',
    positions: [],
    career: [],
    memberships: ['대한피부과학회 정회원', '대한피부과의사회 정회원'],
    lectures: [],
    awards: [],
    treatments: ['울쎄라', '써마지', '리쥬란', '리투오'],
    links: []
  }
];

// 카테고리 그룹 + 하위 항목 트리 구조
// 사용자가 보는 모든 진료분야는 items의 평면 리스트
const TREATMENT_GROUPS = [
  {
    id: 'medical',
    name: '피부질환',
    icon: 'fa-wand-magic-sparkles',
    items: ['여드름', '모공', '백반증', '백반증수술', '엑시머레이저', '팔라스레이저', '광선치료', '자외선치료', '백반증탈색치료', '켈로이드', '내향성발톱', '내향성발톱수술', '선천성모반', '선천성멜라닌세포성모반', '난치성모반', '베커모반', '밀크반점', '군집성흑자증', '주름', '탈모메조테라피', '외상흉터', '홍조/주사', '수술흉터', '화상흉터', '자해흔', '시술 및 수술부작용·합병증', '외상', '화상', '찰과상', '다한증치료', '조직검사', '탈모', '남성형탈모시술', '피부외과적수술', '피부질환', '아토피피부염', '아토피', '두드러기', '건선', '옴', '한포진', '원형탈모', '사마귀', '티눈', '아토피 광선치료', '피부장벽치료', '피부장벽', '민감성피부', '주사피부염', '보험질환', '혈관질환', '냉동치료']
  },
  {
    id: 'laser',
    name: '레이저',
    icon: 'fa-bolt',
    items: ['레이저토닝', '기미/색소', '흉터', '여드름흉터', '여성제모', '여성특수제모', '문신제거', '쿠션흉터', '울트라펄스 알파', '흉터레이저', '색소침착', '색소', '색소레이저', '미라드라이', '남성특수부위토닝', '여성특수부위토닝', '여드름 주사', '혈관 레이저', '손발톱무좀레이저', '제모', '검버섯', '핀포인트레이저']
  },
  {
    id: 'lifting',
    name: '리프팅',
    icon: 'fa-arrow-up-from-bracket',
    items: ['리프팅', '탄력', '써마지', '덴서티알파', '울쎄라', '울쎄라피프라임', '올타이트', '티타늄', '소프웨이브', '텐써마', '더블타이트', '슈링크', '인모드', '세르프', '브이로', '바디온다', '온다', '타이트닝', '덴서티', '피부항노화치료', '벨루티', '텐쎄라']
  },
  {
    id: 'aesthetic',
    name: '피부시술',
    icon: 'fa-syringe',
    items: ['쁘띠성형', '필러', '스킨부스터', '스컬트라', '실리프팅', '힐로웨이브', '쥬베룩', '쥬브젠', '줄기세포', 'MCT', 'PRP', '메조보톡스', '항노화', '피부결', '레디어스', '리바이브', '스킨보톡스', '스킨보툴리늄톡신', '얼굴윤곽', '더엘주사', '리쥬란', '스킨바이브', '고우리', '약물전달치료', '큐어젯', '스킨젯', '트리필 프로', '이미지가이드 필러', '이미지가이드 보톡스', '리투오', '쥬베룩볼륨', '쥬브아셀', '보톡스', '흉터시술', '리제네라', '미용수술', '포텐자', '콜라겐부스터']
  },
  {
    id: 'other',
    name: '기타',
    icon: 'fa-ellipsis',
    items: ['고압산소', '비만', '다이어트', '체형교정', 'HPL체형교정주사시술', '수면마취', '수액치료', 'AI 진단']
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
        (linkPage === 'dermatologist' && page === 'member') ||
        (linkPage === 'clinic' && page === 'hospital'));
    });
    // Set body data-page for per-page styling
    let topPage = page;
    if (page === 'member') topPage = 'dermatologist';
    else if (page === 'hospital') topPage = 'clinic';
    else if (page === 'treatment') topPage = 'treatment';
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
        <a href="#dermatologist" class="home-shortcut">
          <i class="fas fa-user-md"></i>
          <span>피부과의사 찾기</span>
        </a>
        <a href="#clinic" class="home-shortcut">
          <i class="fas fa-hospital"></i>
          <span>피부과 찾기</span>
        </a>
        <a href="#treatment" class="home-shortcut">
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
  // The actual slide-up logic, callable from focus AND pointerdown/click.
  // (Android Chrome sometimes keeps input focused after the keyboard is
  // dismissed, so the next tap does NOT fire 'focus'. pointerdown/click DO
  // fire on every tap, so we use them as fallback triggers.)
  const slideSearchUp = () => {
    if (window.innerWidth > 768 || !homePage) return;
    if (homePage.classList.contains('search-focused')) return;
    const searchBox = document.querySelector('.search-box');
    if (!searchBox) return;
    clearAllPending();
    // Reset to true identity so getBoundingClientRect returns natural position
    homePage.style.transition = 'none';
    homePage.style.transform = 'none';
    void homePage.offsetHeight;
    const rect = searchBox.getBoundingClientRect();
    const shift = Math.min(0, -(rect.top - 80));
    homePage.style.transition = '';
    if (shift === 0) {
      homePage.style.transform = '';
      homePage.classList.add('search-focused');
      return;
    }
    homePage.style.transform = `translate3d(0, ${shift}px, 0)`;
    homePage.classList.add('search-focused');
  };
  searchInput.addEventListener('focus', slideSearchUp);
  // Pointer/click fallback: re-taps on an already-focused input do NOT fire
  // 'focus', but they DO fire pointerdown/click. Defer slightly so any
  // in-flight blur/revert callbacks have time to settle.
  const reTap = () => setTimeout(slideSearchUp, 30);
  searchInput.addEventListener('pointerdown', reTap);
  searchInput.addEventListener('click', reTap);
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
      <h1>
        <span>피부과의사 찾기</span>
        <img src="images/badge.jpg" alt="피부과 전문의" class="page-header-badge">
      </h1>
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
        <span class="sr-only">${m.specialty}</span>
      </div>
      <div class="member-card-body">
        <h3>${m.name}</h3>
        <p class="member-card-role">${hospital ? hospital.shortName : ''} ${m.role}</p>
        <div class="member-card-hospital">
          <i class="fas fa-hospital"></i>
          <span class="member-card-hospital-name">${hospital ? hospital.name : ''}</span>
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
    linktree: 'fa-solid fa-link',
    facebook: 'fa-brands fa-facebook',
    blog: 'fa-solid fa-blog',
    kakao: 'fa-solid fa-comment'
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

  // ─── Optional v2 fields (spec) ───
  const heroImages = hospital.heroImages || [];
  const philosophy = hospital.philosophy || [];
  const interiorPhotos = hospital.interiorPhotos || [];
  const equipment = hospital.equipment || [];
  const slogan = hospital.slogan || '';
  const transitInfo = hospital.transitInfo || '';
  const parkingInfo = hospital.parkingInfo || '';

  app.innerHTML = `
    <div class="clinic-detail-v2 fade-in">

      <!-- 1. HERO -->
      <section class="clinic-hero-v2">
        ${heroImages.length > 0 ? `
          <div class="clinic-hero-slider" id="clinicHeroSlider">
            ${heroImages.map((img, i) => `
              <img src="${photoUrl(img)}" alt="${hospital.name} ${i+1}"
                   class="clinic-hero-img${i === 0 ? ' active' : ''}"
                   loading="eager" decoding="async" fetchpriority="${i === 0 ? 'high' : 'low'}">
            `).join('')}
            ${heroImages.length > 1 ? `
              <div class="clinic-hero-dots">
                ${heroImages.map((_, i) => `<button class="clinic-hero-dot${i === 0 ? ' active' : ''}" data-idx="${i}" aria-label="${i+1}번 슬라이드"></button>`).join('')}
              </div>
            ` : ''}
          </div>
        ` : ''}
        <div class="clinic-hero-info">
          <span class="clinic-cert-badge"><i class="fas fa-certificate"></i> 대한피부과의사회 정회원</span>
          <h1 class="clinic-name">${hospital.name}</h1>
          ${slogan ? `<p class="clinic-slogan">${slogan}</p>` : (hospital.description ? `<p class="clinic-slogan">${hospital.description}</p>` : '')}
          <div class="clinic-meta">
            ${hospital.address ? `<div class="clinic-meta-item"><i class="fas fa-map-marker-alt"></i><span>${hospital.address}</span></div>` : ''}
            ${hospital.phone ? `<div class="clinic-meta-item"><i class="fas fa-phone"></i><a href="tel:${hospital.phone}">${hospital.phone}</a></div>` : ''}
            ${hospital.website ? `<div class="clinic-meta-item"><i class="fas fa-globe"></i><a href="${hospital.website}" target="_blank" rel="noopener">${hospital.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a></div>` : ''}
            ${Object.keys(hospital.hours || {}).length > 0 ? `
              <div class="clinic-meta-item clinic-meta-hours">
                <i class="fas fa-clock"></i>
                <div>
                  ${Object.entries(hospital.hours).map(([d, t]) => `<div><strong>${d}:</strong> ${t}</div>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </section>

      <!-- 2. PHILOSOPHY -->
      ${philosophy.length > 0 ? `
        <section class="clinic-philosophy">
          <h2 class="clinic-section-h2">진료 철학</h2>
          <div class="philosophy-grid">
            ${philosophy.map((p, i) => `
              <div class="philosophy-card">
                <div class="philosophy-num">${String(i+1).padStart(2,'0')}</div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 3. DOCTORS -->
      ${doctors.length > 0 ? `
        <section class="clinic-doctors">
          <h2 class="clinic-section-h2">의료진 ${doctors.length}명</h2>
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
        </section>
      ` : ''}

      <!-- 4. INTERIOR -->
      ${interiorPhotos.length > 0 ? `
        <section class="clinic-interior">
          <h2 class="clinic-section-h2">원내 둘러보기</h2>
          <div class="interior-grid" id="interiorGrid" data-collapsed="true">
            ${interiorPhotos.map((p, i) => `
              <button class="interior-tile" data-idx="${i}" aria-label="병원 사진 ${i+1}">
                <img src="${photoUrl(p.image)}" alt="" loading="lazy">
              </button>
            `).join('')}
            ${interiorPhotos.length > 8 ? `
              <button class="interior-tile interior-more" id="interiorMoreBtn" aria-label="사진 ${interiorPhotos.length - 7}장 더보기" hidden>
                <img class="interior-more-bg" src="${photoUrl(interiorPhotos[7].image)}" alt="" loading="lazy">
                <div class="interior-more-overlay">
                  <span class="interior-more-icon">+</span>
                </div>
              </button>
              <button class="interior-tile interior-less" id="interiorLessBtn" aria-label="접기" hidden>
                <span class="interior-less-icon">−</span>
                <span class="interior-less-label">접기</span>
              </button>
            ` : ''}
          </div>
        </section>
      ` : ''}

      <!-- 5. EQUIPMENT -->
      <section class="clinic-equipment">
        ${(() => {
          if (equipment.length === 0) {
            return `<h2 class="clinic-section-h2">보유 장비</h2>
                    <p class="clinic-section-empty">장비 정보 준비 중입니다.</p>`;
          }
          // 카테고리 추출 (treatmentTags 첫 항목 기준)
          const eqCats = [];
          equipment.forEach(eq => {
            const c = (eq.treatmentTags || [])[0];
            if (c && !eqCats.includes(c)) eqCats.push(c);
          });
          return `
            <div class="clinic-section-header">
              <h2 class="clinic-section-h2">보유 장비</h2>
              ${eqCats.length > 1 ? `
                <div class="equipment-filter" id="equipmentFilter">
                  <button class="eq-chip active" data-cat="all">전체 (${equipment.length})</button>
                  ${eqCats.map(c => {
                    const cnt = equipment.filter(e => (e.treatmentTags||[])[0] === c).length;
                    return `<button class="eq-chip" data-cat="${c}">${c} (${cnt})</button>`;
                  }).join('')}
                </div>
              ` : ''}
            </div>
            <div class="equipment-grid" id="equipmentGrid" data-collapsed="true">
              ${equipment.map((eq, i) => {
                const cat = (eq.treatmentTags || [])[0] || '';
                return `
                  <button class="equipment-card" data-idx="${i}" data-cat="${cat}" aria-label="${eq.name}">
                    <div class="equipment-thumb-wrap">
                      ${eq.image ? `<img src="${photoUrl(eq.image)}" alt="${eq.name}" loading="lazy">` : `<div class="equipment-thumb-empty"><i class="fas fa-microchip"></i></div>`}
                    </div>
                    <div class="equipment-info">
                      <div class="equipment-name">${eq.name}</div>
                      ${cat ? `<span class="equipment-tag" data-cat="${cat}">${cat}</span>` : ''}
                    </div>
                  </button>
                `;
              }).join('')}
              <button class="equipment-card equipment-more" id="equipmentMoreBtn" aria-label="장비 더보기" hidden>
                ${equipment[17] && equipment[17].image ? `<img class="equipment-more-bg" src="${photoUrl(equipment[17].image)}" alt="" loading="lazy">` : ''}
                <div class="equipment-more-overlay">
                  <span class="equipment-more-icon">+</span>
                </div>
              </button>
              <button class="equipment-card equipment-less" id="equipmentLessBtn" aria-label="접기" hidden>
                <span class="equipment-less-icon">−</span>
                <span class="equipment-less-label">접기</span>
              </button>
            </div>
          `;
        })()}
      </section>

      <!-- 6. TREATMENTS -->
      ${hospital.treatments && hospital.treatments.length > 0 ? `
        <section class="clinic-treatments">
          <h2 class="clinic-section-h2">대표 진료</h2>
          <p class="clinic-section-sub">소속 원장님들이 진료하는 분야입니다</p>
          <div class="treatment-tags">
            ${TREATMENT_GROUPS.flatMap(g =>
              hospital.treatments
                .filter(t => g.items.includes(t))
                .map(t => `<a href="#treatment/${encodeURIComponent(t)}" class="treatment-tag group-${g.id}">${t}</a>`)
            ).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 7. LOCATION -->
      ${(hospital.lat && hospital.lng) || transitInfo || parkingInfo ? `
        <section class="clinic-location">
          <h2 class="clinic-section-h2">오시는 길</h2>
          ${hospital.lat && hospital.lng ? `<div class="hospital-map-container" id="hospitalMap"></div>` : ''}
          <div class="clinic-location-info">
            ${hospital.address ? `<div class="loc-row"><strong>주소</strong><span>${hospital.address}</span></div>` : ''}
            ${transitInfo ? `<div class="loc-row"><strong>대중교통</strong><span>${transitInfo}</span></div>` : ''}
            ${parkingInfo ? `<div class="loc-row"><strong>주차</strong><span>${parkingInfo}</span></div>` : ''}
          </div>
        </section>
      ` : ''}

    </div>

    <!-- Coverflow Lightbox: 가운데가 가장 크고 좌우(또는 상하)는 작아짐 -->
    <div class="clinic-lightbox" id="clinicLightbox" hidden>
      <button class="clinic-lightbox-close" aria-label="닫기">&times;</button>
      <div class="clinic-lightbox-track" id="clinicLightboxTrack"></div>
    </div>

    <!-- 장비 상세 모달: coverflow 카드 갤러리 (가운데 + 양옆 카드 보임, 클릭 시 가운데로) -->
    <div class="equipment-modal" id="equipmentModal" hidden>
      <button class="equipment-modal-close" aria-label="닫기">&times;</button>
      <div class="equipment-modal-track" id="equipmentModalTrack"></div>
    </div>
  `;

  if (heroImages.length > 1) initHeroSlider();
  if (interiorPhotos.length > 0) initInteriorTabs(interiorPhotos);
  if (equipment.length > 0) initEquipmentSection(equipment);
  if (hospital.lat && hospital.lng) {
    setTimeout(() => initHospitalMap(hospital), 100);
  }
}

function initEquipmentSection(equipment) {
  const grid = document.getElementById('equipmentGrid');
  const filter = document.getElementById('equipmentFilter');
  const modal = document.getElementById('equipmentModal');
  const track = document.getElementById('equipmentModalTrack');
  if (!grid || !modal || !track) return;

  let currentList = equipment;
  const moreBtn = document.getElementById('equipmentMoreBtn');
  const lessBtn = document.getElementById('equipmentLessBtn');

  function activeCat() {
    return filter?.querySelector('.eq-chip.active')?.dataset.cat || 'all';
  }

  function collapsedCount() {
    // 데스크톱 6열 × 3줄 = 18칸 → 17 + "+" 버튼
    // 모바일 3열 × 4줄 = 12칸 → 11 + "+" 버튼
    return window.matchMedia('(min-width: 769px)').matches ? 17 : 11;
  }

  function applyView() {
    const cat = activeCat();
    const collapsed = grid.dataset.collapsed === 'true';
    const limit = collapsedCount();
    const allCards = [...grid.querySelectorAll('.equipment-card:not(.equipment-more):not(.equipment-less)')];
    const matching = allCards.filter(c => cat === 'all' || c.dataset.cat === cat);
    const total = matching.length;

    allCards.forEach(c => c.hidden = true);
    currentList = cat === 'all' ? equipment : equipment.filter(e => (e.treatmentTags || [])[0] === cat);

    if (total <= limit + 1) {
      // 펼침/접기 버튼 불필요
      matching.forEach(c => c.hidden = false);
      if (moreBtn) moreBtn.hidden = true;
      if (lessBtn) lessBtn.hidden = true;
    } else if (collapsed) {
      matching.slice(0, limit).forEach(c => c.hidden = false);
      if (moreBtn) moreBtn.hidden = false;
      if (lessBtn) lessBtn.hidden = true;
    } else {
      matching.forEach(c => c.hidden = false);
      if (moreBtn) moreBtn.hidden = true;
      if (lessBtn) lessBtn.hidden = false;
    }
  }

  filter?.addEventListener('click', (e) => {
    const btn = e.target.closest('.eq-chip');
    if (!btn) return;
    filter.querySelectorAll('.eq-chip').forEach(b => b.classList.toggle('active', b === btn));
    grid.dataset.collapsed = 'true';  // 필터 바꿀 때 다시 접힘 상태로
    applyView();
  });

  moreBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    grid.dataset.collapsed = 'false';
    applyView();
  });

  lessBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    grid.dataset.collapsed = 'true';
    applyView();
    document.querySelector('.clinic-equipment')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // 뷰포트 크기 변경 시(데스크톱↔모바일) collapsed 임계값 재적용
  window.addEventListener('resize', () => applyView());

  applyView();

  // ─── Coverflow modal ───
  function buildTrack(list) {
    track.innerHTML = list.map((eq, i) => {
      const cat = (eq.treatmentTags || [])[0] || '';
      return `
        <div class="equipment-modal-slide" data-idx="${i}">
          <div class="equipment-modal-slide-inner">
            <div class="equipment-modal-img-wrap">
              ${eq.image ? `<img src="${photoUrl(eq.image)}" alt="${eq.name}" loading="lazy">` : `<div class="equipment-thumb-empty"><i class="fas fa-microchip"></i></div>`}
            </div>
            <div class="equipment-modal-info">
              ${cat ? `<span class="equipment-modal-cat" data-cat="${cat}">${cat}</span>` : ''}
              <h3 class="equipment-modal-name">${eq.name}</h3>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function updateScale() {
    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    const slides = track.querySelectorAll('.equipment-modal-slide');
    slides.forEach((s) => {
      const r = s.getBoundingClientRect();
      const sc = r.left + r.width / 2;
      const dist = Math.abs(sc - trackCenter);
      const maxDist = trackRect.width * 0.5;
      const t = Math.min(1, Math.sqrt(dist / maxDist));
      // 가운데 1.0 → 양옆 0.78 + 어둡게 (filter brightness)
      const scale = 1 - 0.22 * t;
      const opacity = 1 - 0.35 * t;
      const brightness = 1 - 0.35 * t;
      s.style.transform = `scale(${scale})`;
      s.style.opacity = opacity;
      s.style.filter = `brightness(${brightness})`;
      s.classList.toggle('is-center', dist < r.width / 2);
    });
  }

  function centerOn(idx) {
    const slides = track.querySelectorAll('.equipment-modal-slide');
    const target = slides[idx];
    if (!target || !track.clientWidth) return;
    // scroll-snap mandatory + 초기 layout 미완료 → scrollLeft 변경이 0으로 되돌려질 수 있음.
    // snap 끄고 force reflow → 스크롤 → 충분히 settle된 뒤 snap 복원.
    track.style.scrollSnapType = 'none';
    void track.offsetWidth;  // force reflow
    track.scrollLeft = target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2;
    updateScale();
    // 250ms 후 snap 복원
    setTimeout(() => { track.style.scrollSnapType = ''; }, 250);
  }

  function scrollToIdx(idx) {
    const slides = track.querySelectorAll('.equipment-modal-slide');
    const target = slides[idx];
    if (!target) return;
    track.scrollTo({
      left: target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2,
      behavior: 'smooth'
    });
  }

  track.addEventListener('scroll', () => requestAnimationFrame(updateScale), { passive: true });
  track.addEventListener('click', (e) => {
    const slide = e.target.closest('.equipment-modal-slide');
    if (!slide) return;
    scrollToIdx(parseInt(slide.dataset.idx, 10));
  });

  function openModal(startEq) {
    // 갤러리는 카테고리 필터와 무관하게 전체 장비를 이어서 볼 수 있게
    buildTrack(equipment);
    const startIdx = equipment.indexOf(startEq);
    const targetIdx = startIdx >= 0 ? startIdx : 0;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    // 여러 시점에서 centerOn 재시도 — 레이아웃·이미지 로딩 시점 차이 흡수
    const tryCenter = () => centerOn(targetIdx);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        tryCenter();
        setTimeout(tryCenter, 80);
        setTimeout(tryCenter, 200);
        setTimeout(tryCenter, 500);
      });
    });
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.equipment-card');
    if (!card) return;
    if (card.classList.contains('equipment-more') || card.classList.contains('equipment-less')) return;
    const idx = parseInt(card.dataset.idx, 10);
    openModal(equipment[idx]);
  });

  modal.querySelector('.equipment-modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const slides = track.querySelectorAll('.equipment-modal-slide');
      let centerIdx = 0;
      slides.forEach((s, i) => { if (s.classList.contains('is-center')) centerIdx = i; });
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      scrollToIdx(Math.max(0, Math.min(slides.length - 1, centerIdx + dir)));
      e.preventDefault();
    }
  });
}

function initHeroSlider() {
  const slider = document.getElementById('clinicHeroSlider');
  if (!slider) return;
  const imgs = slider.querySelectorAll('.clinic-hero-img');
  const dots = slider.querySelectorAll('.clinic-hero-dot');
  if (imgs.length <= 1) return;

  // 미리 디코드 — JPEG 디코드는 메인 스레드 비용이 큼. 사전 디코드해두면
  // 전환할 때 끊김 없이 부드럽게 페이드인됨.
  imgs.forEach(img => {
    if (img.decode) img.decode().catch(() => {});
  });

  let idx = 0;
  const show = (newIdx) => {
    const nextIdx = (newIdx + imgs.length) % imgs.length;
    if (nextIdx === idx) return;
    imgs[idx].classList.remove('active');
    dots[idx]?.classList.remove('active');
    idx = nextIdx;
    imgs[idx].classList.add('active');
    dots[idx]?.classList.add('active');
  };
  let timer = setInterval(() => show(idx + 1), 5000);
  dots.forEach(d => {
    d.addEventListener('click', (e) => {
      clearInterval(timer);
      show(parseInt(e.currentTarget.dataset.idx, 10));
      timer = setInterval(() => show(idx + 1), 5000);
    });
  });
}

function initInteriorTabs(photos) {
  const grid = document.getElementById('interiorGrid');
  const moreBtn = document.getElementById('interiorMoreBtn');
  const lessBtn = document.getElementById('interiorLessBtn');
  if (!grid) return;

  const VISIBLE_COLLAPSED = 7;  // 7장 + "+" 버튼 = 8칸

  function applyView() {
    const collapsed = grid.dataset.collapsed === 'true';
    const tiles = [...grid.querySelectorAll('.interior-tile:not(.interior-more):not(.interior-less)')];
    const total = tiles.length;
    if (total <= 8) {
      // 8장 이하 → 더보기/접기 버튼 불필요
      tiles.forEach(t => t.hidden = false);
      if (moreBtn) moreBtn.hidden = true;
      if (lessBtn) lessBtn.hidden = true;
    } else if (collapsed) {
      // collapsed: 7장 + "+"
      tiles.forEach((t, i) => { t.hidden = i >= VISIBLE_COLLAPSED; });
      if (moreBtn) moreBtn.hidden = false;
      if (lessBtn) lessBtn.hidden = true;
    } else {
      // expanded: 모두 + "−"
      tiles.forEach(t => t.hidden = false);
      if (moreBtn) moreBtn.hidden = true;
      if (lessBtn) lessBtn.hidden = false;
    }
  }

  if (moreBtn) {
    moreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      grid.dataset.collapsed = 'false';
      applyView();
    });
  }
  if (lessBtn) {
    lessBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      grid.dataset.collapsed = 'true';
      applyView();
      // 접기 후 인테리어 섹션 상단으로 부드럽게 스크롤
      grid.closest('.clinic-interior')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  applyView();

  // ─── Coverflow Lightbox ───
  const lb = document.getElementById('clinicLightbox');
  const track = document.getElementById('clinicLightboxTrack');
  if (!lb || !track) return;

  function buildLbTrack(list) {
    track.innerHTML = list.map((p, i) => `
      <div class="clinic-lightbox-slide" data-idx="${i}">
        <img src="${photoUrl(p.image)}" alt="" loading="lazy">
      </div>
    `).join('');
  }

  function updateScale() {
    const isHorizontal = window.matchMedia('(min-width: 769px)').matches;
    const trackRect = track.getBoundingClientRect();
    const trackCenter = isHorizontal
      ? trackRect.left + trackRect.width / 2
      : trackRect.top + trackRect.height / 2;
    const slides = track.querySelectorAll('.clinic-lightbox-slide');
    slides.forEach((s) => {
      const r = s.getBoundingClientRect();
      const sc = isHorizontal ? r.left + r.width / 2 : r.top + r.height / 2;
      const dist = Math.abs(sc - trackCenter);
      const maxDist = (isHorizontal ? trackRect.width : trackRect.height) * 0.5;
      // sqrt 곡선으로 가운데 근처에서 빠르게 작아지고, 멀어질수록 천천히
      const t = Math.min(1, Math.sqrt(dist / maxDist));
      // 가운데 1.0 → 사이드 0.72 (덜 부각되도록)
      const scale = 1 - 0.28 * t;
      const opacity = 1 - 0.4 * t;
      s.style.transform = `scale(${scale})`;
      s.style.opacity = opacity;
      s.classList.toggle('is-center', dist < r.width / 2 && dist < r.height / 2);
    });
  }

  function centerOn(idx) {
    const slides = track.querySelectorAll('.clinic-lightbox-slide');
    const target = slides[idx];
    if (!target || !track.clientWidth) return false;
    const isHorizontal = window.matchMedia('(min-width: 769px)').matches;
    if (isHorizontal) {
      track.scrollLeft = target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2;
    } else {
      track.scrollTop = target.offsetTop - (track.clientHeight - target.offsetHeight) / 2;
    }
    updateScale();
    return true;
  }

  function scrollToSlide(idx, smooth = true) {
    const slides = track.querySelectorAll('.clinic-lightbox-slide');
    const target = slides[idx];
    if (!target) return;
    const isHorizontal = window.matchMedia('(min-width: 769px)').matches;
    const beh = smooth ? 'smooth' : 'auto';
    if (isHorizontal) {
      track.scrollTo({ left: target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2, behavior: beh });
    } else {
      track.scrollTo({ top: target.offsetTop - (track.clientHeight - target.offsetHeight) / 2, behavior: beh });
    }
  }

  track.addEventListener('scroll', () => requestAnimationFrame(updateScale), { passive: true });
  track.addEventListener('click', (e) => {
    const slide = e.target.closest('.clinic-lightbox-slide');
    if (!slide) return;
    scrollToSlide(parseInt(slide.dataset.idx, 10));
  });

  function openLb(startIdx) {
    if (photos.length === 0) return;
    buildLbTrack(photos);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        centerOn(startIdx);
        setTimeout(() => centerOn(startIdx), 150);
      });
    });
  }

  function closeLb() {
    lb.hidden = true;
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const tile = e.target.closest('.interior-tile');
    if (!tile) return;
    if (tile.classList.contains('interior-more') || tile.classList.contains('interior-less')) return;
    openLb(parseInt(tile.dataset.idx, 10));
  });

  lb.querySelector('.clinic-lightbox-close').addEventListener('click', closeLb);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLb();
  });
  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      // Find current center, scroll to previous
      const slides = track.querySelectorAll('.clinic-lightbox-slide');
      let centerIdx = 0;
      slides.forEach((s, i) => { if (s.classList.contains('is-center')) centerIdx = i; });
      scrollToSlide(Math.max(0, centerIdx - 1));
      e.preventDefault();
    }
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const slides = track.querySelectorAll('.clinic-lightbox-slide');
      let centerIdx = 0;
      slides.forEach((s, i) => { if (s.classList.contains('is-center')) centerIdx = i; });
      scrollToSlide(Math.min(slides.length - 1, centerIdx + 1));
      e.preventDefault();
    }
  });
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
router.add('#dermatologist', renderMembers);
router.add('#member/:id', renderMemberDetail);
router.add('#clinic', renderHospitals);
router.add('#hospital/:id', renderHospitalDetail);
router.add('#treatment', renderTreatments);
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
