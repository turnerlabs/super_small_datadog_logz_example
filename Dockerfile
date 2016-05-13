FROM datadog/docker-dogstatsd:latest
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get update && apt-get install -y nodejs

COPY test.js /opt/test/test.js
COPY package.json /opt/test/package.json
WORKDIR /opt/test

RUN npm install
