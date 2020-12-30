const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const outputHLS = express.static(path.join(__dirname, 'src', 'output'))

app.use(cors())
app.use('/static', outputHLS)

app.listen(3000, () => {
    console.log('listening!')
})