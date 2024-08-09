FROM node:20.15.1-alpine3.19 AS base

FROM base AS runner
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
COPY ./prisma/schema/* ./prisma/schema/
RUN pnpm install
COPY . .
CMD ["pnpm", "dev"]