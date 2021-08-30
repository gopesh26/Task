const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 3866

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

// Navigation
app.get('', (req, res)=> {
    res.render('index_app')
})

app.get('/register_app', (req, res)=> {
    res.render('register_app')
})

app.post('/register_app', urlencodedParser, [
    check('username')
        .exists()
        .isLength({ min: 3 })
        .withMessage('This username must me 3+ characters long'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Email is not valid'),
    check('mobno')
        .isNumeric()
        .isLength({min:10},{max:10})
        .withMessage('Phone number is not valid'),
    check('date')
        .isDate()
        .withMessage('date is not valid')
        .custom((date, { req }) => {
            const [year, month, day] = date.split('-')
         
            if(year > 2003){
            throw new Error(
            'Date should before 2003')
            }
            else{
            return true
            }
            
            }),
    check('password')
        // .isStrongPassword()
        .isLength({min:5})
        .withMessage('please enter the strong password')


], (req, res)=> {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        const alert = errors.array()
        res.render('register_app', {
            alert
        })
    }else{
        var d1 = req.body.username
        var d2 = req.body.email
        var d3 = req.body.mobno
        var d4 = req.body.date
        res.json({username : d1 , email : d2 , mobno : d3 , date : d4})
    }


})


app.listen(port, () => console.info(`App listening on port: ${port}`))
