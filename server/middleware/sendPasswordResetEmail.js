import nodemailer from "nodemailer";
export const sendPasswordResetEmail = (token, email, name) => {
  const html = `
        <html>
            <body>
                <h3>Dear ${name}</h3>
                <p>Please Click on the link to reset your password</p>
                <a href="http://localhost:3000/password-reset/${token}">Click Here!</a>
            </body>
        </html>
    `;

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
    subject: "Shop Password Reset Request",
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
