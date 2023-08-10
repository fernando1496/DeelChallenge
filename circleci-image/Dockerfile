# Use the CircleCI Node.js image as the base
FROM circleci/node:latest-browsers AS node
RUN npm install -g allure-commandline

# Install Java (replace with appropriate package manager and version for your needs)
FROM ubuntu:14.04.4 AS base_config
RUN apt-get update && apt-get install -y apt-transport-https
RUN echo 'deb http://private-repo-1.hortonworks.com/HDP/ubuntu14/2.x/updates/2.4.2.0 HDP main' >> /etc/apt/sources.list.d/HDP.list
RUN echo 'deb http://private-repo-1.hortonworks.com/HDP-UTILS-1.1.0.20/repos/ubuntu14 HDP-UTILS main'  >> /etc/apt/sources.list.d/HDP.list
RUN echo 'deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/azurecore/ trusty main' >> /etc/apt/sources.list.d/azure-public-trusty.list
RUN sudo apt-get install software-properties-common -y
RUN sudo add-apt-repository ppa:openjdk-r/ppa


# Use the OpenJDK 11 image as the base
FROM openjdk:11 AS java_allure
 
# Build final image
COPY --from=node /app/dist /usr/share/node
COPY --from=java_allure /usr/bin/allure /usr/bin/allure


# Set the working directory to /app (you can change this to your desired directory)
WORKDIR /app