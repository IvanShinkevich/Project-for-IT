#!/bin/bash
echo Введите первое число
read first
echo  Введите второе число
read second
remainder=1
a=$first
b=$second
if [ $second -eq 0 ]; then
	echo НОД $first
 	exit
fi
while [ $remainder -ne 0 ]; do
	let "remainder= first % second"
	first=$second
 	second=$remainder
done
echo Нод: $first
