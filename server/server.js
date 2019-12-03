
const express = require ('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors')
const config = require('./config.js');
const app = express();

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.post('/success', (req, res) => {
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
    ...config.mailer
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
        console.log(error);
        res.redirect('error');
      } else {
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.redirect('success');
      }
  });
  });
  app.listen( config.server.port, () => {
      console.log( `Server running on port ${ config.server.port }` );
  } );
