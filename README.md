## Javascript: my-first-simple-proxy
* Need: npm node nodemon
* Run the server: nodemon start
* Browser: http://127.0.0.1:3000/?url=http://www.cisco.com

```$ nodemon start
[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node start proxy.js`
Server running at http://127.0.0.1:3000/
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.cisco.com',
  port: null,
  hostname: 'www.cisco.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://www.cisco.com/' }
Redirecting to:
{ port: 80, host: 'www.cisco.com', method: 'GET', path: '/' }
```
