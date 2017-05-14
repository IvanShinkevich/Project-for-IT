
#!/bin/bash
echo Введите число
read number
devider=2
second=1
while [ $devider -lt $(($number/2))]; do
	let "second=number%devider"
	if[ $second -eq 0]; then
		break
	fi
done
if[$second -eq 0]; then
	echo Простое
else
	echo Не простое
fi
