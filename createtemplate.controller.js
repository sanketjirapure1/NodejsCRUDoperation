const Template = require("../models/createtemplate.schema");

exports.getTemplate = async (req, res) => {
    try {
        const template = await Template.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(template);
    } catch (error) {
        console.log(error.message)
    }
},

exports.getTemplateId = async (req,res) => {

    try {
        const template = await Template.findById(req.params.id);
        res.status(200).json(template)

    } catch (error) {
      res.send('error' + error)

    }
 },

exports.createTemplate = async (req, res ) =>{
    const template = new Template({
        templatename: req.body.templatename,
        subject: req.body.subject,
        sender: req.body.sender,
        // header: req.body.header,
        emailbody: req.body.emailbody,
        // footer: req.body.footer,
      })
      try {

        const pdt = await template.save();
        res.status(201).json(pdt)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"," http://localhost:8000/createtemplates");

      } catch (error) {
          res.send(template)
      }

//       const output = `
//     <p>You have a new contact request</p>
//     <h3>Contact Details</h3>
//     <ul>
//       <li>Name: ${req.body.templatename}</li>
//       <li>Company: ${req.body.subject}</li>
//       <li>Email: ${req.body.sender}</li>
//       <li>Phone: ${req.body.header}</li>
//       <li>Phone: ${req.body.emailbody}</li>
//       <li>Phone: ${req.body.footer}</li>
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'mail.YOURDOMAIN.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'YOUREMAIL', // generated ethereal user
//         pass: 'YOURPASSWORD'  // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Nodemailer Contact" <your@email.com>', // sender address
//       to: 'RECEIVEREMAILS', // list of receivers
//       subject: 'Node Contact Request', // Subject line
//       text: 'Hello world?', // plain text body
//       html: output // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       res.render('contact', {msg:'Email has been sent'});
//   });
//   });

}

exports.updateTemplate = async(req,res) =>{

    try {
        const template = await Template.findById(req.params.id);

        template.templatename = req.body.templatename
        template.subject = req.body.subject
        template.sender = req.body.sender
        // template.header = req.body.header
        template.emailbody = req.body.emailbody
        // template.footer = req.body.footer

        const pdt = await template.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)
    }
}

exports.deleteTemplate = async(req,res) =>{
    try {
        const template = await Template.findByIdAndDelete(req.params.id)
        res.json(template)

    } catch (error) {
      res.json({message: err})

    }
}


