#!/bin/bash
echo "Enter the number";
read a;
sum=0;
function countDig {
	if [ $a -eq 0 ]; then return 0;
	else
 	sum=$(($sum+$a%10))
	a=$(($a/10))
	countDig
	fi
}
countDig
echo $sum
