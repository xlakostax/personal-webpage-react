'use strict'

const express = require ('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors')
const port = 3001;

const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    service: "ethereal",
    auth: {
        user: 'jorge.crooks@ethereal.email',
        pass: 'WYRFyfrJUvK5n1xxBu'
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `${req.body.email}`,
      to: 'jorge.crooks@ethereal.email',
      subject: 'A new request frow web page', // Subject line
      // text: '', // Plain text body
      html: output // HTML body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      res.redirect('contacts');
  });
  });
  app.listen( port, () => {
      console.log( `Server running on port ${ port }` );
  } );
