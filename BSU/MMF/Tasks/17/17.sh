#!/bin/bash
echo "Enter two numbers:"
read a
read b
echo "Choose the operation:"
    echo "1) +"
    echo "2) -"
    echo "3) *"
    echo "4) /"
    echo "5)exit"
    read i;
case $i in
        1) echo $(($a+$b));;
        2) echo $(($a-$b));;
        3) echo $(($a*$b));;
        4) echo $(($a/$b));;
        5) exit
esac 
