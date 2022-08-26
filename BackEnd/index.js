const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors');
const { application } = require('express');

connectToMongo();
const app = express()
let port =process.env.port || 5000
var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.use(cors());
app.use(express.json());

// Available routes
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// application.listen(server_port, server_host, function() {
//     console.log('Listening on port %d', server_port);
// })
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
})