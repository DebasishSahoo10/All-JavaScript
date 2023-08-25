# Javascript Datatypes

1. Difference between null and undefined?

: (0) Both these data types represents absent of an value in JS.
(a) Null is actually an object in JS, while undefined is just a placeholder type of data.
(b) Null can be an actual value to a variable, but when variable is declared but not initialised then it will be undefined.
(c) Null == Undefined // TRUE
Null === Undefined // FALSE
(d) In a Boolean context, Null is considered Falsy, Undefined is also considered Falsy
(e) In a Arithimetic context, Null is treated as 0 and undefined is treates as NaN.  