const nodemailer = require("nodemailer");

// Create a transporter object with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "GGSALEMAN0001@gmail.com", // Your Gmail address
    pass: "sprl nist kaeb izvx",  // Use your app-specific password (not your regular Gmail password)
  },
});

// Set up the email options (e.g., the email recipient, subject, body)
const mailOptions = {
  from: "GGSALEMAN0001@gmail.com",       // Sender address
  to: "GGSALEMAN0001@gmail",         // Replace with your email address
  subject: "Test Email",                 // Subject line
  text: "This is a test email to check the notification functionality.", // Body of the email
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("Error sending email:", err);
  } else {
    console.log("Test email sent:", info.response);
  }
});
