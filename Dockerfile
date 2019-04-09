FROM duluca/minimal-node-web-server:latest
WORKDIR /usr/src/app
COPY dist public
