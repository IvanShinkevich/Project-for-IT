#!/bin/bash
div=3
if test $# -eq 3; then
 echo $((($1+$2+$3)/$div)) | bc -l
else echo "Only three arguments 
required"
fi
