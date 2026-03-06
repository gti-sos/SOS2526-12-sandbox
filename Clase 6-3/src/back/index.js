import dataStore from 'nedb';

let BASE_URL_API = "/api/v1";
//create database:
let db = new dataStore();


export function loadBackend(app) {

    let contacts = [{ name: "peter", phone: 123456 }, { name: "john", phone: 23456 }];

    db.insert(contacts);

    app.get(BASE_URL_API + "/contacts", (req, res) => {

        db.find({}, (err, data) => { //{}devuelve todo

            let jsonData = JSON.stringify(contacts.map((c) => {
                delete c._id; return c;
            }), null, 2);
            console.log(`JSON Data to be sent: ${jsonData}`);
            res.send(jsonData);

        })

    });
    app.post(BASE_URL_API + "/contacts", (req, res) => {
        let newContact = req.body;

        db.find({ name: newContact.name }, (err, datos) => {
            if (datos.length > 0){
                res.sendStatus(409, "CONFLICT");
            } else {

            }
        });
        console.log(`New contact received: ${JSON.stringify(newContact, null, 2)}`);
        db.insert(newContact);
        res.sendStatus(201, "CREATED");
    });

}