import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, contactNumber, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = process.env.CONTACT_EMAIL || "namitadhawan555@gmail.com";
    const emailSubject = `New Contact Form Submission from ${name}`;

    // Format the email body
    const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
${contactNumber ? `Contact Number: ${contactNumber}` : "Contact Number: Not provided"}
Message:
${message}

---
This email was sent from your portfolio contact form.
    `.trim();

    // Send email using Resend (recommended)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
          to: recipientEmail,
          subject: emailSubject,
          text: emailBody,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.json();
        console.error("Resend error:", error);
        throw new Error("Failed to send email via Resend");
      }

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    }

    // Fallback: Use nodemailer if RESEND_API_KEY is not set
    // For now, we'll log the email (you can set up nodemailer if needed)
    console.log("Email would be sent to:", recipientEmail);
    console.log("Subject:", emailSubject);
    console.log("Body:", emailBody);

    // In production, you should set up an email service
    // For now, return success (you'll need to configure email service)
    return NextResponse.json(
      { message: "Form submitted (email service not configured)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}



















