var proxy = require('express-http-proxy');
var app = require('express')();
var cors = require('cors');


const allowOrigins = process.env.allowOrigins.split(',');
console.log('Allow origins:');
console.log(allowOrigins);

app.use(cors({
    origin: allowOrigins,
    credentials: true
}));
app.use('/', proxy(process.env.serverAddress));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
