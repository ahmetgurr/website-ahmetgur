# İlk Claude Code promptu

Kullanım: VS Code'da proje klasörünü aç, terminalde `claude` yaz,
`Shift+Tab` ile Plan Mode'a geç, aşağıdaki metni ilk mesaj olarak yapıştır.

---

Bu proje, mevcut tek sayfalık statik CV sitemi (legacy-site/index.html
içinde referans olarak duruyor) yerine geçecek; blog ve giriş yapılabilir
bir admin panel içeren modern bir web uygulaması kuracağız.

Önce CLAUDE.md dosyasını oku ve orada belirtilen mimari kararlara sadık kal.

İlk adım olarak SADECE bir plan çıkar, kod yazma:

1. `npx create-payload-app@latest` ile Next.js + Payload starter'ını nasıl
   kuracağımızı adım adım anlat
2. Posts, Media, Users koleksiyonlarının şemasını taslak olarak öner
3. legacy-site/index.html içindeki tasarımı (renkler, fontlar, layout)
   analiz et ve Tailwind config'e nasıl aktaracağımızı özetle
4. Klasör yapısını CLAUDE.md'deki kurallara göre taslakla

Planı onayladıktan sonra sırayla ilerleyeceğiz, tek seferde her şeyi
kodlama — her adımdan sonra dur, sonucu göster, onay bekle.
