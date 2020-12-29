// provide an endpoint that will 

const express = require('express');
const path = require('path');

const app = express();

const outputHLS = express.static(path.join(__dirname, 'src', 'output'))

app.use('/static', outputHLS)

app.listen(3000, () => {
    console.log('listening!')
})