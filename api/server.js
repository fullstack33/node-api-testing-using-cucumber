const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;
const db = require('./database/db')
db()
const app = express()

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const allRoute = require('./router/route');
app.use('/user/api', allRoute);


app.listen(port, () => console.log(`Server Start at Port ${port}`))
