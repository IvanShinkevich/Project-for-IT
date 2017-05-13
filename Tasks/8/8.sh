#!/bin/bash

echo Введите первое чисо
read first
echo Введите второе число
read second
test $first -gt $second && echo Первое больше || echo Второе больше
