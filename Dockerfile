# CasaOS / self-hosted Docker için çok aşamalı prod imajı.
# `next.config.ts`'de `output: 'standalone'` açık olmalı.

FROM node:22-alpine AS base
RUN corepack enable

# ---- Bağımlılıklar ----
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Build ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Next.js telemetrisini derleme sırasında kapat
ENV NEXT_TELEMETRY_DISABLED=1
# NEXT_PUBLIC_ önekli değişkenler `next build` sırasında koda GÖMÜLÜR —
# runtime'da docker-compose'un environment: ile geçmesi yetmez, çünkü o an
# kod zaten derlenmiş olur. Bu değişken olmadan (ör. localhost varsayılanıyla)
# derlenirse Payload, kapak/profil görsellerinin mutlak URL'lerini yanlış
# host ile üretir (rich text içindeki görseller ayrı bir yoldan render
# edildiği için bu sorunu yaşamaz) — bu yüzden build-arg olarak da geçirilmesi
# şart (bkz. docker-compose.yml build.args).
ARG NEXT_PUBLIC_SERVER_URL
ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL}
RUN pnpm build

# ---- Çalışma zamanı ----
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

RUN mkdir -p .next media && chown nextjs:nodejs .next media

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
