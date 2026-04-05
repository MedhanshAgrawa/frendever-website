import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company name."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().optional(),
  category: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(20, "Please share a little more about your project.")
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      const firstIssue = result.error.issues[0];
      return NextResponse.json({ error: firstIssue.message }, { status: 400 });
    }

    const data = result.data;
    const to = process.env.CONTACT_TO || "frendevertextile@rediffmail.com";
    const hasMailerConfig = Boolean(
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_FROM
    );

    if (hasMailerConfig) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.CONTACT_FROM,
        to,
        replyTo: data.email,
        subject: `New inquiry from ${data.company} — ${data.name}`,
        text: [
          `Name: ${data.name}`,
          `Company: ${data.company}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone || "-"}`,
          `Category: ${data.category || "-"}`,
          `Quantity: ${data.quantity || "-"}`,
          "",
          "Project brief:",
          data.message
        ].join("\n")
      });
    } else {
      console.log("Contact inquiry received without SMTP configured:", data);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to submit the inquiry right now." }, { status: 500 });
  }
}
