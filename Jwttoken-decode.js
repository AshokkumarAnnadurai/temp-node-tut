const jwt = require('jsonwebtoken')

const secret = "dillion-secret"

// const token = jwt.sign({ email : "ashokkumar.workofficial@gmail.com"}, secret);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzaG9ra3VtYXIud29ya29mZmljaWFsQGdtYWlsLmNvbSIsImlhdCI6MTY3NjQzNzQ1MH0.6LBjIBKT2IougWejzCPdpHHikSE9L7mrpIOUheeoeik"

const decoded = jwt.decode(token);

console.log(decoded);

const verify = jwt.verify(token,secret)
console.log(verify)

// function parseJwt (token) {
//     var base64Url = token.split('.')[1];
//     var base64 = decodeURIComponent(atob(base64Url).split('').map((c) =>{
//         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//     }).join(''));
//     return JSON.parse(base64)
// };