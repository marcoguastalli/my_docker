#!/bin/bash

# Start the first process
cd /
#nginx &

# Start the second process
#node /srv/nextjs-alpine/node_modules/.bin/next start &
cd /srv/nextjs-alpine
npm run build
npm run start

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?