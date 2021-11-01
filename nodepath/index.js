const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end("<h1>Hello world!</h1>")
    }
    if (req.url == "/users"){
        res.writeHead(200, {
            'Content-type' : 'text/json'
    })

    const users = [
        {name:"Vitaliy Tsal", age:30},
        {name:"Diana", age:14.1}
    ]
    
    res.end(JSON.stringify(users));
    }
})


server.listen(1400, () => {
    console.log("Server running...");
})

/*const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'notes',), err => {
    if(err) throw err

    console.log('created')
})*/

/*const path = require('path');

console.log(__filename);

console.log(path.basename(__filename));

console.log(path.extname(__filename));*/