const fs = require("fs");
const hamza = process.argv[2];
fs.readFile(hamza,(err,data)=>{
    if (err) throw err ;
    console.log(data.toString().split(/\n/).length-1)
})