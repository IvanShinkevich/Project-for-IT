#!/bin/bash
echo Введите число, до которого считать среднее
read n
number=1
sum=0
while [ $number -le $n ]; do
	sum=$(($sum + $number))
	number=$(($number+1))
done
echo $sum/$(($number-1)) | bc -l

