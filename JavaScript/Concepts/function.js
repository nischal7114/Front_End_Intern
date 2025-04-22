//Classic function style
function avg (x, y)
{
    const result = (x + y)/2
    console.log("The average of the two numbers is: ", result);
    return result ;
}
a = prompt("Enter first number: ");
b = prompt("Enter second number: ");

a = Number.parseInt(a);
b = Number.parseInt(b);
avg(a,b);

//Arrow function
const sum = (c, d) => 
{
    const result = (c + d)
    console.log( "The sum of the two numbers is: ", result);
    return result;
}
sum(a,b);