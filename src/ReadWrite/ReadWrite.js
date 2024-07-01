const { isUtf8 } = require('buffer');
const { error } = require('console');
const fs = require('fs');
const data = fs.readFileSync('file1.txt');
console.log(data.toString());

fs.writeFileSync('file1.txt','cheppanu ra babu',(error)=>{
    console.log("file modified")
})

fs.appendFileSync('file1.txt',' Hello World !',(err)=>{
    console.log("file appended")
})

// fs.rmdir('kothadir',(err)=>{
//     if(err)
//     console.log("error");
//     else
//     console.log("folder created");
// });

fs.rename('file1.txt','file2.txt',(err)=>{
    if(err)
    console.log("error");
    else
    console.log("renamed");
})