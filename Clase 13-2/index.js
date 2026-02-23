// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello")
// });

// app.listen(port, () => {
//     console.log("Server running on port:" + port)
// });

let cool = require("cool-ascii-faces");
//console.log(cool())

//EJEMPLO DE SERVIDOR
let express = require("express");

const app = express()

app.get('/', (req, res) => {
  res.send(`<html><body><h1>
            ${cool()}
            <h1><body><html>`)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})