echo $'\e[1;34m'Closing and deleting Gallery Containers / Images if they exist...$'\e[0m'
docker stop gallerydb
docker stop gallery_web_1
docker ps -aq | xargs docker rm
docker rmi gallery_web

echo $'\e[1;34m'Creating web and db containers...$'\e[0m'
docker-compose up -d

echo $'\e[1;34m'Closing containers for reboot...$'\e[0m'
docker stop gallerydb
docker stop gallery_web_1

echo $'\e[1;34m'Restarting constainers to seed db...$'\e[0m'
docker start gallerydb
docker start gallery_web_1

echo $'\e[1;34m'Seeding database...$'\e[0m'
docker exec gallery_web_1 node db/initializer/seedDB.js

echo $'\e[1;34m'Initializing app...$'\e[0m'
open -a "Google Chrome" http://127.0.0.1:9999
