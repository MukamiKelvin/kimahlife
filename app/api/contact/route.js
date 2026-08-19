import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      project,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !project || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "KimahLife <onboarding@resend.dev>",
      to: ["mukamikelvinkimanthi@gmail.com"],
      subject: `New project inquiry from ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Project Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company / Business:</strong> ${
            company || "Not provided"
          }</p>
          <p><strong>Project Type:</strong> ${project}</p>

          <h3>Message</h3>

          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Failed to send message." },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message sent successfully!",
        data,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Server error:", error);

    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}