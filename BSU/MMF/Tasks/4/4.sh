#!/bin/bash
echo Введите Первое число
read first
echo Введите Второе число
read second
echo $first/$second | bc -l
