const express =require("express");
const {check, validationResult} = require('express-validator/check');

const{matchedData ,sanitizedBody} = require('express-validator/filter');
const app = express(); 
 

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

// parse application/json
app.use(express.json());

app.set('view engine','twig');

app.set('views','./public/views');

app.get("/",(req,res)=>{
    res.render('form',{title:"Sign up",messaage:"Fill the form"});
});

app.post("/",[
check('name','Name Required')
.notEmpty().withMessage("Should not be empty")
.matches(/^[a-zA-Z]+$/).withMessage('Only characters'),

check('mobile','Mobile Number Required ')
.isLength({min:10}).withMessage("Enter 10 Digit mobile Number")
.isMobilePhone('en-IN')
.matches(/[89][0-9]{9}/).withMessage("Should start with 8,9")
.notEmpty().withMessage("Should not be empty"),

check('email')
.notEmpty().withMessage("Email Should not be empty")
.isEmail().withMessage("Must be a valid email"),

check('password','Please enter password with min 8 characters ')
.notEmpty().withMessage("should not be empty")
.isLength({ min: 8 }).withMessage('Password must be of min 8 char'),

check('confirm_pass').custom((value, { req }) => {
    //console.log(value);
    if (value !== req.body.password) {
          throw new Error('Password Confirmation does not match password');
     }
     return true;
}).withMessage('password does not match'),

check('adds','Address Required')
.notEmpty()
]
,(req,res)=>{
    const errors = validationResult(req);
    console.log(errors.mapped());
    if(!errors.isEmpty()){
        const user = matchedData(req);
        res.render('form',{title:"Sign up",error:errors.mapped(),user:user});
    }
    else{
        const user = matchedData(req);
        res.render('form_data',{title:"Form Data",user:user});
    }
    
    
});

app.listen(3080);


// res.render('form_data',{title:"Form Data",name:req.body.name,
//     mobile:req.body.mobile,email:req.body.email,
//     password:req.body.password,adds:req.body.adds,birthday:req.body.birthday});
