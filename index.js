var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');


app.use(cors({
    credentials: true
}));
app.use('/', proxy('work.moonshine.tw:9978'));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
