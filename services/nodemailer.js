const nodemailer = require("nodemailer");

const sendEmail = async ({
  email,
  subject = "Registro a Cala Macrame Deco",
  body,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const emailOptions = {
      from: "<no-reply>Cala Macramé Deco",
      to: email,
      subject: subject,
      html: body,
    };
    const { messageId } = await transporter.sendMail(emailOptions);
    res.status(200).json({ messageId: messageId });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

module.exports = { sendEmail };
