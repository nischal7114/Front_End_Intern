import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
        { duration: '5m', target: 200 }, //ramp up
        { duration: '20m', target: 200 }, //stable
        { duration: '5m', target: 0 }, //ramp down to 0 user 
    ]
};
export default function () {
    http.get('https://groupiig.techarttrekkies.com.np/');
    sleep(1);
}