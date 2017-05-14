#! /bin/bash
echo Введите число
read number
first=1
second=2
NextNumber=3
echo $first
echo $second
while [ $(($NextNumber + $first)) -le $number ]; do
	let "NextNumber = first + second"
        echo $NextNumber 
	first=$second
	second=$NextNumber
done
