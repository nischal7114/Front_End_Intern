//1 Virtual user running for 5 minutes

// import http from 'k6/http';
// import { sleep } from 'k6';

// export default function () {
//     const res = http.get('https://groupiig.techarttrekkies.com.np/');
//     console.log('Status code: ${res.status}');
//     sleep(1);
// }

//Test which performs 10 get HTTP requests to a URL and waits for 1 second between requests

//Import http module to make HTTP requests
import http from 'k6/http';
//Import sleep function to introduce delays
import { sleep } from 'k6';
export const options = {
    //Define the number of iterations for the test
    iterations: 10,
}
// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function() {
    //make a get request to the target URL
    http.get('https://groupiig.techarttrekkies.com.np/');
    //Sleep for 1 second to simulate real-world usage
    sleep(1);
}