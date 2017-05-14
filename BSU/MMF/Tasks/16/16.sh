#!/bin/bash
echo "Enter the digit from 1 to 7"
read case
if [ $case -gt 0 -a $case -lt 8 ]; then 
case $case in
1) echo "Monday";;
2) echo "Tuesday";;
3) echo "Wednesday";;
4) echo "Thursday";;
5) echo "Friday";;
6) echo "Saturday";;
7) echo "Sunday";;
esac
else echo "The digit from 1 to 7!Run the program more:)"
fi
