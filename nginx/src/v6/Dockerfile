FROM debian

RUN apt-get update
RUN apt-get -y install openssh-server nginx supervisor
RUN mkdir /var/run/sshd; chmod 755 /var/run/sshd
RUN mkdir /root/.ssh; chown root. /root/.ssh; chmod 700 /root/.ssh
RUN ssh-keygen -A

COPY supervisord.conf /etc/supervisor/supervisord.conf
COPY ssh/id_rsa_docker.pub /root/.ssh/authorized_keys

# expose ports
EXPOSE 22
EXPOSE 80
# run
CMD ["/usr/bin/supervisord"]
