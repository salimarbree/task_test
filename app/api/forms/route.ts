import { NextResponse } from "next/server";
import { prisma } from "../../../lib/database";

export async function POST(request: Request) {
  try {
    const { name, elements } = await request.json();

    const form = await prisma.form.create({
      data: { name, elements },
    });

    return NextResponse.json(form);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create form" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const forms = await prisma.form.findMany({
    include: { leads: true },
  });
  return NextResponse.json(forms);
}
