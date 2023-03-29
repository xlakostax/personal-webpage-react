const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require ('express');
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const app = express();

// Account parameters. firebase functions:config:set gmail.login=yourlogin@gmail.com gmail.pass=yourpass
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

admin.initializeApp();

// middleware for CORS enabling
app.use(
  cors({
    origin: true
  })
);

// middleware for parsing bodies from URL
app.use(
  bodyParser.urlencoded({
      extended: true
  })
);

// middleware for parsing JSON
app.use(bodyParser.json());

//creating function for sending emails
app.post('/', (req, res) => {
  let output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Email: ${req.body.email}</li>
      <li>Name: ${req.body.name}</li>
      <li>Message: ${req.body.message}</li>
    </ul>
  `;
  let output_response = `
    <p style = 'font-size: 16px'>Hi, ${req.body.name}!</p>
    <p style = 'font-size: 16px'>Your request has been received. I will get in touch with you shortly!</p></br></br>
    <p style = 'font-size: 16px'>Best regards,</br>
    Konstantin Veselovskii</p>
  `;
// Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "gmail",
    tls:{
      rejectUnauthorized:false
    },
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  });

// setup email data with unicode symbols
  const mailOptions_request = {
    from: req.body.email,
    to: gmailEmail,
    subject: 'A new request frow web page!',
    html: output
  };

  const mailOptions_response = {
    to: req.body.email,
    subject: 'Thank you for your request!',
    html: output_response
  };

// Send mail with defined transport object
  transporter.sendMail( mailOptions_request, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });

  transporter.sendMail(mailOptions_response, (error, info) => {
    if (error) {
      return (
        res.status(500).json({
          msg: 'fail'
        }),
        console.log(error)
      );
    } else {
      return (
        res.status(200).json({
          msg: 'success'
        }),
        console.log(info)
      )
    }
  })
});

exports.app = functions.https.onRequest(app);