const { Cat } = require('../models/cat')


const getAllCats = async (req,res) => {
    let cat = await Cat.create();
    cat.getDatabaseCats()

    res.json({
        statusCode: 200,
        data: cat.catCardList,
        message: "Success"
    })
}

const saveCat = async (req, res)  => {
    let cat = await Cat.create();
    const newCat = req.body;
    
    try {
        cat.saveCatsToDatabase(newCat)
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

}


module.exports = {getAllCats, saveCat}