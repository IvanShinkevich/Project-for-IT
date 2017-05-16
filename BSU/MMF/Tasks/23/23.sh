#!/bin/bash
echo Введите число
read number
w=0
if [ $number -eq 1 ]
then
	echo "Не простая"
else
for (( i=2 ; i <= $(echo "sqrt($number)" | bc) ; i++))
do
let "sum = number % i"
if [ $sum -eq 0 ]
then
w=1
fi
done
if [ $w -eq 1 ]
then echo "Не простое"
else echo "Простое"
fi
fi
