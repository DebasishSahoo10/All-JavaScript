# Var - Let - Const

1. Difference Between Var/Let/Const

(a) Scope : Var is either Global scoped or Functional Scoped. Both Let and Const are block scoped.
(b) Declaration without Initialization : Var and Let keywords accept that, but if it is declared with Const, then it has to be declared and initialised at once.
(c) Value Updation : Let and Var allows that, but Const doesn't.
(d) Re-declaration : Var can re-declared within the same scope but Let and Const can not re-declared within the same scope.

2. What is Hoisting?

(a) Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in your code.
(b) However, it's important to note that only the declarations are hoisted, not the initializations or assignments. This means that while you can access and use a variable or function before it is declared, any assignment or initialization will still happen at the original position in the code.
(c) However, it's important to note that hoisting only applies to function declarations and variable declarations using the var keyword. It does not apply to variables declared with let or const, or to function expressions.

3. What is Temporal Dead Zone?

(a) The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when accessing variables declared with let and const before they are initialized.
(b) In JavaScript, variables declared with let and const are hoisted to the top of their block scope, similar to how variables declared with var are hoisted. However, unlike var variables, which are initialized with the value undefined during hoisting, variables declared with let and const remain uninitialized in the TDZ until their actual declaration is reached in the code.
(c) Attempting to access a variable in the TDZ results in a ReferenceError. This is because the variable exists in the scope, but it has not been assigned a value yet.
(d) The Temporal Dead Zone serves as a safeguard to catch potential errors caused by accessing variables before they are properly initialized. It encourages developers to declare variables at the top of their scope and helps prevent accidental use of uninitialized variables.