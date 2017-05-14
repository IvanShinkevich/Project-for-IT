#!/bin/bash
if test $# -eq 3; then
 echo $(($1+$2+$3)/3)
else echo "Only three arguments 
required" quit
fi
