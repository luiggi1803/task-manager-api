const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWellcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'luiggi.huaman.18@gmail.com',
        subject: 'Thanks for joining In!',
        text: 'Wellcome to the app, ' + name + '. Let me know how you get along with the app.'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'luiggi.huaman.18@gmail.com',
        subject: 'Sorry to see you go!',
        text: 'Goobye ' + name + '. I hope to see you back sometime soon.'
    })
}

module.exports = {
    sendWellcomeEmail,
    sendCancelationEmail
}