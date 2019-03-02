const express = require('express');
const feedbackRouter = express.Router();
var pool = require('../modules/pool.js');

//This post statement will use a database query to insert the feedback object
//into the database.
feedbackRouter.post('/', (req, res) => {
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding",
                                    "support", "comments")
                       VALUES ($1,$2,$3,$4);`;
    pool.query(queryText, [req.body.feelings, req.body.understanding,
    req.body.support, req.body.comments,]).then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error, 'in post');
        res.sendStatus(500);
    });
})

module.exports = feedbackRouter;