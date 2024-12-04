import { getApiPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getApiPhotos();
    // console.log("API data:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching API photos:", error);
    return NextResponse.json({ error: "Failed to fetch photos" }, { status: 500 });
  }
}