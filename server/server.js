const express = require ('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = 3001;

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

app.post('/send', (req, res) => {
  let output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
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
    secure: true, // true for 465, false for other portss
    service: "gmail",
    tls:{
      rejectUnauthorized:false
    },
    auth: {
      user: process.env.TRANSPORT_EMAIL,
      pass: process.env.TRANSPORT_PASSWORD,
    }
  });

  transporter.verify((error, success) => {
    error ? console.log(error) : console.log('Server is ready to take message')
  });

  // setup email data with unicode symbols
  const mailOptions_request = {
    from: req.body.email,
    to: process.env.TRANSPORT_EMAIL,
    subject: 'A new request frow web page!',
    html: output
  };

  const mailOptions_response = {
    to: req.body.email,
    subject: 'Thank you for your request!',
    html: output_response
  };

  // Send mail with defined transport object
  transporter.sendMail(mailOptions_request, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  transporter.sendMail(mailOptions_response, (err, info) => {
    if (err) {
      return (
        res.status(500).json({
          msg: 'fail'
        }),
        console.log(err)
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

app.listen(port, () => {
  console.log(`Server running on port ${port}... ${process.env.TRANSPORT_EMAIL}`);
});