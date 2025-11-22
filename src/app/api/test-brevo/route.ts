import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;

    // Test the API key directly
    const testResponse = await fetch("https://api.brevo.com/v3/account", {
      method: "GET",
      headers: {
        "api-key": apiKey || "",
      },
    });

    const testData = await testResponse.json();

    return NextResponse.json({
      status: testResponse.status,
      statusText: testResponse.statusText,
      apiKeyValid: testResponse.status === 200,
      accountInfo: testData,
      senderEmail: senderEmail,
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error), timestamp: new Date() },
      { status: 500 }
    );
  }
}
