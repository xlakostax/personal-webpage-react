const express = require ('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
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
    ...config.mailer,
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.verify((error, success) => {
    error ? console.log( error ) : console.log( 'Server is ready to take message' )
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: "konstantin.veselovskii@gmail.com",
      to: `konstantin.veselovskii@gmail.com`,
      subject: 'A request from "Nodemailer Service"', // Subject line
      // text: '', // Plain text body
      html: output // HTML body
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      return res.json({
        msg: 'fail'
      })
      console.log(error);
    } else {
      return res.json({
        msg: 'success'
      })
      console.log('Message sent: %s', data.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(data));
    }
  });
});

app.listen( config.server.port, () => {
  console.log( `Server running on port ${ config.server.port }` );
} );
