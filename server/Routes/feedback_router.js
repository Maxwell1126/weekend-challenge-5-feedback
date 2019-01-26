const express = require('express');
const feedbackRouter = express.Router();
const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'prime_feedback',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
});


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