import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const adminEmail = process.env.ADMIN_EMAIL;

    return NextResponse.json({
      status: "debug",
      apiKeyExists: !!apiKey,
      apiKeyLength: apiKey?.length || 0,
      senderEmail,
      adminEmail,
      apiKeyFirst20: apiKey?.substring(0, 20) + "...",
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
