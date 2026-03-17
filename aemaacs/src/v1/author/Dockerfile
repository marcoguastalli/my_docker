FROM openjdk:11
WORKDIR /opt/aem

COPY aem-author-p4502.jar /opt/aem/aem-quickstart.jar

RUN mkdir -p /opt/aem/crx-quickstart

CMD ["java", "-jar", "/opt/aem/aem-quickstart.jar", "-r", "author,local"]
