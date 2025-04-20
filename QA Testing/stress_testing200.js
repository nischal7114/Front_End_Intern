import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
    stages: [
    { duration: '1m', target: 50},
    { duration: '5m', target: 50},
    { duration: '1m', target: 100},
    { duration: '5m', target: 100},
    { duration: '1m', target: 150},
    { duration: '5m', target: 150},
    { duration: '1m', target: 200},
    { duration: '5m', target: 200},    
    ]
};
export default function () {
    http.get('https://groupiig.techarttrekkies.com.np/');
    sleep (1);
}