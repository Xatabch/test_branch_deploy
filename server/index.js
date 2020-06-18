'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log(`Server listening port ${port}`);
});