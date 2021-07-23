const {readFileSync,writeFileSync, read} = require('fs')

const first=readFileSync('./content/first.txt','utf8');
const second=readFileSync('./content/second.txt','utf8');


writeFileSync('./content/result-sync.txt',`here is the result ${first}, ${second}`,{flag:'a'})
const third=readFileSync('./content/result-sync.txt','utf8');

console.log(third)