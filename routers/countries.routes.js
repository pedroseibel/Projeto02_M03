const express = require("express"); 
const router = express.Router(); 
const Country = require("./../model/countries");

router.get('/', (req,res) => {
    res.status(200).json({message:"Routes: /add, /update, /delete, /listall, /listname"});
});

router.post('/add', async (req,res) => { //Adds a new country to the database

    //Validation
    if(!req.body.name){
        res.status(400).json({message: `Please, fill out the "name" field.`});
        return;
    }else if(!req.body.population){
        res.status(400).json({message: `Please, fill out the "population" field.`});
        return;
    }
    else if(!req.body.language){
        res.status(400).json({message: `Please, fill out the "language" field.`});
        return; 
    }
    else if(!req.body.gdp){
        res.status(400).json({message: `Please, fill out the "GDP" field.`});
        return; 
    }

    await Country.create(req.body).then(() => {
        res.status(200).json({message: "Successfully registered!"});
    }).catch((err) => {
        res.status(400).json({message: "Something went wrong!"});
        console.error(err);
    })
});

router.put('/update/:id', async (req,res) => {
    const id = req.params.id;
    if(!req.body.name){
        res.status(400).json({message: `Please, fill out the "name" field.`});
        return;
    }else if(!req.body.population){
        res.status(400).json({message: `Please, fill out the "population" field.`});
        return;
    }
    else if(!req.body.language){
        res.status(400).json({message: `Please, fill out the "language" field.`});
        return; 
    }
    else if(!req.body.gdp){
        res.status(400).json({message: `Please, fill out the "GDP" field.`});
        return;
    }

    await Country.updateOne({ _id:id},req.body).then(() => { //Finds the first match and updates it 
        res.status(200).json({message: "Successfully updated!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Something went wrong!"});
    });
});

router.delete('/delete/:id', async (req,res) => {
    if( req.params.id.length == 24){ //Checks if ID has more than 24 characters
        await Country.deleteOne({_id:req.params.id}).then(() => { //Finds the first match and deletes it
            res.status(200).json({message: "Successfully deleted!"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "Something went wrong!"});
        });
    }else{
        res.status(400).json({message: "The ID needs to be at least 24 characters long."});
    }
});

router.get('/listall', async (req,res) => {
    await Country.find({}).then((countries) => {
        console.log(countries);
        res.status(200).json(countries);
    }).catch((err) => {
        res.status(404).json({message:"Not found."});
        console.error(err);
    });
});

router.get('/listname/:name', async (req,res) => {
    const name = req.params.name;
    await Country.find({ name:name }).then((Country) => { 
        console.log(Country);
        if(Country == null){
            res.status(404).json({message: "Not found."});
        }else{
            res.status(200).json(Country);
        }
    }).catch((err) => {
        res.status(404).json({message:"Not found."});
        console.error(err);
    });
});

module.exports = router;