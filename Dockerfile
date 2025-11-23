FROM node:22.18.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm rebuild esbuild

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173", "-n"]