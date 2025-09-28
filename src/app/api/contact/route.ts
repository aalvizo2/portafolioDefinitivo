import nodemailer from 'nodemailer'


export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; message: any }> | { name: any; email: any; message: any } }){
    try{
       const {
        name,
        email,
        message
       }= await req.json()

       //Configuracion del transporter
       const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },

       })

       //Contenido del Correo
       await transporter.sendMail({
        from: `"Portfolio Contact" <${email}>`,
        to: process.env.EMAIL_TO,
        subject: `New Message from ${name}`,
        text: message,
        html: `
           <h3>New Message from your portfolio</h3>
           <p><b>Name: </b> ${name}</p>
           <p><b>Message: </b> ${message}</p>
        `
       })

       return new Response(
         JSON.stringify({
            success: true, 
            message: 'Email sent successfully!'
         }),
         {
            status: 200
         }
       )
    }catch(error){
       console.error(error)
       return new Response(
        JSON.stringify({
            success: false,
            message: 'Error sending email.'
        }),
        {
            status: 500
        }
       )
    }
}