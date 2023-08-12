const { google } = require("googleapis");
const nodemailer = require("nodemailer");


const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const sendEmail = async ({to,subject,html}) => {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
  const from = process.env.EMAIL
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: from,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: false,
    }
  })
  return new Promise((resolve, reject) => {
    transport.sendMail({from,subject,to,html}, (err, info) => {
        if (err) reject(err)
        resolve(info)
    })
  })
}

module.exports=sendEmail 