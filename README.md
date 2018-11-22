# Kaprekar's Constant

## Context
Take any four-digit number (whose digits are not all identical) and do the following;
-Rearrange the string of digits to form the largest and smallest 4-digit numbers possible.
-Take these two numbers and subtract the smaller number from the larger.
-Use the number you obtain and repeat the above process.  
The most amazing thing is this: ​Every ​ four digit number whose digits are not all the same will eventually hit 6174, in at most 7 steps, and then stay there!

## Task
Write an algorithm to compute the Kaprekar’s constant on any four-digit number.
The algorithm must do the following:
-Take ​only ​four-digit numbers whose digits are not identical.
-Return the number of steps taken to get to the Kaprekar’s constant (6174).  
Example: using 3524.
5432 – 2345 = 3087
8730 – 0378 = 8352
8532 – 2358 = ​6174
7641 – 1467 = ​6174
This above example should return “3”, because it took 3 steps to get to the constant.

## UI Design
-An input text field to collect the four-digit number.
-Buttons to perform the operation.
-Div to display result.


A live demo of this challenge can be found on [Codepen](https://codepen.io/Chris_Drizzy/pen/rZKZNb)
