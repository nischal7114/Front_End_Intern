console.log("Labeled statement");
outer: for (let a=0;a<3;a++){
    inner: for (let b=0; b<3;b++){
        if (a === 1 && b === 1){
            break outer;
        }
        console.log(`a: ${a}, b: ${b}`);
    }
}
console.log("Loop finished");

console.log("");

console.log("continue statement");
for(let i = 0; i<10;i++)
{
    if (i % 2 === 0){
        continue;
    }
    console.log(i);
}
console.log("Loop Finished");

