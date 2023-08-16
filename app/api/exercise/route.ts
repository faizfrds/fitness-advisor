import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {

    const url = new URL(req.url)
    console.log(url);
    const desiredId = parseInt(url.searchParams.get("categoryId") || '10');
    console.log(desiredId);

    const posts = await prisma.exercise.findMany({
        where: {
            categoryId: desiredId!,
        }
    });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "something went wrong" }),
      { status: 500 }
    );
  }
};