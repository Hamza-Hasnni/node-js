const fs = require("fs");
const hamza = process.argv[2];
const space =fs.readFileSync(hamza).toString()
const countSpace=space.split(/\n/).length-1 

console.log(countSpace)