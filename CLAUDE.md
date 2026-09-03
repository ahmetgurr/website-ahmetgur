# Proje: ahmetgur.com — Kişisel Site + Blog

## Amaç
Statik tek sayfalık CV sitesini, blog ve giriş yapılabilir admin paneli içeren
modern bir Next.js uygulamasına dönüştürmek.

## Teknoloji yığını (kesinleşmiş kararlar — sorulmadan farklı bir alternatif önerme)
- Next.js 15 (App Router), TypeScript
- Payload CMS 3.x — Next.js'in İÇİNE entegre, ayrı bir servis/konteyner DEĞİL
- PostgreSQL — Docker konteyneri, Payload'ın Postgres adaptörü ile
- Tailwind CSS + shadcn/ui
- Görsel yükleme: başlangıçta yerel disk (volume), ileride Cloudflare R2'ye taşınabilir

## URL yapısı
- `/` — CV, tek sayfa, anchor navigasyon (#about #skills #projects #experience #contact)
- `/blog` — yazı listesi
- `/blog/[slug]` — yazı detayı
- `/admin` — Payload yönetim paneli (giriş/çıkış, zengin metin editörü, görsel yükleme)

## Tasarım kimliği
- Renk paleti: lacivert (navy) + altın (gold)
- Referans: `legacy-site/index.html` — buradaki renk/font/spacing değerlerini çıkar
  ve Tailwind config'e (CSS değişkenleri olarak) aktar. Kodun kendisi taşınmayacak,
  sadece tasarım dili korunacak.

## Klasör kuralları
- `legacy-site/` — eski site, sadece referans, DÜZENLENMEYECEK
- `src/app/` — Next.js route'ları (create-payload-app scaffold'u `src/` altına kurdu,
  Payload/Next.js'in güncel standart yapısı — bu proje bunu kullanıyor)
- `src/components/` — paylaşılan UI bileşenleri
- `src/collections/` — Payload koleksiyon tanımları (Posts, Media, Users)
- Paket yöneticisi: **pnpm** (scaffold pnpm ile kuruldu, npm değil)

## Dağıtım hedefi
- Docker Compose (app + db) → CasaOS (ev sunucusu) → Cloudflare Tunnel → ahmetgur.com
- Tek domain, tek TLS, tek tünel — subdomain YOK, ayrı CMS servisi YOK
- Şu an CI/CD yok; manuel `docker compose up -d --build` yeterli

## Çalışma tarzı
- Büyük/geri dönüşü zor değişikliklerden önce Plan Mode'da onay iste
- Her adımı küçük, test edilebilir parçalara böl, tek seferde her şeyi kodlama
- İleride çoklu yazar (multi-author) eklenebilir olsun ama şimdi kurma —
  Payload'ın Users koleksiyonu zaten buna hazır, mimariyi şişirme

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
