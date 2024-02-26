// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { name, email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    // Email sent to me with the sender's message details
    await resend.emails.send({
      from: fromEmail,
      to: ["contact@imadev.me",],
      subject:`Message from ${name} <${email}>: ${subject}`,
      react: (
        <>
          <p>New message from <strong>{name} &lt;{email}&gt;</strong>:</p>
          <p>{message}</p>
        </>
      ),
    });
    await resend.emails.send({
      from: fromEmail,
      to: [email], // The sender's email
      subject: "Thank you for reaching out!",
      react: (
        <>
          <p>Hello {name},</p>
          <p>Thank you so much for reaching out. I truly appreciate you taking the time to write to me.</p>
          <p>Your message is very important to me, and I aim to get back to you as soon as possible. In the meantime, feel free to explore my website further or follow me on social media for updates and more information.</p>
          <p>If your inquiry is urgent, please mention that in a follow-up email, and I&apos;ll do my best to prioritize it.</p>
          <p>Thanks again for contacting me, {name}! Looking forward to speaking with you.</p>
          <p>Warm regards,</p>
          <p><strong>Arabi Imadeddine</strong></p>
          <p>Website: <a href="https://imadev.me">imadev.me</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/imadeddine-arabi/">Imadeddine Arabi</a> | Github: <a href="https://github.com/arabiimad">arabiimad</a></p>
        </>
      ),
    });
    // Return success response
    return NextResponse.json({ message: "Emails sent successfully." });
  } catch (error) {
    // Return error response
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send emails." });
  }
}
