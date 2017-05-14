#!/bin/bash

a=2
b=3
c=4
max=$a
if [ $max -lt $b ]; then
	max=$b
fi
if [ $max -lt $c ]; then 
	max=$c
fi
echo "Max is $max"
