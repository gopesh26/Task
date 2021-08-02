const express =require("express");
const {check, validationResult} = require('express-validator/check');

const{matchedData ,sanitizedBody} = require('express-validator/filter')
const app = express(); 
 

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded());

// parse application/json
app.use(express.json());

app.set('view engine','twig');
app.set('views','./public/views');

app.get("/",(req,res)=>{
    res.render('form',{title:"Form",messaage:"Fill the form"});
});

app.post("/",[
check('name','Name Required')
.isString()
.notEmpty()
.withMessage('Name Required'),

check('mobile','Mobile Number Required ')
.isLength({min:10})
.notEmpty(),

check('email','Email required')
.notEmpty()
.isEmail(),

check('password','Please enter password with min 8 characters ')
.notEmpty()
.withMessage('password is required')
.isLength({ min: 8 })
.withMessage('password must be 8 characters'),

check('adds','Please enter Address ')
.notEmpty()
.withMessage('Address Required')
]
,(req,res)=>{
    const errors = validationResult(req);
    console.log(errors.mapped());
    if(!errors.isEmpty()){
        res.render('form',{title:"Form error",error:errors.mapped()});
    }
    else{
        const user = matchedData(req);
        res.render('form_data',{title:"Form Data",name:req.body.name,
         mobile:req.body.mobile,email:req.body.email,
          password:req.body.password,adds:req.body.adds,birthday:req.body.birthday});
    }
    
    
});

app.listen(3080);





// res.render('form_data',{title:"Form Data",name:req.body.name,
//     mobile:req.body.mobile,email:req.body.email,
//     password:req.body.password,adds:req.body.adds,birthday:req.body.birthday});
