const http = require('http')

http.createServer((req,res)=>{
    console.log('process starts');
    res.end("hello ashok")
}).listen(5000, ()=>{
    console.log("server listening the server:......5000");
})