#!/bin/bash
echo "Enter the x,y please:"
read x
read y
if [ $x -gt 0 ]; then 
	if [ $y -gt 0 ]; then echo "First quadrant"
	 elif [ $y -lt 0 ]; then echo "Fourth quadrant"
	 elif [ $y  -eq 0 ]; then echo "On the OX axe lies"
	fi
fi
if [ $x -lt 0 ]; then 
	if [ $y -gt 0 ]; then echo "Second quadrant"
	elif [ $y -lt 0 ]; then echo "Third quadrant"
	elif [ $y -eq 0 ]; then echo "On the OX axe lies"
	fi
fi
if [ $x -eq 0 ]; then echo "On the OY axe lies"
fi
