import nodemailer from "nodemailer";
export default function handler(req, res) {
    if(req.method !== "POST") {
        res.status(405).json({message: "Method not allowed"})
    }
    const {name, email, message} = req.body;
    const products = req.body.item;
    const transpoter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL1,
            pass:process.env.PASS1,
        }
    });
    const mailOptions={
        from:process.env.EMAIL1,
        to:email,
        subject:'Confirmation of your Participation in FMC Weekend 10th Edition ',
        html:`<!DOCTYPE html>
        <html>
        
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
        
                .header {
                    background-color: #007BFF;
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                }
        
                .content {
                    background-color: #fff;
                    padding: 20px;
                }
        
                .signature {
                    font-style: italic;
                    text-align: center;
                    margin-top: 20px;
                }
        
                .contact-info {
                    text-align: center;
                    margin-top: 20px;
                }
        
                .social-media {
                    text-align: center;
                    margin-top: 20px;
                }
        
                a {
                    text-decoration: none;
                    color: #007BFF;
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <div class="header">
                    <h1>Dear ${name} We are delighted to confirm your participation</h1>
                    <p>in <b> ${products} </b> event at the 10th edition of FMC Weekend, India’s largest digital arts festival.</p>
                </div>
                <div class="content">
                    <p>FMC Weekend gathers digital artists from across the country to celebrate creativity and innovation, marking a significant milestone in our festival's legacy.</p>
                    <p>This email serves as verification of your participation in the workshop. Please feel free to reach out to the event coordinators for any inquiries regarding your event.</p>
                    <p><strong>Campus Directions:</strong> You can find directions to the campus at <a href="https://prev.iitbhu.ac.in/reach_us">https://prev.iitbhu.ac.in/reach_us</a>.</p>
                    <p>Additionally, please pack warm clothes as temperatures drop to less than 10 degrees at night.</p>
                    <p>We request you to send a picture of yours for the Pass and carry your ID card for the verification during the festival.</p>
                </div>
                <div class="signature">
                    <p><strong>Warm Regards,</strong></p>
                    <p>Sundeep <br>Contact: 6281536456</p>
                    <p>Mahi    <br>Contact: 9413603935</p>
                    <p>Atmadeep<br>Contact: 9609925061</p>
                </div>
                <div class="contact-info">
                    <p>For more information, you can visit our website at <a href="http://www.fmcweekend.in">www.fmcweekend.in</a></p>
                </div>
                <div class="social-media">
                    <p>Follow us on our social media handles:</p>
                    <p><a href="https://www.instagram.com/fmc_weekend">Instagram: @fmc_weekend</a></p>
                    <p><a href="https://www.facebook.com/FMCWeekend">Facebook: FMC Weekend</a></p>
                </div>
            </div>
        </body>
        
        </html>
        `
    };
    transpoter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            res.send('success');
            console.log('Email sent'+info.response);
        }
    })

   

}
 