"""Generate static HTML pages for new doctors + new clinics.

For each doctor not yet having dermatologist/{id}/index.html, create one.
For each clinic not yet having clinic/{id}/index.html, create one.

Uses templates matching existing pages (cd53ff4 commit format).
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent
DERM_DIR = ROOT / 'dermatologist'
CLINIC_DIR = ROOT / 'clinic'

data = json.load(open('D:/tmp/check.json', encoding='utf-8'))
HOSPITALS = {h['id']: h for h in data['HOSPITALS']}
MEMBERS = {m['id']: m for m in data['MEMBERS']}

DOCTOR_TEMPLATE = '''<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- 1. 기본 메타데이터 및 SEO -->
  <meta charset="UTF-8">
  <base href="/akd-members/">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{hospital_name} {name} | 대한피부과의사회 회원</title>
  <meta name="description" content="{description}">
  <meta name="keywords" content="{name}, {hospital_short}, 피부과 전문의, 대한피부과의사회 회원, 피부과 의사, 피부과 진료">
  <meta name="author" content="대한피부과의사회">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="https://jminbae.github.io/akd-members/dermatologist/{doctor_id}/">

  <!-- 2. 소유권 확인 및 브라우저 테마 (인증 코드 발급 후 활성화 예정) -->
  <!-- <meta name="naver-site-verification" content="발급받은_코드" /> -->
  <!-- <meta name="google-site-verification" content="발급받은_코드" /> -->
  <meta name="theme-color" content="#ffffff">

  <!-- 3. Open Graph (카카오톡, 페이스북 등 공유용) -->
  <meta property="og:site_name" content="대한피부과의사회">
  <meta property="og:title" content="{hospital_name} {name}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://jminbae.github.io/akd-members/images/og/{og_image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://jminbae.github.io/akd-members/dermatologist/{doctor_id}/">
  <meta property="og:type" content="profile">
  <meta property="og:locale" content="ko_KR">

  <!-- 4. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{hospital_name} {name}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="https://jminbae.github.io/akd-members/images/og/{og_image}">

  <!-- 5. 폰트 및 스타일시트 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="css/style.css?v=20260501by">

  <!-- 6. 구조화된 데이터 (JSON-LD) - Physician + BreadcrumbList -->
  <script type="application/ld+json">
  [
    {{
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "{name}",
      "url": "https://jminbae.github.io/akd-members/dermatologist/{doctor_id}/",
      "image": "https://jminbae.github.io/akd-members/images/og/{og_image}",
      "medicalSpecialty": "Dermatology",
      "memberOf": {{
        "@type": "MedicalOrganization",
        "name": "대한피부과의사회",
        "url": "https://jminbae.github.io/akd-members/"
      }},
      "worksFor": {{
        "@type": "MedicalBusiness",
        "name": "{hospital_name}"
      }}
    }},
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{ "@type": "ListItem", "position": 1, "name": "대한피부과의사회", "item": "https://jminbae.github.io/akd-members/" }},
        {{ "@type": "ListItem", "position": 2, "name": "피부과의사 찾기", "item": "https://jminbae.github.io/akd-members/#dermatologist" }},
        {{ "@type": "ListItem", "position": 3, "name": "{name}", "item": "https://jminbae.github.io/akd-members/dermatologist/{doctor_id}/" }}
      ]
    }}
  ]
  </script>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">
        <img src="images/akd-logo.png" alt="대한피부과의사회 공식 로고" class="logo-akd-img">
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="메뉴 열기">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#home" class="nav-link" data-page="home"><i class="fas fa-magnifying-glass"></i> 통합 검색</a></li>
        <li><a href="#dermatologist" class="nav-link" data-page="dermatologist"><i class="fas fa-user-md"></i> 피부과의사 찾기</a></li>
        <li><a href="#clinic" class="nav-link" data-page="clinic"><i class="fas fa-hospital"></i> 피부과 찾기</a></li>
        <li><a href="#treatment" class="nav-link" data-page="treatment"><i class="fas fa-wand-magic-sparkles"></i> 진료분야로 찾기</a></li>
      </ul>
    </div>
  </nav>

  <!-- Main Content Area -->
  <main id="app"></main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-copy">&copy; 2026 대한피부과의사회. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="js/app.js?v=20260501by"></script>
</body>
</html>
'''

CLINIC_TEMPLATE = '''<!DOCTYPE html>
<html lang="ko">
<head>
  <!-- 1. 기본 메타데이터 및 SEO -->
  <meta charset="UTF-8">
  <base href="/akd-members/">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{name} | 대한피부과의사회 공식 회원 병원</title>
  <meta name="description" content="{description}">
  <meta name="keywords" content="{name}, 피부과, 피부과 전문의, 대한피부과의사회 회원 병원, 피부과 진료">
  <meta name="author" content="대한피부과의사회">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="https://jminbae.github.io/akd-members/clinic/{clinic_id}/">

  <!-- 2. 소유권 확인 및 브라우저 테마 (인증 코드 발급 후 활성화 예정) -->
  <!-- <meta name="naver-site-verification" content="발급받은_코드" /> -->
  <!-- <meta name="google-site-verification" content="발급받은_코드" /> -->
  <meta name="theme-color" content="#ffffff">

  <!-- 3. Open Graph (카카오톡, 페이스북 등 공유용) -->
  <meta property="og:site_name" content="대한피부과의사회">
  <meta property="og:title" content="{name}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://jminbae.github.io/akd-members/images/og/{og_image}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://jminbae.github.io/akd-members/clinic/{clinic_id}/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="ko_KR">

  <!-- 4. Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{name}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="https://jminbae.github.io/akd-members/images/og/{og_image}">

  <!-- 5. 폰트 및 스타일시트 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="css/style.css?v=20260501by">

  <!-- 6. 구조화된 데이터 (JSON-LD) - MedicalBusiness + BreadcrumbList -->
  <script type="application/ld+json">
  [
    {{
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "{name}",
      "url": "https://jminbae.github.io/akd-members/clinic/{clinic_id}/",
      "image": "https://jminbae.github.io/akd-members/images/og/{og_image}",
      "description": "{description}",{address_block}{phone_block}{geo_block}
      "medicalSpecialty": "Dermatology",
      "memberOf": {{
        "@type": "MedicalOrganization",
        "name": "대한피부과의사회",
        "url": "https://jminbae.github.io/akd-members/"
      }}
    }},
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{ "@type": "ListItem", "position": 1, "name": "대한피부과의사회", "item": "https://jminbae.github.io/akd-members/" }},
        {{ "@type": "ListItem", "position": 2, "name": "피부과 찾기", "item": "https://jminbae.github.io/akd-members/#clinic" }},
        {{ "@type": "ListItem", "position": 3, "name": "{name}", "item": "https://jminbae.github.io/akd-members/clinic/{clinic_id}/" }}
      ]
    }}
  ]
  </script>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="#home" class="nav-logo">
        <img src="images/akd-logo.png" alt="대한피부과의사회 공식 로고" class="logo-akd-img">
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="메뉴 열기">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="#home" class="nav-link" data-page="home"><i class="fas fa-magnifying-glass"></i> 통합 검색</a></li>
        <li><a href="#dermatologist" class="nav-link" data-page="dermatologist"><i class="fas fa-user-md"></i> 피부과의사 찾기</a></li>
        <li><a href="#clinic" class="nav-link" data-page="clinic"><i class="fas fa-hospital"></i> 피부과 찾기</a></li>
        <li><a href="#treatment" class="nav-link" data-page="treatment"><i class="fas fa-wand-magic-sparkles"></i> 진료분야로 찾기</a></li>
      </ul>
    </div>
  </nav>

  <!-- Main Content Area -->
  <main id="app"></main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-copy">&copy; 2026 대한피부과의사회. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script src="js/app.js?v=20260501by"></script>
</body>
</html>
'''

# ---- Generate doctor pages ----
new_docs = 0
DEFAULT_QUOTE = '대한피부과의사회 정회원으로서, 환자분께 최선을 다해 진료하겠습니다.'
for mid, m in MEMBERS.items():
    out_dir = DERM_DIR / mid
    out_path = out_dir / 'index.html'
    if out_path.exists(): continue  # don't overwrite existing
    out_dir.mkdir(parents=True, exist_ok=True)
    h = HOSPITALS.get(m['hospitalId'], {})
    desc = m.get('quote') or DEFAULT_QUOTE
    # OG image: if exists in images/og, use it; else default
    og_path = ROOT / 'images' / 'og' / f'member-{mid}.jpg'
    og_image = f'member-{mid}.jpg' if og_path.exists() else 'default.jpg'
    html = DOCTOR_TEMPLATE.format(
        hospital_name=h.get('name', ''),
        hospital_short=h.get('shortName', h.get('name', '')),
        name=m['name'],
        doctor_id=mid,
        og_image=og_image,
        description=desc,
    )
    out_path.write_text(html, encoding='utf-8')
    new_docs += 1

# ---- Generate clinic pages ----
new_clinics = 0
DEFAULT_DESC = '대한피부과의사회 공식 회원 병원입니다. 피부과 전문의가 진료합니다.'
for hid, h in HOSPITALS.items():
    out_dir = CLINIC_DIR / hid
    out_path = out_dir / 'index.html'
    if out_path.exists(): continue
    out_dir.mkdir(parents=True, exist_ok=True)
    desc = h.get('description') or DEFAULT_DESC
    og_path = ROOT / 'images' / 'og' / f'hospital-{hid}.jpg'
    og_image = f'hospital-{hid}.jpg' if og_path.exists() else 'default.jpg'

    addr = h.get('address') or ''
    phone = h.get('phone') or ''
    lat = h.get('lat')
    lng = h.get('lng')

    address_block = ''
    if addr:
        address_block = f'''
      "address": {{
        "@type": "PostalAddress",
        "streetAddress": "{addr}",
        "addressCountry": "KR"
      }},'''
    phone_block = f'\n      "telephone": "{phone}",' if phone else ''
    geo_block = ''
    if lat is not None and lng is not None:
        geo_block = f'''
      "geo": {{
        "@type": "GeoCoordinates",
        "latitude": {lat},
        "longitude": {lng}
      }},'''

    html = CLINIC_TEMPLATE.format(
        name=h.get('name', ''),
        clinic_id=hid,
        og_image=og_image,
        description=desc,
        address_block=address_block,
        phone_block=phone_block,
        geo_block=geo_block,
    )
    out_path.write_text(html, encoding='utf-8')
    new_clinics += 1

print(f'Generated {new_docs} doctor pages + {new_clinics} clinic pages')
