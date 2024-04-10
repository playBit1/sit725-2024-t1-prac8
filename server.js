var express = require("express")
var app = express()
const { runDB } = require('./dbConnection')
const indexRoute = require('./routes/indexRoute')
const catRoutes = require('./routes/catRoutes');


app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

var port = process.env.port || 3000;

app.use('/', indexRoute);
app.use('/api', catRoutes);

app.listen(port,()=>{
    runDB()
    console.log("App listening to: http://localhost:"+port)
})