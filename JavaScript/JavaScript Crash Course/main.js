console.log("Hello World!");
console.error('This is an error');

const name = 'Nischal';
const age = 23;
const array = 'Nischal,Sweksha,Shweta,Sadikshya,Abhisekh'

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
console.log(`My name is ${name}`);
console.log(`My name is ${name} and I am ${age}`);

//string manipulation
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0,3).toUpperCase());
console.log(name.split(''));
console.log(array.split(',')); //separating array this way is super cool

//Arrays - variables that hold multiple values
const fruits = ['Apples', 'Oranges', 'Pears'];
console.log(fruits);
console.log(fruits[2]);
//adding new array (Manipulation of arrays)
fruits[3]='Grapes';
fruits.push('Mangoes');
fruits.unshift('Strawberries');
fruits.pop();
console.log(Array.isArray(name));
console.log(fruits.indexOf('Oranges'));
console.log(fruits);

const person={
    firstName:'Nischal',
    lastName:'Shrestha',
    age:23,
    hobbies:['Music', 'Gym', 'Travel'],
    address:{
        street:'Gaurighat',
        city:'Kathmandu',
        country:'Nepal'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//Deconstructing
const {firstName, address: {city}} = person;
console.log(firstName);
console.log(city);

const me ={
    name:"nischal",
    age:30,
    city:"Kathmandu"
};

console.log("My age is" + " " + age);

let text = "";
for(let x in me) {
    text += me[x] + " ";
};
console.log(text);

const arr=Object.values(me);
console.log(arr);

console.log("37" + 7);
console.log(37+7);
console.log(+"37")+(+"3");
console.log(+"1.1") + (+"1.1");