import { NextResponse } from "next/server";

export async function POST() {
  console.log("Incoming request");
  const res = new NextResponse(
    "<Response><Message>Hi, great to have you here</Message></Response>",
  );
  res.headers.set("Content-type", "text/xml");
  return res;
}
