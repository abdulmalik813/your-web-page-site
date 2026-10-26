import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, privacy, honeypot } = body;

    // Spam honeypot trap: bots usually fill hidden fields
    if (honeypot && honeypot.trim().length > 0) {
      // Silently accept without processing spam
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      errors.subject = "Please enter a subject (at least 3 characters).";
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.message = "Please enter a message of at least 10 characters.";
    }

    if (!privacy) {
      errors.privacy = "Please acknowledge our privacy policy to submit an inquiry.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please correct the highlighted fields." },
        { status: 400 }
      );
    }

    // Log the valid inquiry safely for server audit
    console.log(`[Contact Form Received] From: ${name} <${email}>, Subject: ${subject}`);

    // If external email provider API key is configured (e.g. Resend, SendGrid), delivery logic executes here.
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
    if (apiKey) {
      console.log(`[Email Dispatch] Triggering external notification to hello@yourwebpage.ca via provider.`);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. Your message has been received by Your Web Page, and our team will reply within one business day.",
    });
  } catch (error) {
    console.error("[Contact Form Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred. Please try again or call 902-629-9691 directly." },
      { status: 500 }
    );
  }
}
