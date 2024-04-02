var express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ben:42dg25I66ZgyuBVc@cluster0.mpmybdn.mongodb.net/?retryWrites=true&w=majority";
var app = express()


app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

var port = process.env.port || 3000;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

let catCardList = [];

async function run() {
    try {
    await client.connect();
    const database = client.db('SIT725_proj4');
    const cats = database.collection('Cats');

    catCardList = await cats.find({}, { projection: { _id: 0 } }).toArray();
    
    } catch (err) {
        console.error(err);
    }
}


app.get('/', (req, res) => {res.render('index.html')}); 

app.get('/api/cars', (req,res) => {
    run()
    res.json({
        statusCode: 200,
        data: catCardList,
        message: "Success"
    })
})

app.post('/api/cats', async (req, res) => {
    const newCat = req.body;
    const database = client.db('SIT725_proj4');
    const cats = database.collection('Cats');

    try {
        await cats.insertOne(newCat);
        res.json({
            statusCode: 200,
            message: "Success"
        })
    } catch (err) {
        console.error(err);
        res.json({
            statusCode: 500,
            message: "Error inserting record"
        })
    }

})

app.listen(port,()=>{
    run()
    console.log("App listening to: http://localhost:"+port)
})