import { NextResponse } from "next/server";
import footer from "./footer.mock";

export async function GET(request: Request){
  return NextResponse.json(footer)
}