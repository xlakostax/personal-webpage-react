const config = {
  mailer: {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    service: "ethereal",
    tls:{
      rejectUnauthorized:false
    },
    auth: {
      user: 'jorge.crooks@ethereal.email',
      pass: 'WYRFyfrJUvK5n1xxBu'
    }
  },
  server: {
    port: 3001
  }
}

module.exports = config;
