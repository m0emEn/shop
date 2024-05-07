import nodemailer from "nodemailer";

export const sendVerificationEmail = (token, email, name) => {
  //gbrj rski raoj vzej
  //moemensfaxi10@gmail.com
  const html = `
  <html>
  <body>
      <h3>Dear ${name}</h3>
      <p>Thanks for signing up at Tech Lines!</p>
      <p>Use the link below to verify your email</p>
      <a href="http://localhost:3000/email-verify/${token}">Click here!</a>
  </body>
</html>`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "moemensfaxi10@gmail.com",
      pass: "gbrj rski raoj vzej",
    },
  });

  const mailOptions = {
    from: "moemensfaxi10@gmail.com",
    to: email,
    subject: "Verify Your Email Adress",
    html: html,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`email sent to ${email}`);
      console.log(info.response);
    }
  });
};
