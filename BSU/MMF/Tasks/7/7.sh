#!/bin/bash
if test $# -eq 3; then
	sum=$(($1+$2+$3))
	echo $sum/3 | bc -l
else echo "Only three arguments 
required"
fi
