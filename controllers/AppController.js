const nodemailer = require('nodemailer');

const authkey = "9iU3zyX8IA6UtJxiGDOfgoq0Mcngz1Gir0JnenUfQxZ6AscuTpu0BvRRfuew5H8MXEvAiKAkDCh8mcLbV9sAbsik3fIahjGYzV4u";
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'trophystoutgames@gmail.com',
    pass: 'Ifeoma@2022*'
  }
});

exports.sendMail = (req, res) => {
  const requestAuthKey = req.headers["api-auth-key"];
  if(authkey !== requestAuthKey)
    return res.status(403).send({message: "Access Forbidden", error: "Unauthorize access"});

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

exports.getDate = (req, res) => {
  const requestAuthKey = req.headers["api-auth-key"];
  if(authkey !== requestAuthKey)
    return res.status(403).send({message: "Access Forbidden", error: "Unauthorize access"});

  return res.status(200).send({message: "Today date", data: new Date()});
};
