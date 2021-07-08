const fs = require('fs')
const path = require('path')

const hamza = process.argv[2]
const extintion = '.' + process.argv[3]

fs.readdir(hamza,(err, datas)=> {
  if (err){ 
      console.error(err)
    }
  datas.forEach((data) =>{
      if (path.extname(data) === extintion) {
          console.log(data)
      }
  })
})