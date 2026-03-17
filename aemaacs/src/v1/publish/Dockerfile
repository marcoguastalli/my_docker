FROM openjdk:11
WORKDIR /opt/aem

COPY aem-publish-p4503.jar /opt/aem/aem-quickstart.jar

RUN mkdir -p /opt/aem/crx-quickstart

CMD ["java", "-jar", "/opt/aem/aem-quickstart.jar", "-r", "author,local"]
