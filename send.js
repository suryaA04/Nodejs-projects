const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
       user: "kmssuryaa@gmail.com",
       pass: "gsrt ubkt asou jdma"
    }
});

const mailoptions = {
    from: "kmssuryaa@gmail.com",
    to: "suryaanand894@gmail.com",
    subject: "Nodemailer Test",
    text: "Test sending Gmail using node js"
};

transporter.sendMail(mailoptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent: " + info.response);
    }
});