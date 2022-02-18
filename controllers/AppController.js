const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'femi@e-limu.org',
    pass: '26845(limu);'
  }
});

exports.sendMail = (req, res) => {
  const requestModel = req.body;
  // if(!requestModel)
  //   res.status(400).send({message: "Invalid parameters!"});

  const mailOptions = requestModel;
  
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
