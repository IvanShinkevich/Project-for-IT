#!/bin/bash
echo "Options:"
echo "1. Найти количество файлов и каталогов в текущем расположении"
echo "2. Вывести 10 подряд идущих строк в данном файле"
echo "3. Список всех процессов, принадлежащих текущему пользователю"
echo "Choose one of them by pressing 1-3"
read a
case $a in
1)echo "Files:  `find . -type f | wc -l`" `echo` Directiories:  `find . -type d | wc -l`;;
2)head 20.sh;;
3)echo `ps -la`;;
esac
