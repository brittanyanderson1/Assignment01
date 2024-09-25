/*
M2: Assignment 1
Author: Brittany Anderson
Date: 9/24/2024
 */

// STEP 1: Convert the following highlighted identifiers to Camel Case notation:

//let some_month --> let someMonth
//function the Month() --> function theMonth()
//let current-month --> let currentMonth
//let summer_month --> let summerMonth
//let MyLibrary-function --> let MyLibraryFunction

// STEP 2: Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression,
// and a null literal expression.

// Numeric Literal Expression: 42
// String Literal Expression: "Howdy Yall!"
// Boolean Literal Expression: True
// Null Literal Expression: null

// STEP 3: Give me two examples of complex / variable expressions.

// let totalCost = (pricePerItem * quantity) + shippingCost - discount;
// let fullName = firstName + " " + lastName;


// STEP 4: Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State,
// Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

// 1. let strFirstName;
// 2. let strLastName;
// 3. let strAddress;
// 4. let strCity;
// 5. let strState;
// 6. let numZipCode;
// 7. let numYourAge;
// 8. let strReferralSource;
// 9. let boolMayWeContactYou;

// STEP 5: Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

// 1st way: 
// let strFirstName;
// strFirstName = "John";
// let numYourAge;
// numYourAge = 30;
// let boolMayWeContactYou;

// 2nd way:
// let strFirstName = "John";
// let numYourAge = 30;
// let boolMayWeContactYou = true;

// 3rd way:
//const strFirstName = "John";
// const numYourAge = 30;
// const boolMayWeContactYou = true;
// boolMayWeContactYou = true;

// STEP 6: Create a variable. Add a number and a string and display the coerced result in the browser’s console window.

// let number = 42;
// let text = " is the best age to be.";
// let result = number + text;

//console.log(result);

// STEP 7: Create two variables.For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

// let isAvailable = true;
// let availabilityMessage = "The item is available: " + isAvailable;
// console.log(availabilityMessage);

// The item is available: true

// let quantity = 5;
// let isInStock = false;
// let stockMessage = quantity + isInStock;
// console.log(stockMessage);

// 5

// STEP 8: Is the following string literal valid? If not, how would you fix it?
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString)

// No, we need to add a semicolon to the end of the string.

// STEP 9: Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.

// let nullValue = null;
// console.log(nullValue);
// let undefinedValue;
// console.log(undefinedValue);

// STEP 10: Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

// String literal
// console.log(typeof "Hello, World!");

// Number literal
// console.log(typeof 42);

// Boolean literal
// console.log(typeof true);

// Object literal (note: typeof null returns "object" due to a historical quirk in JavaScript)
// console.log(typeof { name: "Alice", age: 30 });
// console.log(typeof null);

// Undefined literal
// let undefinedVariable;
// console.log(typeof undefinedVariable); 

// STEP 11: Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Zak Ruvalcaba, welcome to the JavaScript class!
// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text.
// One after the text “Hello” and a second one after your name and before the comma.

// let userName = "Brittany Anderson";
// alert("Hello " + userName + ", welcome to the JavaScript class!");

// STEP 12: Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.

// let name = "Brittany Anderson";
// alert("Hello " + name + ", welcome to the JavaScript class!");

// STEP 13: Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// let name = "Brittany Anderson";
// let course = "JavaScript";
// alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 14: Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

// let name = "Zak Ruvalcaba";
// let course = "JavaScript";
// alert(`Hello ${name}.
// Welcome to the ${course} class!`);

// STEP 15: Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.

// let name = prompt("Please enter your name:");
// let course = "JavaScript";
// alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 16: Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

// let name = prompt("Please enter your name:");
// let course = prompt("Please enter the class you are taking:");
// alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 17: Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.

// let x = 10;
// let y = 20;
// let sum = x + y;
// console.log("The sum of x and y is: " + sum);

// STEP 18:Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

// let x = 20;
// x += 20;
// console.log(x);

// STEP 19: Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.

// let x = 20;
// x *= 5;
// console.log(x);

// STEP 20: Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.

// let x = 20 % 3;
// x /= 1;
// console.log(x); 

// STEP 21: Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

// let age = 25;
// let hasLicense = true;
// let isEligible = (age >= 18) && hasLicense;

// console.log("Is the person eligible to drive? " + isEligible);

// STEP 22: Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

//let temperature = 75;
// let isRaining = false;
// let isGoodDayForPicnic = (temperature < 60) || isRaining;

// console.log("Is it suitable for a picnic? " + isGoodDayForPicnic);