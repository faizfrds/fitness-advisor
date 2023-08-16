import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const posts = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      { status: 500 }
    );
  }
};