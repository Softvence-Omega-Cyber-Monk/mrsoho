FROM node:22.18.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm rebuild esbuild

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3001
CMD ["serve", "-s", "dist", "-l", "3001", "-n"]