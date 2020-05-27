var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');


app.use(cors({
    origin: [
        'http://jo-ding.web.app',
        'https://jo-ding.web.app',
        'http://localhost:5000',
    ],
    credentials: true
}));
app.use('/', proxy('work.moonshine.tw:9978'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
