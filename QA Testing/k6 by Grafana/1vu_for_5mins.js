// 1 Virtual user running for 5 minutes

import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    const res = http.get('https://groupiig.techarttrekkies.com.np/');
    console.log('Status code: ${res.status}');
    sleep(1);
}
