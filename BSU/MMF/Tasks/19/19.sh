#!/bin/bash
echo "Enter smth:"
read a
case $a in 
[a-z]) echo "Letter";;
[1-9]) echo "number";;
[*]) echo "Other";;
esac
