var express = require('express')
var router = express.Router()
var nodemailer = require('nodemailer');
var { body } = require('express-validator');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ACC,
      pass: process.env.EMAIL_PWD
    }
});
router.post('/',
    body('email').isEmail().normalizeEmail(),
    body('name').not().isEmpty().trim().escape(),
    body('message').not().isEmpty().trim().escape()
, (req, res, next) => {
    console.log("test")
    try{
        var mailOptions = {
            from: process.env.EMAIL_ACC,
            to: process.env.EMAIL_TO,
            subject: 'Sent by ' + req.body.name + ' at ' + req.body.email,
            text: req.body.message
        };
        console.log("test")
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error);
                return res.status(500).json({
                    message: "SERVER ERROR"
                });
            }else{
                
                res.status(200).json({
                    message: "OK"
                });
                
                console.log(res);
                return;
            }
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router;