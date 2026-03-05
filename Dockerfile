FROM oven/bun:1.3.9-alpine
WORKDIR /app

COPY . .
# RUN bun --bun install --frozen-lockfile --ignore-scripts
RUN bun --bun run build

ENV NODE_ENV=production

EXPOSE 3000/tcp
CMD ["bun", "--bun", "run", "/app/dist/main.js"]
