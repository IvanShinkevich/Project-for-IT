#!/bin/bash
echo "Enter the age you want to check:"
read year
if [ $(($year%4)) -eq 0 ]; then
	if [ $(($year%100)) -eq 0 ]; then 
		if [ $(($year%400)) -eq 0 ]; then echo "Yes"
		else echo  "No"
		fi
	fi
else echo "No"
fi

