let factorial = 1;
let num = prompt("Enter a number: ");
num = Number.parseInt(num);
for (let i = 1; i <= num; i++)
{
    factorial = factorial * i;
}
console.log("The factorial of " + num + " is " + factorial);