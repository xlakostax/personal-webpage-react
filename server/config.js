const config = {
  // mailer: {
  //   host: 'smtp.ethereal.email',
  //   port: 587,
  //   secure: false, // true for 465, false for other portss
  //   service: "ethereal",
  //   tls:{
  //     rejectUnauthorized:false
  //   },
  //   auth: {
  //     user: 'jorge.crooks@ethereal.email',
  //     // pass: 'WYRFyfrJUvK5n1xxBu'
  //   }
  // },
  mailer: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other portss
    service: "gmail",
    tls:{
      rejectUnauthorized:false
    },
    auth: {
      user: 'konstantin.veselovskii@gmail.com',
      pass: 'hlkayibebdbdrkrb'
    }
  },
  server: {
    port: 3001
  }
}

module.exports = config;
