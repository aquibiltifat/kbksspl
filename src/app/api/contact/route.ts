import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Send contact form email
 *     description: Sends an email to admin with contact details and a thank-you email to the user
 *     tags:
 *       - Contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - subject
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's full name
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *                 example: john@example.com
 *               phone:
 *                 type: string
 *                 description: User's phone number (optional)
 *                 example: "+91 98765 43210"
 *               subject:
 *                 type: string
 *                 description: Message subject
 *                 example: Product Inquiry
 *               message:
 *                 type: string
 *                 description: User's message
 *                 example: I would like to know more about your products.
 *     responses:
 *       200:
 *         description: Email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Email sent successfully!
 *       400:
 *         description: Missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Missing required fields
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Failed to send email. Please try again later.
 */

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, company, country, subject, message } = await req.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create transporter (Gmail example)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_EMAIL_PASS,
            },
        });

        // 🔹 1. Mail to Admin
        await transporter.sendMail({
            from: `"KBK Sourcing Website" <${process.env.ADMIN_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact Form: ${subject}`,
            html: `
                <div style="font-family: 'Times New Roman', Times, serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Contact Form Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Name:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Email:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Company:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555;">${company || "Not provided"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Country:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555;">${country || "Not provided"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Phone:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555;">${phone || "Not provided"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">Subject:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #555;">${subject}</td>
                        </tr>
                    </table>
                    <h3 style="color: #333; margin-top: 20px;">Message:</h3>
                    <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; color: #555; line-height: 1.6;">${message}</p>
                </div>
            `,
        });

        // 🔹 2. Thank You Mail to User
        await transporter.sendMail({
            from: `"KBK Sourcing Services" <${process.env.ADMIN_EMAIL}>`,
            to: email,
            subject: "Thank you for contacting KBK Sourcing Services",
            html: `
                <div style="font-family: 'Times New Roman', Times, serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #2563eb; margin: 0;">KBK Sourcing Services</h1>
                    </div>
                    <h2 style="color: #333;">Hi ${name},</h2>
                    <p style="color: #555; line-height: 1.6; font-size: 16px;">
                        Thank you for reaching out to us! We have successfully received your message 
                        and our team will review it shortly.
                    </p>
                    <div style="background-color: #f0f9ff; border-left: 4px solid #2563eb; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                        <p style="margin: 0; color: #333; font-weight: bold;">Your Message Summary:</p>
                        <p style="margin: 10px 0 0 0; color: #555;"><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <p style="color: #555; line-height: 1.6; font-size: 16px;">
                        We typically respond within 24-48 business hours. If your matter is urgent, 
                        please feel free to call us directly.
                    </p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 25px 0;">
                    <p style="color: #888; font-size: 14px; margin: 0;">
                        Best Regards,<br>
                        <strong style="color: #333;">KBK Sourcing Services Team</strong><br>
                        <a href="https://www.kbksourcing.com" style="color: #2563eb; text-decoration: none;">www.kbksourcing.com</a>
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to send email. Please try again later." },
            { status: 500 }
        );
    }
}
