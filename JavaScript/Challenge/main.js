//Practicing to pause the execution of JavaScript code for a specified duration
console.log("start");
function block_mainthread(time)
{
    const milliseconds = time*1000; //second to millisecond
    const startTime = performance.now();
    while (performance.now() - startTime < milliseconds) {
      // Blocking the main thread
    }
  }
  block_mainthread(5); // Block for 5 second
console.log("End");


//Practicing Exception Handling Statements
try{
    let result =b;
    console.log("No Error");
}
catch (a){
    console.error("An error occurred: ", a.message);
    //we can also show the error in this way:
    console.error("An error occurred: ",a);
}
console.log("Program continues");