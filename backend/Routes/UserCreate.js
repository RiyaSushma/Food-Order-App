const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const User = require('../models/User')
const jwt = require("jsonwebtoken")
const jwt_secret = "ThisisJwtSecretCodeforfoodorderingsite";

router.post("/createuser", 
[body('EmailId', 'Invalid Email').isEmail(), body('password', 'Incorrect Password').isLength({min: 5})]
,async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const encrypt_pwd = await bcrypt.hash(req.body.password, 9);
        await User.create({
            name: req.body.name,
            location: req.body.location,
            EmailId: req.body.EmailId,
            password: encrypt_pwd
        })
        console.log("Helloo")
        res.json({success: true});
    } catch(err) {
        console.log(err)
        res.json({success: false});
    }
})

// router.post('/cartuser', async(req, res) => {
//     try {
//         await cartItem.create({
//             emailId: req.body.EmailId
//         }) 
//     } catch(e) {
//         console.log(e);
//     }
// })

router.post("/loginuser", [body('EmailId', 'Invalid Email').isEmail(), body('password', 'Incorrect Password').isLength({min: 5})], async(req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {EmailId, password} = req.body;
        const email_lower = EmailId.toLowerCase()
        const user_info = await User.findOne({EmailId: email_lower})
        if(!user_info) {
            return res.status(404).json({errors: "Email Id not Found"})
        }
        const isMatch = await bcrypt.compare(password, user_info.password);
        if(isMatch) {
            console.log(res.json)
            const data = {
                user: {
                    id: user_info.id
                }
            }
            const authToken = jwt.sign(data, jwt_secret)
            return res.json({success: true, authToken, emailId: email_lower})
        }
        else {
            return res.status(404).json({errors: "Password Not Matching"})
        }
    }
    catch(err) {
        console.log(err)
        return res.json({success: false})
    }
})


module.exports = router;