const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ben:42dg25I66ZgyuBVc@cluster0.mpmybdn.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});

async function runDB() {
    try {
    await client.connect();
    
    } catch (err) {
        console.error(err);
    }
}

module.exports = { runDB, client };