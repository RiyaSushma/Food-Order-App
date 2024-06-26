const express = require('express')
const router = express.Router()

router.post('/fooddata', (req, res) => {
    try {
        res.send([global.food_items, global.foodCategory]) 
        console.log(global.food_items)
    } catch(err) {
        console.error(err);
        res.send("Server Error")
    }
})


module.exports = router;