import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    const res = NextResponse.next();
    return res;
};
