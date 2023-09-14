import { NextResponse } from "next/server";
import { socials } from "./socials.mock";

export async function GET(request: Request){
  return NextResponse.json(socials)
}