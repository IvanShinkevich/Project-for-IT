#!/bin/bash
echo -n "Введите высоту триугольника Паскаля "
read NR
typeset -A arr
for i in `seq 0 $NR`;do
arr[$i,0]=1
arr[$i,$i]=1 
p=$((i-1))
for ((j=1;j<$i;j++));do
a=${arr[$((i-1)),$((j-1))]}
b=${arr[$((i-1)),$j]}
arr[$i,$j]=$((a+b))
done
done
for ((i=0;i<=$NR;i++));do
for((j=0;j<=$i;j++))
do
echo -n ${arr[$i,$j]} " "
done
printf "\n"
done
