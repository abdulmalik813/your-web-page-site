import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      businessName,
      email,
      phone,
      service,
      hasWebsite,
      currentUrl,
      goals,
      budget,
      timeline,
      additionalDetails,
      privacy,
      honeypot,
    } = body;

    // Spam honeypot trap
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Quote request received." });
    }

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!service || typeof service !== "string") {
      errors.service = "Please select the primary service you require.";
    }

    if (!goals || typeof goals !== "string" || goals.trim().length < 10) {
      errors.goals = "Please briefly describe your project goals (at least 10 characters).";
    }

    if (!privacy) {
      errors.privacy = "Please acknowledge our privacy policy to proceed.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please correct the highlighted fields." },
        { status: 400 }
      );
    }

    // Log the valid quote request securely
    console.log(`[Quote Request Received] From: ${name} (${businessName || "Individual"}), Service: ${service}`);

    return NextResponse.json({
      success: true,
      message: "Thank you for requesting a quote. We have received your project details and will review your requirements to prepare a tailored, transparent proposal.",
    });
  } catch (error) {
    console.error("[Quote Request Error]", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred. Please try again or reach us at 902-629-9691." },
      { status: 500 }
    );
  }
}
