

let cool = require("cool-ascii-faces");


// console.log(cool());



let  express = require('express');
const app = express()


app.use("/", express.static("./static"));

app.get('/', (req, res) => {
  res.send(`<html><body><h1> ${cool()} </h1></body></html>`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})







