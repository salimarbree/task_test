import { NextResponse } from "next/server";
import { prisma } from "../../../lib/database"; // adjust path if needed

export async function POST(request: Request) {
  try {
    const { formId, data, score } = await request.json();

    const lead = await prisma.lead.create({
      data: {
        formId,
        data,
        score: score ?? 0,
      },
    });

    return NextResponse.json(lead);
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      include: { form: true },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
