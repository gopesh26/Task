const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",//or service: 'gmail'
    port: 2525,
    auth: {
      user: "19e0a8faf82079", //mail id 
      pass: "5ff5ce74a850f3" //mailid password 
    }
  });

function msg(){

const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
return message;
}

transport.sendMail(msg(), function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});