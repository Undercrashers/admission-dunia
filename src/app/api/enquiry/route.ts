import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, course, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY?.trim();
    const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
    const adminEmail = process.env.ADMIN_EMAIL?.trim();

    console.log("Environment check:");
    console.log("API Key exists:", !!apiKey);
    console.log("API Key length:", apiKey?.length);
    console.log("Sender Email:", senderEmail);
    console.log("Admin Email:", adminEmail);

    if (!apiKey || !senderEmail || !adminEmail) {
      console.error("Missing environment variables");
      return NextResponse.json(
        { message: "Server configuration error - missing environment variables" },
        { status: 500 }
      );
    }

    // Email content for admin/counselor
    const adminHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0;">📋 New Student Enquiry Received</h1>
        </div>
        <div style="background-color: #f3f4f6; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #1f2937; font-size: 16px; margin-bottom: 20px;">
            A new student has enquired about studying abroad programs.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e40af; margin-top: 0; margin-bottom: 15px;">Student Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #1f2937;"><strong>${name}</strong></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 0; color: #6b7280;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0;"><a href="tel:${phone}" style="color: #3b82f6; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280;"><strong>Course Interest:</strong></td>
                <td style="padding: 10px 0; color: #1f2937;"><strong>${course}</strong></td>
              </tr>
            </table>
          </div>

          ${
            message
              ? `<div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                <h4 style="color: #92400e; margin-top: 0;">Student's Additional Message:</h4>
                <p style="color: #78350f; margin: 10px 0; line-height: 1.6;">"${message}"</p>
              </div>`
              : ""
          }

          <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 4px;">
            <p style="margin: 0 0 10px 0; color: #1e40af;"><strong>✅ Next Steps:</strong></p>
            <ul style="color: #1e3a8a; margin: 0; padding-left: 20px;">
              <li style="margin: 5px 0;">Reach out to the student within 24 hours</li>
              <li style="margin: 5px 0;">Provide personalized counseling based on their course interest</li>
              <li style="margin: 5px 0;">Share relevant university options and program details</li>
              <li style="margin: 5px 0;">Discuss fee structures and admission requirements</li>
              <li style="margin: 5px 0;">Guide them through the application process</li>
            </ul>
          </div>
        </div>
        <div style="text-align: center; padding: 20px; background: #f3f4f6; color: #666; font-size: 12px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0;">📧 Automated notification from Admission Dunia</p>
          <p style="margin: 5px 0 0 0;">© 2025 Admission Dunia. All rights reserved.</p>
        </div>
      </div>
    `;

    // Email content for student - confirmation
    const studentHtmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0;">✅ Enquiry Received!</h1>
        </div>
        <div style="background-color: #f3f4f6; padding: 30px; border-radius: 0 0 8px 8px;">
          <p style="color: #1f2937; font-size: 16px; margin-bottom: 20px;">
            Hi <strong>${name}</strong>,
          </p>
          <p style="color: #4b5563; line-height: 1.6; margin-bottom: 20px;">
            Thank you for your interest in studying abroad! We have received your enquiry for <strong>${course}</strong> and our expert counselor will review your profile and contact you shortly.
          </p>
          
          <div style="background: #dcfce7; border-left: 4px solid #16a34a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #15803d; margin-top: 0;">What You Can Expect:</h3>
            <ul style="color: #15803d; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li style="margin: 8px 0;">📞 A counselor will call/message you within 24 hours</li>
              <li style="margin: 8px 0;">🎓 Personalized guidance based on your course and profile</li>
              <li style="margin: 8px 0;">🌍 Detailed information about top universities matching your goals</li>
              <li style="margin: 8px 0;">💰 Complete fee structure and scholarship information</li>
              <li style="margin: 8px 0;">📋 Step-by-step admission and visa guidance</li>
              <li style="margin: 8px 0;">✈️ Full support throughout your entire application journey</li>
            </ul>
          </div>

          <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0c4a6e; margin-top: 0;">Your Enquiry Summary:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #bfdbfe;">
                <td style="padding: 10px 0; color: #0c4a6e;"><strong>Course:</strong></td>
                <td style="padding: 10px 0; color: #0c4a6e;">${course}</td>
              </tr>
              <tr style="border-bottom: 1px solid #bfdbfe;">
                <td style="padding: 10px 0; color: #0c4a6e;"><strong>Contact:</strong></td>
                <td style="padding: 10px 0; color: #0c4a6e;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #0c4a6e;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #0c4a6e;">${email}</td>
              </tr>
            </table>
          </div>

          <div style="background: #fef08a; border-left: 4px solid #eab308; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #713f12; margin: 0;"><strong>💡 Tip:</strong> Keep this email safe! Our counselor will reference your enquiry details when they contact you.</p>
          </div>

          <p style="color: #4b5563; line-height: 1.6; margin: 20px 0;">
            Questions before the counselor reaches out? Feel free to reply to this email or contact us directly.
          </p>

          <p style="color: #4b5563; margin: 20px 0;">
            Best Regards,<br>
            <strong style="color: #1e40af;">Admission Dunia Team</strong><br>
            <span style="color: #999; font-size: 12px;">Your Partner in Global Education</span>
          </p>
        </div>
        <div style="text-align: center; padding: 20px; background: #f3f4f6; color: #666; font-size: 12px; border-radius: 0 0 8px 8px;">
          <p style="margin: 0;">© 2025 Admission Dunia. All rights reserved.</p>
          <p style="margin: 5px 0 0 0;">This is an automated confirmation email from our counseling team.</p>
        </div>
      </div>
    `;

    // Send email to admin
    console.log("Sending admin email to:", adminEmail);
    const adminResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Admission Dunia",
            email: senderEmail,
          },
          to: [
            {
              email: adminEmail,
              name: "Admin",
            },
          ],
          subject: `New Enquiry from ${name} - Admission Dunia`,
          htmlContent: adminHtmlContent,
        }),
      }
    );

    const adminResponseText = await adminResponse.text();
    console.log("Admin response status:", adminResponse.status);
    console.log("Admin response:", adminResponseText);

    if (!adminResponse.ok) {
      console.error("Admin email error:", adminResponseText);
      throw new Error(`Failed to send admin email: ${adminResponse.status} - ${adminResponseText}`);
    }

    // Send confirmation email to student
    console.log("Sending confirmation email to:", email);
    const studentResponse = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: "Admission Dunia",
            email: senderEmail,
          },
          to: [
            {
              email: email,
              name: name,
            },
          ],
          subject: "Thank you for your enquiry - Admission Dunia",
          htmlContent: studentHtmlContent,
        }),
      }
    );

    const studentResponseText = await studentResponse.text();
    console.log("Student response status:", studentResponse.status);
    console.log("Student response:", studentResponseText);

    if (!studentResponse.ok) {
      console.error("Student email error:", studentResponseText);
      throw new Error(`Failed to send student email: ${studentResponse.status} - ${studentResponseText}`);
    }

    return NextResponse.json(
      {
        message:
          "Enquiry submitted successfully! Check your email for confirmation.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message:
          "Failed to submit enquiry. Please try again or contact support.",
      },
      { status: 500 }
    );
  }
}
