import { NextRequest } from "next/server";

export function middleware(request){
    // return NextRequest.redirect(new URL('/',request.url))
    return NextRequest.next()
}

export const config =  {
    matcher: ["/blog/:path*"]
}