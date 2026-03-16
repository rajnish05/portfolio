import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.log("Contact Form Submission (Email service not configured):", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          error:
            "Email service not configured. Please set RESEND_API_KEY in .env.local",
        },
        { status: 500 }
      );
    }

    // Match json-viewer contact flow behavior:
    // - Always send from the Resend onboarding address (or your verified domain later)
    // - Allow overriding the recipient via CONTACT_TO_EMAIL, but default to your inbox
    const from = "Portfolio <kumar89rajnish@gmail.com>";
    const to =
      process.env.CONTACT_TO_EMAIL ?? "kumar89rajnish@gmail.com";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
            </div>
            <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${name}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #6b7280;">${email}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #6b7280;">${subject}</span></p>
              </div>
              <div style="margin: 20px 0;">
                <h3 style="color: #374151; margin-bottom: 10px; font-size: 18px;">Message:</h3>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #6366f1;">
                  <p style="white-space: pre-wrap; line-height: 1.8; color: #4b5563; margin: 0;">${message.replace(
                    /\n/g,
                    "<br>"
                  )}</p>
                </div>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0; text-align: center;">
                  This email was sent from the portfolio contact form at ${new Date().toLocaleString()}
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
        replyTo: email,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => undefined);
      console.error("Resend API Error:", errorData);

      const detailedMessage =
        (errorData &&
          (typeof errorData.error === "string"
            ? errorData.error
            : typeof errorData.message === "string"
            ? errorData.message
            : undefined)) ||
        "Failed to send email. Please try again later.";

      return NextResponse.json(
        { error: detailedMessage },
        { status: 500 }
      );
    }

    await resendResponse.json().catch(() => undefined);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
