import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const SALES_EMAIL = "sales@pakoshaft.com";

function validateContact(data: {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}): string | null {
  if (!data.name || data.name.trim().length < 2)
    return "Name must be at least 2 characters.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "A valid email address is required.";
  if (!data.message || data.message.trim().length < 10)
    return "Message must be at least 10 characters.";
  return null;
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:600px;width:100%;">
        <tr><td style="background:#1a2744;padding:28px 36px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New Quote Request — Pako Engineers</h1>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:13px;">Received via pakoshaft.com contact form</p>
        </td></tr>
        <tr><td style="padding:32px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Name</span>
              <p style="margin:4px 0 0;font-size:16px;color:#1e293b;font-weight:600;">${fields.name}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Email</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;"><a href="mailto:${fields.email}" style="color:#e55a2b;text-decoration:none;">${fields.email}</a></p>
            </td></tr>
            ${fields.company ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Company</span><p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${fields.company}</p></td></tr>` : ""}
            ${fields.phone ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Phone</span><p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${fields.phone}</p></td></tr>` : ""}
            <tr><td style="padding:14px 0 0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Requirements / Message</span>
              <div style="margin:8px 0 0;padding:16px;background:#f8fafc;border-left:4px solid #e55a2b;border-radius:6px;font-size:14px;color:#334155;line-height:1.65;white-space:pre-wrap;">${fields.message}</div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f8fafc;padding:18px 36px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">Pako Engineers · Gat No. 453, Palus Colony, Kirloskar Wadi Road, Burli, Sangli-416308, MH, India<br/>Reply directly to this email to respond to <strong>${fields.name}</strong></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildAutoReplyHtml(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:600px;width:100%;">
        <tr><td style="background:#1a2744;padding:28px 36px;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">Thank you, ${name}!</h1>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:13px;">We've received your enquiry at Pako Engineers</p>
        </td></tr>
        <tr><td style="padding:32px 36px;color:#334155;font-size:15px;line-height:1.7;">
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for reaching out to <strong>Pako Engineers</strong>. We have successfully received your quote request and our engineering team will review your requirements shortly.</p>
          <p>We typically respond within <strong>24–48 business hours</strong>. If your inquiry is urgent, please call us directly at <a href="tel:+919921854252" style="color:#e55a2b;">+91-9921854252</a>.</p>
          <p style="margin-bottom:0;">Warm regards,<br/><strong>Sales Team — Pako Engineers</strong><br/><span style="color:#94a3b8;font-size:13px;">sales@pakoshaft.com</span></p>
        </td></tr>
        <tr><td style="background:#f8fafc;padding:16px 36px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">Gat No. 453, Palus Colony, Kirloskar Wadi Road, Burli, Sangli-416308, MH, India</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validateContact(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 422 });
  }

  const fields = {
    name: body.name.trim(),
    email: body.email.trim().toLowerCase(),
    company: (body.company || "").trim(),
    phone: (body.phone || "").trim(),
    message: body.message.trim(),
  };

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `"Pako Engineers" <noreply@pakoshaft.com>`;

  if (!smtpHost || !smtpUser || !smtpPass) {
    // Dev mode: log to console, still return success so form flow can be tested
    console.log(
      "\n[CONTACT FORM] ─────────────────────────────────\n" +
      `  To:      ${SALES_EMAIL}\n` +
      `  From:    ${fields.name} <${fields.email}>\n` +
      `  Company: ${fields.company || "—"}\n` +
      `  Phone:   ${fields.phone || "—"}\n` +
      `  Message: ${fields.message}\n` +
      "─────────────────────────────────────────────────\n" +
      "  ⚠️  SMTP env vars not set — add to .env.local to send real emails.\n"
    );
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    // Notification email to sales team
    await transporter.sendMail({
      from: smtpFrom,
      to: SALES_EMAIL,
      replyTo: `${fields.name} <${fields.email}>`,
      subject: `[Quote Request] ${fields.company ? fields.company + " — " : ""}${fields.name}`,
      html: buildEmailHtml(fields),
      text:
        `New quote request from ${fields.name} (${fields.email})\n` +
        `Company: ${fields.company || "—"}\nPhone: ${fields.phone || "—"}\n\n${fields.message}`,
    });

    // Auto-reply to the enquirer
    await transporter.sendMail({
      from: smtpFrom,
      to: `${fields.name} <${fields.email}>`,
      subject: "We received your enquiry — Pako Engineers",
      html: buildAutoReplyHtml(fields.name),
      text: `Dear ${fields.name},\n\nThank you for contacting Pako Engineers. We will respond within 24-48 business hours.\n\nBest regards,\nSales Team — Pako Engineers`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact] Email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again or contact sales@pakoshaft.com directly." },
      { status: 500 }
    );
  }
}
