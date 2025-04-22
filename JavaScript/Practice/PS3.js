//Printing the marks of a student in an object using for loop

let marks = {
    Nischal: 69,
    Sweksha: 75,
    Shweta: 80,
    Sadikshya: 70,
    Abhisekh: 85,
}

for (let i = 0; i < Object.keys(marks).length; i++)
{
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

//Printing the marks of a student in an object using for in loop

for (let key in marks)
{
    console.log("The marks of " + key + " is " + marks[key]);
}

//Print "Try Again" until the user enters the correct number

let correct_number = 48;
let num;
num = prompt("Enter a number: ");
while(num != correct_number)
{
    console.log("Try Again");
    num = prompt("Enter a number: ");
}
console.log("You have entered the correct number,", num);

//Function to find mean of 5 numbers

let a, b, c, d;
a = prompt("Enter first number: ");
a = Number.parseInt(a);
b = prompt("Enter second number: ");
b = Number.parseInt(b);
c = prompt("Enter third number: ");
c = Number.parseInt(c);
d = prompt("Enter fourth number: ");
d = Number.parseInt(d);
const mean = (a, b, c, d) => {
    return (a + b + c + d)/4;
}
console.log("The mean of " + a + ", " + b + ", " + c + " and " + d + " is " + mean(a, b, c, d));