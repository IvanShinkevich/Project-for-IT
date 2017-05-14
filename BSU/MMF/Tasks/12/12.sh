#!/bin/bash

echo "Enter the number you want to check"
read a
if [ $(($a%2)) -eq 0 ]; then 
	echo "odd"
else echo "not odd:("
fi
