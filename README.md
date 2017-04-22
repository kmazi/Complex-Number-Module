# Complex-Number-Module
This is a library containing functions to perform addition, subtraction, multiplication and division of complex numbers

# Introduction
Complex numbers are numbers that contain both a real part and an imaginary part;
This project consists of several functions, exposed as an exportable module, that can be used to carry out complex number operations.

__Features of the Complex-Number-Module
* Adds two or more complex numbers and returns the result.
* Subtracts two or more complex numbers and returns the result.
* Multiplies two or more complex numbers and returns the result.
* Divides two or more complex numbers and returns the result.

# Dependencies
__Node.js__- The functions in the library executes on the command line through this package.
__Jasmine__- This library depends on this package for testing the functionality of its functions.

# Usage
Navigate to a specific directory on terminal
* Clone this repository on that directory using: git clone git@github.com:kmazi/Complex-Number-Module.git`.
* Navigate to the /app folder and import the complex.js file into your current file
* With the reference to the *complex.js* file, call any of the functions( addComplex, subComplex, multComplex, divComplex).
*Note that the functions accepts any number of complex numbers as argument of type string.*

# Example
let complex = require("<stored-directory>/complex.js");
```
complex.addComplex("3+i","4+3i","9+4i","-2+3i");
 complex.multComplex("4+3i","9+4i","-2+3i");
 complex.subComplex("3+i","4+3i","9+4i");
 complex.divComplex("9+4i","-2+3i");
```

