// let express = require('express');
import express from "express";

let app = express();

// Tells us what to do when a get request at the given root is called (The route is '/')
app.get('/', (req, res) => {
    res.send("Hello Worlds!");
})

app.listen(3000);