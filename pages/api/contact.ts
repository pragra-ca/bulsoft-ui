import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");
var inlineCss = require('nodemailer-juice');

const user = process.env.USER;
const pass = process.env.PASS

export default async (req:any, res:any) => {
    const { name, email, contact,message } = req.body;

   
    console.log(name, email, message);
   
     if(req.method === 'POST') {
        if(!name || !email || !contact || !message) {
            return res.status(200).json({ message: "Bad Request" });
        }

        if( name && email && contact && message) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: user,
                  pass: pass
                }
              });
              transporter.use('compile', inlineCss());

              try {
                await transporter.sendMail({
                    from: email,
                    to: user,
                    subject: `Form Submission from ${name}`,
                    html: `<style> div{width:500px;border:4px solid blue; padding:10px 20px;border-radius:10px}</style><div>
                    <h3>You have a contact form Submission from <strong> ${name}</strong></h3>
                      <p><strong>Email: </strong> ${email}</p>
                      <p><strong>Contact: </strong> ${contact}</p>
                      <p><strong>Message: </strong> ${message}</p>
                    
                    </div>`
                  });
              }
              catch (error: any) {
                return res.status(500).json({ error: error.message || error.toString() });
              }

        }
     }
  
      return res.status(200).json({ error: "" });
  }