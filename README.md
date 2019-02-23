## Javascript: my-first-simple-proxy
* Need: npm node nodemon
* Run the server: nodemon start
* Browser: http://127.0.0.1:3000/?url=http://www.labelindo.com

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
  host: 'www.labelindo.com',
  port: null,
  hostname: 'www.labelindo.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://www.labelindo.com/' }
Redirecting to:
{ port: 80, host: 'www.labelindo.com', method: 'GET', path: '/' }
```
