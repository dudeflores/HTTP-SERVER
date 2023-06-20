const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [

    {
        id: 0,
        name: 'Sir Issac Newton',

    }, 
    {
        id: 1,
        name: 'Albert Einstein',
    },
    {
        id: 2,
        name: 'Nikola Tesla',
    }

]

/*const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-Type': 'Application/json',
    });

    res.end(JSON.stringify({
        id:1,
        name: 'Sir Isaac Newton',
    }));
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});*/

Server.on('request', (req, res) => {
    const items = req.url.split('/');
    // /friends/2 => ['', 'friends', '2']
    if (items[1] === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (items.length ===3) {
            const friendsIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendsIndex]));
        } else {
        res.end(JSON.stringify(friends));
        }
    }   else if (items[1] === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('body');
        res.write('ul');
        res.write('<li>Hello Isaac!<li>');
        res.write('<li>What are your thoughts on astronomy?<li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }   else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listing on port ${PORT}...`);
});