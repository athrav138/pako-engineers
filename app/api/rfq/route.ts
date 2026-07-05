import { NextResponse } from "next/server";
import { rfqSchema } from "@/lib/validations/rfq";

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

  return NextResponse.json({ ok: true });
}
