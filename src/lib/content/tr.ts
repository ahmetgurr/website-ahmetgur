import type { SiteContent } from './types'

export const tr: SiteContent = {
  meta: {
    title: 'Ahmet Gür | Bilgi Sistemleri ve Siber Güvenlik',
    description:
      'Siber güvenlik, ağ altyapıları ve BT denetimi üzerine kişisel portfolyo ve blog.',
  },
  nav: {
    about: 'Hakkımda',
    skills: 'Yetenekler',
    projects: 'Projeler',
    experience: 'Deneyim',
    recentPosts: 'Son Yazılarım',
    blog: 'Blog',
    contact: 'İletişim',
    contactCta: 'İletişime Geç',
  },
  hero: {
    name: 'AHMET GÜR',
    title: 'Bilgi Sistemleri Kontrolörü & Siber Güvenlik Uzmanı',
    description:
      'Finansal bilgi sistemleri denetimi, siber güvenlik ve kritik ağ altyapılarının tasarımı arasında köprü kuran bir Bilgisayar Mühendisiyim.',
    ctaLinkedin: 'LinkedIn',
  },
  about: {
    heading: 'Hakkımda',
    intro: 'Teknik saha tecrübesini denetim ve yönetişim disiplinine taşıyan bir mühendis.',
    body: 'Siber güvenlik ve ağ teknolojilerine güçlü bir şekilde odaklanan bir Bilgisayar Mühendisiyim. Kariyerime Firewall, NAC, SIEM, Switch ve Router gibi ağ ve güvenlik donanımlarının mimarisi, kurulumu ve entegrasyonu üzerine çalışarak başladım. Bu süreçte uç nokta güvenliği, donanım yapılandırması ve ağ zafiyetleri tarafında edindiğim derinlemesine teknik tecrübeyi, şu an finans sektöründe İç Kontrol ve Uyum alanında stratejik bir avantaja dönüştürüyorum. Finansal sistemlerin güvenliğini ve operasyonel sürekliliğini sağlamak amacıyla COBIT, NIST CSF 2.0, ISO 27001 ve BDDK yönergeleri çerçevesinde kritik BT denetimleri, risk yönetimi faaliyetleri ve süreç otomasyonları yürütüyorum. Siber güvenlik tarafındaki teknik "saha ve donanım" geçmişimi, finans sektörünün gerektirdiği sıkı denetim ve yönetişim standartlarıyla harmanlayarak, teknolojik altyapıların hem siber tehditlere karşı dirençli hem de regülasyonlara tam uyumlu kalmasını sağlıyorum.',
  },
  skills: {
    heading: 'Yetenekler ve Teknolojiler',
    intro: 'BT denetimi, OT/siber güvenlik ve yazılım otomasyonu becerilerinin birleşimi.',
    categories: [
      {
        title: '🛡️ BT Denetim & Yönetişim',
        items: [
          { name: 'COBIT', level: 'İleri Düzey', value: 90, icon: 'ClipboardCheck' },
          { name: 'ISO 27001', level: 'İleri Düzey', value: 85, icon: 'ShieldCheck' },
          { name: 'BDDK Mevzuatı', level: 'İleri Düzey', value: 90, icon: 'Landmark' },
          { name: 'NIST CSF 2.0', level: 'Orta Düzey', value: 70, icon: 'ShieldAlert' },
          { name: 'Risk Analizi', level: 'İleri Düzey', value: 85, icon: 'TrendingUp' },
        ],
      },
      {
        title: '⚙️ OT & Siber Güvenlik',
        items: [
          { name: 'Firewall', level: 'Uzman', value: 100, icon: 'Flame' },
          { name: 'Purdue Modeli', level: 'İleri Düzey', value: 85, icon: 'Layers' },
          { name: 'FortiNAC', level: 'İleri Düzey', value: 85, icon: 'Router' },
          { name: 'Nozomi', level: 'İleri Düzey', value: 85, icon: 'Radar' },
          { name: 'Ağ Segmentasyonu', level: 'İleri Düzey', value: 85, icon: 'Network' },
          { name: 'ICS/SCADA Güvenliği', level: 'İleri Düzey', value: 85, icon: 'Factory' },
          { name: 'Penetrasyon Testleri', level: 'İleri Düzey', value: 85, icon: 'Bug' },
        ],
      },
      {
        title: '💻 Yazılım & Otomasyon',
        items: [
          { name: 'Python', level: 'Orta Düzey', value: 70, icon: 'Code2' },
          { name: 'Excel VBA', level: 'İleri Düzey', value: 85, icon: 'FileSpreadsheet' },
          { name: 'Power Query', level: 'İleri Düzey', value: 80, icon: 'Database' },
          { name: 'Android/Kotlin', level: 'İleri Düzey', value: 85, icon: 'Smartphone' },
          { name: 'React', level: 'Orta-İleri Düzey (Yetkin)', value: 78, icon: 'Atom' },
          { name: 'JavaScript', level: 'Orta-İleri Düzey (Yetkin)', value: 78, icon: 'Braces' },
          { name: 'Veri Analizi', level: 'İleri Düzey', value: 80, icon: 'BarChart3' },
        ],
      },
    ],
  },
  projects: {
    heading: 'Öne Çıkan Projeler',
    intro: 'Denetim, güvenlik ve otomasyon alanlarında hayata geçirdiğim projeler.',
    items: [
      {
        id: 'limit-kontrol',
        tabLabel: 'Veri Otomasyonu',
        title: 'Veri Otomasyonu ve Limit Kontrol Araçları',
        description:
          'Birim içi operasyonel verimliliği artırmak amacıyla Excel VBA, Power Query ve Python kullanarak MASAK uyumluluk kontrolleri ve BDDK Limit Kontrol Otomasyonu gibi otonom veri eşleştirme ve takip araçları geliştirdim.',
      },
      {
        id: 'iga',
        tabLabel: 'İGA Havalimanı OT Güvenliği',
        title: 'İstanbul Havalimanı (IGA) OT Güvenliği',
        description:
          "Dünyanın en büyük havalimanlarından biri olan İstanbul Havalimanı'nda, Operasyonel Teknoloji (OT) ve Endüstriyel Kontrol Sistemleri'nin (ICS) güvenliğini sağlamada kilit bir rol üstlendim. Proje kapsamında, havalimanının kritik operasyonlarını yöneten ağı korumak için kapsamlı bir güvenlik altyapısının kurulumda yer aldım. Bu süreçte FortiNAC (NAC) ve Nozomi gibi çözümleri kullanarak, ağ erişim kontrolü ve tehdit algılama mekanizmalarını güçlendirdim.",
      },
      {
        id: 'ivedik',
        tabLabel: 'İvedik OSB Güvenliği',
        title: 'İvedik Organize Sanayi Bölgesi (İOSB) OT Güvenliği',
        description:
          "İvedik Organize Sanayi Bölgesi'nin (İOSB) kritik ağ altyapısını güçlendirmek ve siber güvenliğini sağlamak amacıyla yürütülen projede yer aldım. Sanayi bölgelerindeki endüstriyel kontrol sistemlerinin (ICS) benzersiz güvenlik ihtiyaçlarına odaklanarak, ağ topolojisi analizi ve zafiyet değerlendirmeleri gerçekleştirdim. Proje, endüstriyel operasyonların kesintisiz ve güvenli bir şekilde sürdürülmesi için özel olarak tasarlanmış güvenlik politikalarının oluşturulması ve uygulanmasını içeriyordu.",
      },
      {
        id: 'tcdd-teias',
        tabLabel: 'TCDD ve TEİAŞ',
        title: 'TCDD ve TEİAŞ Ağ Güvenlik ve Altyapı İyileştirme',
        description:
          'Kritik altyapı kuruluşlarında ağ topolojisi analizi ve zafiyet değerlendirmeleri çalışmalarını ekip olarak yürüttük. SCADA sistemleri dahil olmak üzere operasyonel süreçler için yeni nesil güvenlik mimarilerinin entegrasyonunu birlikte gerçekleştirdik ve güvenlik altyapısını iyileştirdik.',
      },
      {
        id: 'kestanederesi-res',
        tabLabel: 'Kestanederesi RES',
        title: 'Kestanederesi RES | Rüzgar Enerji Santrali',
        description:
          "Endüstriyel ağ altyapısının analizini yaparak kontrol altyapısının güvenli bir şekilde inşa edilmesinde görev aldım. Sistemlerin kesintisiz ve güvenli çalışmasını sağlamak amacıyla Purdue Modeli'ne uygun ağ segmentasyonu gerçekleştirdik.",
      },
      {
        id: 'android-devops',
        tabLabel: 'Android ve DevOps',
        title: 'Modern Android ve DevOps Projeleri',
        description:
          "Jetpack Compose (Kotlin), Android Studio ve Git kullanılarak modernize edilmiş, CI/CD prensiplerine sahip mobil uygulamalar. Bu alandaki çalışmalarım; harita entegrasyonuyla rota ve rezervasyon yönetimi sağlayan kullanıcı odaklı bir Seyahat Rezervasyon Uygulaması ile temel veritabanı (CRUD) operasyonlarını barındıran dinamik bir Yemek Tarifleri Uygulaması'nı kapsamaktadır. Her iki projede de modern arayüz standartları (UX/UI) ve işlevsellik ön planda tutulmuştur.",
      },
    ],
  },
  experience: {
    heading: 'Mesleki Deneyim',
    intro: 'Ağ ve siber güvenlik sahasından finansal bilgi sistemleri denetimine bir yolculuk.',
    items: [
      {
        date: 'Ocak 2026 – Günümüz',
        title: 'Bilgi Sistemleri Kontrolör Yardımcısı',
        company: 'FuzulEv - İç Kontrol ve Uyum Başkanlığı',
        bullets: [
          'Sıfırdan Bilgi Sistemleri İç Kontrol altyapısını kurarak, Risk Kontrol Matrisi (RCM) metodolojisinin temellerini oluşturmada yer aldım ve kurum içi sisteme entegre ettik.',
          'COBIT, NIST CSF 2.0, ISO 27001 ve BDDK yönergelerine tam uyumlu Risk Kontrol Matrisleri, denetim kontrol listeleri ve yönetici sunumlarının hazırlanması süreçlerinde görev almaktayım.',
          "BDDK Bilgi Sistemleri Tebliği'ne göre haritalandırılmış denetim özet raporlarının, yıllık faaliyet raporlarının ve Yönetim Kurulu (YK) sunumlarının hazırlık süreçlerini yürütüyorum.",
          'BT yönetişimi, risk yönetimi süreçleri ve iç kontrolleri değerlendirerek sistemlerdeki güvenlik açıklarını tespit ediyor ve ekip olarak uygulanabilir iyileştirmeler tasarlıyoruz.',
          'Birim içi manuel ilerleyen işleri otomatize etmek ve operasyonel verimliliği artırmak amacıyla; Excel VBA, Power Query ve Python kullanarak MASAK uyumluluk kontrolleri ve BDDK Limit Kontrol Otomasyonu gibi otonom veri eşleştirme ve takip araçları geliştirmekteyim.',
        ],
      },
      {
        date: 'Mayıs 2024 – Ocak 2026',
        title: 'Network ve Siber Güvenlik Mühendisi',
        company: 'Kontrolmatik Teknoloji - Haberleşme ve Siber Güvenlik Departmanı',
        bullets: [
          'Ağ ve siber güvenlik çözümlerinin geliştirilmesi ve yönetimi süreçlerinde aktif olarak rol aldım.',
          'Firewall, NAC, SIEM, Switch ve Router gibi ağ altyapı bileşenlerinin kurulum, konfigürasyon ve entegrasyon işlemlerini başarıyla gerçekleştirdim.',
          'VirtualBox ve Hyper-V üzerinde test ve simülasyon ortamları oluşturarak, potansiyel güvenlik açıklarının tespitini sağladım.',
          'Ağ zafiyet taramaları ve sızma (penetrasyon) testleri uygulayarak sistemlerdeki güvenlik açıklarını belirledim ve çözüm önerileri sundum.',
          'Proje mimarisi ve ağ topolojisi çizimlerinden ürün seçimine ve satın alma süreçlerine kadar proje döngüsünün her aşamasında yer aldım.',
          'Operasyonel Teknoloji (OT) güvenlik standartlarını projelere entegre ederek endüstriyel sistemlerin korunmasına katkıda bulundum.',
          'Müşteri toplantıları düzenleyerek ihtiyaç analizleri gerçekleştirdim ve yeni müşteri kazanımı süreçlerine destek oldum.',
        ],
      },
      {
        date: 'Mart 2024 – Mayıs 2024',
        title: 'Yazılım Mühendisi Stajyeri / Android Developer',
        company: 'Biocoder Teknoloji',
        groupLabel: 'Staj Geçmişi',
        bullets: [
          'Gömülü yazılım ve elektronik sistemler alanında Ar-Ge çalışmaları yapan şirkette Android Developer olarak görev aldım.',
          'Şirketin operasyonel ihtiyaçlarına yönelik mobil uygulamasını baştan sona geliştirerek yayımladım.',
          'Mevcut uygulamaların bakımını üstlendim ve yeni özelliklerin sisteme entegre edilmesi süreçlerinde aktif rol aldım.',
        ],
      },
      {
        date: 'Temmuz 2023 – Eylül 2023',
        title: 'Bilgi İşlem Stajyeri',
        company: 'Gaziosmanpaşa Üniversitesi - Bilgi İşlem Daire Başkanlığı',
        bullets: [
          'Active Directory ile kullanıcı kimlik doğrulama süreçlerini yönettim ve geliştirdim.',
          'Bilgisayar ve donanım sorunlarının çözümünde sorumluluk alarak, kullanıcılara hızlı ve etkili teknik destek sağladım.',
          'Verilerin güvenli bir şekilde yedeklenmesi, imaj alma ve ağ üzerinden dağıtım işlemlerini gerçekleştirdim.',
        ],
      },
    ],
  },
  blog: {
    heading: 'Son Yazılarım',
    intro: 'Siber güvenlik, denetim ve otomasyon üzerine yazdıklarım.',
    emptyState: 'Henüz yayınlanmış bir yazı yok — yakında burada olacak.',
    aboutEmptyState: 'Hakkında bilgisi yakında burada olacak.',
    readMore: 'Devamını oku',
    viewAllCta: 'Tüm Blog Yazılarımı Gör',
    allPostsHeading: 'Tüm Yazılar',
    backToHome: '← Ana Sayfa',
    readingTimeSuffix: 'dk okuma',
    tabHome: 'Anasayfa',
    tabAbout: 'Hakkında',
  },
  contact: {
    heading: 'İletişim',
    body: 'İşbirlikleri veya sadece arkadaşça bir sohbet için ulaşmaktan çekinmeyin.',
    linkedin: 'https://www.linkedin.com/in/ahmetgur/',
    email: 'ahhmetgur@gmail.com',
    github: 'https://github.com/ahmetgurr',
    tryhackme: 'https://tryhackme.com/p/ahmetgur',
  },
}
