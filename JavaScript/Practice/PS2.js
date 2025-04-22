//Q1. Use logical operators to find whether the age of a person lies between 10 and 20
let age = prompt("What is your age?");
age = Number.parseInt(age);
if (age>10 && age<20)
{
    console.log("Your age lies between 10 and 20");
}
else
{
    console.log("Your age does not lie between 10 and 20");
}

//Q2. Demonstrate the use of Switch case statements in JS
let y_age = prompt("What is your age?");
y_age = Number.parseInt(y_age);
switch(y_age)
{
    case 11:
        console.log("Your age is 11");
        break;
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
        break;
    default:
        console.log("Your age is not special");
}

//Q3. Find whether a number is divisible by 2 and 3
let num = prompt("Enter a number: ");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0)
{
    console.log("Your number is divisible by 2 and 3");
}
else
{
    console.log("Your number is not divisible by 2 and 3");
}

//Q4. Find whether a number is divisible by either 2 or 3
let num1 = prompt("Enter a number: ");
num1 = Number.parseInt(num1);
if (num1 % 2 == 0 || num1 % 3 == 0)
{
    console.log("Your number is divisible by 2 or 3");
}
else
{
    console.log("Your number is not divisible by 2 or 3");
}

//Q5. Print "You can Drive" or "You cannot Drive" based on age being greater thatn 18 using ternary operator
let age1 = prompt("Enter your age");
age1 = Number.parseInt(age1);
let a  = age1 > 18 ? "You can drive" : "You cannot drive";
console.log(a);