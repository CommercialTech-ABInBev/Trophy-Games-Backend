const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trophystoutgames@gmail.com',
    pass: 'Ifeoma@2022*'
  }
});

exports.sendMail = (req, res) => {
  const requestModel = req.body;
  if(!requestModel)
    return res.status(400).send({message: "Invalid request!"});

  if(!requestModel.from)
    return res.status(400).send({message: "Email from is required!"});

  if(!requestModel.to)
    return res.status(400).send({message: "Email to is required!"});

  if(!requestModel.subject)
    return res.status(400).send({message: "Email subject is required!"});

  if(!requestModel.html && !requestModel.text)
    return res.status(400).send({message: "Email Content (html or text) is required"});
  
  const mailOptions = requestModel;
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      return res.status(500).send({message: "Error sending email", error});
    } else {
      return res.status(200).send({message: "Email sent", data: info});
    }
  });
    
};
