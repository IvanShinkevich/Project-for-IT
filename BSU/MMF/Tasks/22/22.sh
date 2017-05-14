
#!/bin/bash
echo Введите число
read number
sum=0
while [ $number -gt 0 ]; do
	let  "sum=sum+number%10"
	let "number=number/10"
done
echo Сумма цифр в введёном числе равна $sum
