#!/bin/bash
echo "Enter the letter you want to check"
read a
if [ $a = "а" -o $a = "ё" -o $a = "у" -o $a =  "е" -o $a =  "о" -o $a = "э" -o $a = "я" -o $a = "и" -o $a = "ю" ]; then echo "Гласная"
else echo "Согласная" 
fi
