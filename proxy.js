var http = require('http');
var url = require('url');

function notFound(res) {
    res.writeHead(404, "text/plain");
    res.end("404: Missing URL, file not found");
}

http.createServer(function(b_req, b_res) {

    // Parser the request's url
    var b_url = url.parse(b_req.url, true);

    console.log("Enter Server CB with REQUEST URL");
    console.log(b_url);

    var p_url;

    if (!b_url.query || !b_url.query.url) {
        // If there is no Query URL, then use href.
        p_url = url.parse(b_url);
    }
    else {
        // If there is a query URL, read and parse the query url (/?url=p_url)
        p_url = url.parse(b_url.query.url);
    }

    console.log("Extracted URL");
    console.log(p_url);

    var options = {
        port: p_url.port || 80,
        host: p_url.hostname || 'localhost',
        method: b_req.method || 'GET',
        path: p_url.pathname || '/'
    };

    console.log("Redirecting to: ");
    console.log(options);

    var p_req = http.request(options);
    p_req.end();

    p_req.addListener('response', function(p_res){
        // Pass through headers
        b_res.writeHead(p_res.statusCode, p_res.headers);

        // Pass through data
        p_res.addListener('data', function(chunk){
            b_res.write(chunk);
        });

        // End Request
        p_res.addListener('end', function() {
            b_res.end();
        });
    });
}).listen(3000, "127.0.0.1");

console.log("Server running at http://127.0.0.1:3000/");