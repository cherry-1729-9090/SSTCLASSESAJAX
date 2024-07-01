const path = require('path');
const p = '/home/cherry/Documents/AJAX_CLASSES/SSTCLASSESAJAX/src/ReadWrite/file1.txt';
const fs = require('fs');
const dirname = path.dirname(p);
const extension = path.extname(p);
console.log(dirname);
console.log(extension);

const content = fs.readFileSync('file2.txt','utf-8',(err)=>{
    if(err)
    console.log("error");
    else
    console.log("read");
});

fs.mkdir('kothadir',(err)=>{
    if(err)
    console.log("error");
    else
    console.log("folder created");
});

fs.writeFile('kothadir/file.txt',content,(err)=>{
    if(err)
    console.log("error");
    else
    console.log("file created");
})