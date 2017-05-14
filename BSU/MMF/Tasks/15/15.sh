#!/bin/bash
echo "Enter the sides: "
read a
read b
read c
if [ $a -eq $b -a $a -eq $c ]; then echo "Equilateral!"
fi
if [ $a = $b -a $a != $c -o $a = $c -a $a != $b -o $c = $b -a $b != $a ]; then echo "Two sides are equal!"
fi
if [ $(( $a*$a+$b*$b)) = $(($c*$c)) -o $(( $a*$a+$c*$c)) = $(($b*$b)) -o $(( $c*$c+$b*$b)) = $(($a*$a)) ]; then echo "Right!"
fi
