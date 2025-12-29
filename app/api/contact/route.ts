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

    // Try Resend first (if configured)
    if (process.env.RESEND_API_KEY) {
      try {
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

        if (resendResponse.ok) {
          return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
          );
        }
      } catch (resendError) {
        console.error("Resend error:", resendError);
        // Fall through to alternative method
      }
    }

    // Alternative: Use Web API to send via mailto (for development/testing)
    // Or use a service like EmailJS, Formspree, or similar
    
    // For production, we'll use a simple fetch to a service
    // Option 1: Use EmailJS (free tier available)
    if (process.env.EMAILJS_SERVICE_ID && process.env.EMAILJS_TEMPLATE_ID && process.env.EMAILJS_PUBLIC_KEY) {
      try {
        const emailjsResponse = await fetch(`https://api.emailjs.com/api/v1.0/email/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            user_id: process.env.EMAILJS_PUBLIC_KEY,
            template_params: {
              from_name: name,
              from_email: email,
              contact_number: contactNumber || "Not provided",
              message: message,
              to_email: recipientEmail,
            },
          }),
        });

        if (emailjsResponse.ok) {
          return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
          );
        }
      } catch (emailjsError) {
        console.error("EmailJS error:", emailjsError);
      }
    }

    // Option 2: Use Formspree (free tier available)
    if (process.env.FORMSPREE_ID) {
      try {
        const formspreeResponse = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            contactNumber: contactNumber || "",
            message,
            _replyto: email,
            _subject: emailSubject,
          }),
        });

        if (formspreeResponse.ok) {
          return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
          );
        }
      } catch (formspreeError) {
        console.error("Formspree error:", formspreeError);
      }
    }

    // If no email service is configured, log and return error
    console.error("No email service configured. Please set up one of:");
    console.error("1. RESEND_API_KEY and RESEND_FROM_EMAIL");
    console.error("2. EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY");
    console.error("3. FORMSPREE_ID");
    console.error("\nEmail details that would be sent:");
    console.error("To:", recipientEmail);
    console.error("Subject:", emailSubject);
    console.error("Body:", emailBody);

    return NextResponse.json(
      { error: "Email service not configured. Please set up an email service." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}





















