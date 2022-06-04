const express = require('express');
const app = express();
const multipart = require('connect-multiparty');
const bodyParser = require('body-parser')
const userRouter = require('./route/user')
const deviceRouter = require('./route/device')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(multipart());

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.get('/healthcheck', (req, res) => {
    res.status(200).send('System live')
})


app.use('/users', userRouter);
app.use('/devices', deviceRouter);

app.listen(3000, function () {
    console.log('server started')
});
