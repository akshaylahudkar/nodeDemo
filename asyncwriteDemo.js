const {readFile,writeFile, read} = require('fs')
var first=''
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    first =result

    console.log('done with first task')
    
});
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second =result
    writeFile(
        './content/result-sync.txt',
        `here is the result ${first}, ${second}`,
        {flag:'a'},
        (err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log('done with writing too')
        }
        )
    console.log('done with second task')
});




 

console.log('done') 