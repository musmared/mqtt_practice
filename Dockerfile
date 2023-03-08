FROM ansi/mosquitto

COPY server.crt /etc/mosquitto/certs/
COPY server.key /etc/mosquitto/certs/
COPY mosquitto.conf /etc/mosquitto/mosquitto.conf
