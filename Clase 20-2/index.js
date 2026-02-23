//EJEMPLO DE SERVIDOR
let express = require("express");

const app = express()

let BASE_URL_API = "/api/v1";

app.use("/", express.static("./static"));

let contacts = [
    {
        "name":"peter",
        "phone" :12341234
    },
    {
        "name":"Jhon",
        "phone" :12341234
    }
]

app.get(BASE_URL_API+"/contacts", (req, res) => {
    res.send(JSON.stringify(contacts, null, 2));

})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})