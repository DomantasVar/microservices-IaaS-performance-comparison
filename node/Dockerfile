FROM node:14.15.4
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --verbose
COPY . ./
CMD ["node", "src/app.js"]
EXPOSE 8000
