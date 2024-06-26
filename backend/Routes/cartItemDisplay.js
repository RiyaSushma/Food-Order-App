const express = require('express');
const router = express.Router();
const cartItem = require("../models/cart")
const { validationResult } = require('express-validator');

router.post('/cartuser', async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array()})
    }
        try {
        const user_info = await cartItem.findOne({emailId: (req.body.emailId).toLowerCase()});
        if(user_info) {
            await cartItem.updateOne({emailId: (req.body.emailId).toLowerCase()}, {cart: req.body.cart})
        }
        else {
            await cartItem.create({
                emailId: req.body.emailId,
                cart: req.body.cart
            })
        }
        console.log("Helloo")
        res.json({success: true});
    } catch (error) {
        res.status(500).json({success: false,error:" Internal Server Error!!"})
    }
})

module.exports = router;