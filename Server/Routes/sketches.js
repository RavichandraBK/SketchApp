const express = require('express');
const router = express.Router();
const sketch = require('../Models/sketch')
router.get('/get-sketch',async(req,res)=>{
    try{
        const getSketch = await sketch.find({});
        if(!getSketch){
            res.status(404).json({message:'Couldnt find any sketches'});
        }
        else{
            res.json({message:'Successfully found sketches'});
        }
    }catch(err){
        console.log(err, 'Something went wrong while fetching sketches');
    }
})

router.post('/add-sketch', async (req, res) => {
    try {
        const { rectangles, circles, arrows, scribbles } = req.body;
        const filter = {}; 
        const update = { rect:rectangles, circles, arrows, scribbles };
        console.log(update)
        const options = {
            upsert: true, 
            new: true, 
            setDefaultsOnInsert: true 
        };

        const addSketch = await sketch.findOneAndUpdate(filter, update, options);
        res.status(200).json({ success: true, data: addSketch });
    } catch (err) {
        console.error('Error while adding sketch:', err);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;