#!/bin/bash
for i in $(ls);do
if cd $i 2>/dev/null; then 
	echo $i is a directory
	cd .. 
	else 
	echo $i is a file 2>/dev/null
fi 
done
