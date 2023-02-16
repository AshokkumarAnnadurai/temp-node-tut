const filesystem = require ('fs')

console.log("starting the project");

filesystem.readFile('./content/first.txt','utf8', (err,res)=>{
    if (err){
        console.log(err);
    }
    console.log(res);
    console.log('taskcompleted');
});

console.log('next task');