const fs = require('fs')

const content = 'this is what i want to write to file'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})