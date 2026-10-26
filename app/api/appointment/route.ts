import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      meetingType,
      preferredDay,
      preferredTime,
      topic,
      notes,
      honeypot,
    } = body;

    // Spam trap
    if (honeypot && honeypot.trim().length > 0) {
      return NextResponse.json({ success: true, message: "Appointment request received." });
    }

    const errors: Record<string, string> = {};

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please provide your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!preferredDay || preferredDay === "Friday") {
      errors.preferredDay = "We do not schedule appointments on Fridays. Please pick another day.";
    }

    if (!preferredTime) {
      errors.preferredTime = "Please select a preferred appointment window between 1:00 PM and 8:00 PM.";
    }

    if (!topic || typeof topic !== "string" || topic.trim().length < 5) {
      errors.topic = "Please briefly share what you would like to discuss.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Please check the highlighted appointment fields." },
        { status: 400 }
      );
    }

    console.log(
      `[Appointment Scheduled] ${name} <${email}>, Mode: ${meetingType}, Day: ${preferredDay}, Time: ${preferredTime}`
    );

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}. Your appointment request for ${preferredDay} (${preferredTime}, America/Halifax) via ${meetingType} has been received. As we are a home-based business, we will confirm the exact appointment time by email promptly.`,
    });
  } catch (error) {
    console.error("[Appointment Error]", error);
    return NextResponse.json(
      { success: false, message: "Server error scheduling appointment. Please call 902-629-9691." },
      { status: 500 }
    );
  }
}
