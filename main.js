'use strict'

const app = require('./server');
const port = process.env.PORT || 4500;

app.listen(port, () => console.log(`app is listening on port ${port}`))