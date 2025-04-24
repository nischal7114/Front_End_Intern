import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
    { duration: '5m', target: 50},
    { duration: '30m', target: 50},
    { duration: '5m', target: 0}, 
    ]
};
export default function () {
    http.get('https://groupiig.techarttrekkies.com.np/');
    sleep (1);
}