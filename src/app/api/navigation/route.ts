import { NextResponse } from "next/server";
import navigation from "./navigation.mock";

export async function GET(request: Request){
  return NextResponse.json(navigation)
}