##v2
Run a container with marco27/ubudev27:v1 and colorama

### build
cd python/src/v2/
docker build -t python:v2 .

### run
docker run -d --rm --name python python:v2

### access the image as root
docker run -it python:v2 /bin/bash

### play
python3

from colorama import init
init()
from colorama import Fore, Back, Style
print(Fore.RED + 'some red text')
print(Back.GREEN + 'and with a green background')
print(Style.DIM + 'and in dim text')
print(Style.RESET_ALL)
print('back to normal now')

exit()