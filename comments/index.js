const express = require('express')
const { randomBytes } = require("crypto")
const bodyParser = require("body-parser")
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

const cors = require("cors")
app.use(cors())

// temp comment storing
const commentsByPostId = {}


app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);

})
app.post("/posts/:id/comments", async (req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content, status: "pending" });

    await axios.post('http://localhost:4005/events', {
        type: 'CommentCreated',
        data: {
            id: commentId,
            content,
            postId: req.params.id,
            status: "pending"
        }
    })

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);

})

//for event bus
app.post("/events", (req, res) => {
    console.log('Recieved event in comments service', req.body.type);
    res.send({});
})

app.listen(4001, () => {
    console.log('comments Listening on port 4001');
})