# npm packages

1- tempy: Get a random temporary file or directory path

<https://www.npmjs.com/package/tempy>

2- GeoIP-lite: A native NodeJS API for the GeoLite data from MaxMind.

<https://www.npmjs.com/package/geoip-lite>

```js
var geoip = require('geoip-lite');

var ip = "207.97.227.239";
var geo = geoip.lookup(ip);

console.log(geo);
{ range: [ 3479298048, 3479300095 ],
  country: 'US',
  region: 'TX',
  eu: '0',
  timezone: 'America/Chicago',
  city: 'San Antonio',
  ll: [ 29.4969, -98.4032 ],
  metro: 641,
  area: 1000 }
```

3- public-ip: Get your public IP address - very fast!

```js
import {publicIp, publicIpv4, publicIpv6} from 'public-ip';

console.log(await publicIp()); // Falls back to IPv4
//=> 'fe80::200:f8ff:fe21:67cf'

console.log(await publicIpv6());
//=> 'fe80::200:f8ff:fe21:67cf'

console.log(await publicIpv4());
//=> '46.5.21.123'
```
