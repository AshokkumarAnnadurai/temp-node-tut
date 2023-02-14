const http = require ('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end(`welcome to the home page`)
    }
    if(req.url === '/about'){
        res.end(`welcome to the about page`)
    }
    res.end(
        `<h1> Oops this is wrong</h1>
        <p>we can't seem the page you are looking for</p>
        <a href='/'>back home</a>`
    )
})

server.listen(5000);