#!/bin/bash	
echo Введите имя процесса, который нужно убить
read name
$( pkill -f $name )
echo Код ошибки: $?
