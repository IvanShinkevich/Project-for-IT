#!/bin/bash
echo Введите n ряд
read counter
echo Введите x
read x
factorial=1
if [ $counter -lt 0 ]
then
	echo Введите положительное число
else
if [ $counter -eq 0 ]
then
sum=1
else
	sum=1
	q=$x
	for ((i=1; $counter >= i ; i++  ))
	do
	sum=$(( $sum + $(echo "($q/$factorial)" | bc) ))
	q=$(( $q * $x ))
	factorial=$(( $factorial * $(( $i + 1 )) ))
	done
fi
fi
echo $sum
