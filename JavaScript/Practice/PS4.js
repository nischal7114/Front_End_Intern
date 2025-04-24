//Q1. What will the following print in JavaScript? 
//Console.log("har\"".length)
console.log("har\"".length);

//Q2. Explore the includes, starts with & ends with functions of a string
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
const isincluded = sentence.includes(word);
console.log(isincluded);
console.log(`The word "${word} ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
console.log(word.startsWith("w")); //false
console.log(word.endsWith("d")); //false

//Q3. Write a program to convert a given string to lowercase
let lower = "HELLO";
console.log(lower.toLowerCase());
//Q4. Extract the amount out of this string
//" Please give Rs 1000"
let str = "Please give Rs. 1000";
let amount = Number.parseInt(str.slice("Please give Rs. ".length));
console.log(amount);

//Q5. Try to change 4th character of a given string. Were you able to do it?

//We cannot change the character of a given string as  string is immutable