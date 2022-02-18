const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibcommercialtech2@gmail.com',
    pass: 'VirtualReality2'
  }
});

exports.sendMail = (req, res) => {
  const requestModel = req.body;
  // if(!requestModel)
  //   res.status(400).send({message: "Invalid parameters!"});

  const mailOptions = {
    from: 'ibcommercialtech2@gmail.com',
    to: 'femidotayodeji@gmail.com',
    subject: 'Cancup OTP',
    html: '<h1>One-time Password</h1><p>123456</p>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(500).send({message: "Error sending email", error});
    } else {
      console.log(info);
      res.status(200).send({message: "Email sent", data: info});
    }
  });
    
};
