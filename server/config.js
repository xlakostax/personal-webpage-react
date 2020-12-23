const config = {
  mailer: {
    host: 'smtp.gmail.com',
    port: 465, // 587 for etherial
    secure: true, // true for 465, false for other portss
    service: "gmail",
    tls:{
      rejectUnauthorized:false
    },
    auth: {
      user: 'konstantin.veselovskii@gmail.com',
      pass: 'x!14060507KvYe!xx'
    }
  },
  server: {
    port: 3001
  }
}

module.exports = config;
