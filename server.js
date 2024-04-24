var express = require("express")
var app = express()
const { runDB } = require('./dbConnection')
const indexRoute = require('./routes/indexRoute')
const catRoutes = require('./routes/catRoutes');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

var port = process.env.port || 3000;

app.use('/', indexRoute);
app.use('/api', catRoutes);

http.listen(3000, () => { 
    runDB()
    console.log("App listening to: http://localhost:"+port) 
});

io.on('connection', (socket) => { 
    console.log('User Connected!');
    socket.on('disconnect', () => { 
        console.log('user disconnected'); }
    )

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10))
    },1000)
});

