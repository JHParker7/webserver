FROM alpine:3.21.0
USER root

WORKDIR /app
ADD app/. /app/

RUN apt update
RUN apt install npm
RUN npm install
EXPOSE 3000
CMD ["npm run dev"]