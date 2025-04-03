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