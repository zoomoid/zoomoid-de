import { NextResponse } from "next/server";
import { releases } from "./releases.mock";

export async function GET(request: Request){
  return NextResponse.json(releases)
}