const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express()
app.use(bodyParser.json())

app.post('/events', (req, res) => {
    const event = req.body;
    axios.post("http://localhost:4000/events", event).catch((err) => console.log(err.message, "error in eventbus post"))
    axios.post("http://localhost:4001/events", event).catch((err) => console.log(err.message, "error in eventbus comments"))
    axios.post("http://localhost:4002/events", event).catch((err) => console.log(err.message, "error in eventbus query"))
    axios.post("http://localhost:4003/events", event).catch((err) => console.log(err.message, "error in eventbus moderation"))

    res.send({ status: 'OK' })
})


app.listen(4005, () => {
    console.log(
        'event bus is listening on 4005'
    );
})