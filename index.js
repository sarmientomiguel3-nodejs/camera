const express = require('express');
const restAPI = require('./routes');
const app = express();
app.use(express.json());
restAPI(app);
app.listen(3000);