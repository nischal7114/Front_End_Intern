import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
        { duration: '1m', target: 200 }, //ramp up
        { duration: '5m', target: 200 }, //stable
        { duration: '1m', target: 800 }, //ramp up
        { duration: '5m', target: 200 }, //stable
        { duration: '1m', target: 1000 }, //ramp up
        { duration: '5m', target: 1000 }, //stable 
        { duration: '5m', target: 0 }, //ramp down to 0 users
    ]
};
export default function () {
    http.get('https://groupiig.techarttrekkies.com.np/');
    sleep(1);
}