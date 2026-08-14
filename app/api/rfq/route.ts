import { NextResponse } from "next/server";
import { rfqSchema } from "@/lib/validations/rfq";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/acad",
  "application/x-acad",
  "application/dwg",
  "application/x-dwg",
  "drawing/dwg",
]);

const SALES_EMAIL = "sales@pakoshaft.com";

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const payload = Object.fromEntries(
    Array.from(formData.entries()).filter(([key]) => key !== "drawing")
  );
  const parsed = rfqSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  const drawing = formData.get("drawing");
  if (drawing instanceof File && drawing.size > 0) {
    const extensionAllowed = drawing.name.toLowerCase().endsWith(".dwg");
    if (drawing.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: "Drawing file must be 10MB or smaller." }, { status: 413 });
    }
    if (!ALLOWED_FILE_TYPES.has(drawing.type) && !extensionAllowed) {
      return NextResponse.json(
        { error: "Upload a PDF, DWG, JPG or PNG drawing file." },
        { status: 415 }
      );
    }
  }

  console.log("[RFQ] New enquiry received:", {
    ...parsed.data,
    drawing: drawing instanceof File && drawing.size > 0
      ? { name: drawing.name, size: drawing.size, type: drawing.type }
      : null,
  });

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || `"Pako Engineers" <noreply@pakoshaft.com>`;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.log(
      "\n[RFQ FORM] ─────────────────────────────────\n" +
      "  ⚠️  SMTP env vars not set — add to .env.local to send real emails.\n" +
      "─────────────────────────────────────────────────\n"
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

    // Build RFQ email HTML
    const rfqHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:600px;width:100%;">
        <tr><td style="background:#1a2744;padding:28px 36px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;">New RFQ — Pako Engineers</h1>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:13px;">Received via pakoshaft.com RFQ form</p>
        </td></tr>
        <tr><td style="padding:32px 36px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Company</span>
              <p style="margin:4px 0 0;font-size:16px;color:#1e293b;font-weight:600;">${parsed.data.companyName}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Contact Person</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.contactName} (${parsed.data.designation || "N/A"})</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Email</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;"><a href="mailto:${parsed.data.email}" style="color:#e55a2b;text-decoration:none;">${parsed.data.email}</a></p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Phone</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.phone}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Country</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.country}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Industry</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.industry || "N/A"}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Product</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.product}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Material</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.material}</p>
            </td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Quantity</span>
              <p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.quantity}</p>
            </td></tr>
            ${parsed.data.requiredDate ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Required Date</span><p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${parsed.data.requiredDate}</p></td></tr>` : ""}
            ${drawing instanceof File && drawing.size > 0 ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Drawing File</span><p style="margin:4px 0 0;font-size:15px;color:#1e293b;">${drawing.name} (${(drawing.size / 1024).toFixed(1)} KB)</p></td></tr>` : ""}
            <tr><td style="padding:14px 0 0;">
              <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#64748b;">Additional Notes</span>
              <div style="margin:8px 0 0;padding:16px;background:#f8fafc;border-left:4px solid #e55a2b;border-radius:6px;font-size:14px;color:#334155;line-height:1.65;white-space:pre-wrap;">${parsed.data.message || "N/A"}</div>
            </td></tr>
          </table>
        </td></tr>
        <tr><td style="background:#f8fafc;padding:18px 36px;border-top:1px solid #e2e8f0;">
          <p style="margin:0;font-size:12px;color:#94a3b8;text-align:center;">Pako Engineers · Gat No. 453, Palus Colony, Kirloskar Wadi Road, Burli, Sangli-416308, MH, India<br/>Reply directly to this email to respond to <strong>${parsed.data.contactName}</strong></p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // Auto-reply HTML
    const autoReplyHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);max-width:600px;width:100%;">
        <tr><td style="background:#1a2744;padding:28px 36px;">
          <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">RFQ Received, ${parsed.data.contactName}!</h1>
          <p style="margin:6px 0 0;color:#94a3b8;font-size:13px;">We've received your quotation request at Pako Engineers</p>
        </td></tr>
        <tr><td style="padding:32px 36px;color:#334155;font-size:15px;line-height:1.7;">
          <p>Dear <strong>${parsed.data.contactName}</strong>,</p>
          <p>Thank you for submitting your Request for Quotation to <strong>Pako Engineers</strong>. We have successfully received your RFQ for <strong>${parsed.data.product}</strong>.</p>
          <p>Our engineering team will review your technical requirements and drawings. We typically respond with detailed quotations within <strong>24–48 business hours</strong>.</p>
          <p>If your inquiry is urgent, please call us directly at <a href="tel:+919921854252" style="color:#e55a2b;">+91-9921854252</a>.</p>
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

    const attachments: any[] = [];
    if (drawing instanceof File && drawing.size > 0) {
      attachments.push({
        filename: drawing.name,
        content: Buffer.from(await drawing.arrayBuffer()),
      });
    }

    // Notification email to sales team
    await transporter.sendMail({
      from: smtpFrom,
      to: SALES_EMAIL,
      replyTo: `${parsed.data.contactName} <${parsed.data.email}>`,
      subject: `[RFQ] ${parsed.data.companyName} — ${parsed.data.product}`,
      html: rfqHtml,
      text:
        `New RFQ from ${parsed.data.companyName}\n` +
        `Contact: ${parsed.data.contactName} (${parsed.data.email})\n` +
        `Phone: ${parsed.data.phone}\n` +
        `Country: ${parsed.data.country}\n` +
        `Product: ${parsed.data.product}\n` +
        `Material: ${parsed.data.material}\n` +
        `Quantity: ${parsed.data.quantity}\n` +
        `Message: ${parsed.data.message || "N/A"}`,
      attachments,
    });

    // Auto-reply to the enquirer
    await transporter.sendMail({
      from: smtpFrom,
      to: `${parsed.data.contactName} <${parsed.data.email}>`,
      subject: "RFQ Received — Pako Engineers",
      html: autoReplyHtml,
      text: `Dear ${parsed.data.contactName},\n\nThank you for your RFQ. We will respond within 24-48 business hours.\n\nBest regards,\nSales Team — Pako Engineers`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RFQ] Email send failed:", err);
    return NextResponse.json(
      { error: "Failed to send RFQ. Please try again or contact sales@pakoshaft.com directly." },
      { status: 500 }
    );
  }
}
