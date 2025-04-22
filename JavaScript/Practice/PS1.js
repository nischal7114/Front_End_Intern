//Q1. Create a variable of type string and try to add a number to it

let a = "nischal_";
let b = 114;
console.log(a+b);

//Q2. Create a typeof operator to find the data type of the string in above question

console.log("The type of the above conent is", typeof (a+b));

//Q3. Create a const object in JS. Can you change it to hold a number later?

const obj = {
    name: "Nischal",
    semester: 8,
    isPrincipal: false,
}
console.log("The object is", obj);
console.log("We can not change it to hold a number later.");

//Q4. Try to add a new key to the const object in above question

obj['friend'] = "Sweksha";
console.log("The object is", obj);

//here, obj is a reference to the object. We cannot store anything inside obj but we can change the object

//Q5. Write a JS program to create a word meaning dictionary of 5 words
const dict={
    ikigai: " a Japanese concept that translates roughly to \"a reason for being\" or \"a reason to live\"",
    kaizen: " a Japanese term, translates to \"change for the better\" or \"continuous improvement\"",
    discipline: "training expected to produce a specific character or pattern of behavior, especially training that produces moral or mental improvement",
    yakka: "work",
    alchemy: "an imaginary art which aimed to transmute the baser metals into gold, to find the panacea, or universal remedy for diseases, etc. It led the way to modern chemistry",
}

const words = Object.keys(dict);
console.log("Words: ", words);
const meanings = Object.values(dict);
console.log("Meanings: ", meanings);

let word = prompt("Enter option number of the word you want to know meaning of: \nOptions are: \n 1) ikigai \n 2) kaizen \n 3) discipline \n 4) yakka \n 5) alchemy")
word = Number.parseInt(word);

if (word >= 1 && word <= 5)
{
    const selectedWord = words[word-1];
    const meaning = meanings[word-1];
    console.log("The meaning of " + selectedWord + " is " + meaning);
}
else
{
    console.log("Invalid option selected. Please choose a number between 1 and 5");
}