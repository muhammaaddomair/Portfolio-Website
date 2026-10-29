import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) return NextResponse.json({error:"Invalid request origin."},{status:403});
  const testMode = process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const secret = testMode ? "1x0000000000000000000000000000000AA" : process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return NextResponse.json({error:"Verification is not configured. Please contact me by email."},{status:503});
  let token: unknown;
  try { token = (await request.json()).token; } catch { return NextResponse.json({error:"Invalid request."},{status:400}); }
  if (typeof token !== "string" || !token || token.length > 2048) return NextResponse.json({error:"Please complete the verification."},{status:400});
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({secret,response:token}), signal:AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || !result.success || (!testMode && (result.action !== "contact" || result.hostname !== request.nextUrl.hostname))) {
      return NextResponse.json({error:"Verification failed or expired. Please try again."},{status:400});
    }
    return NextResponse.json({verified:true},{headers:{"Cache-Control":"no-store"}});
  } catch { return NextResponse.json({error:"Verification is temporarily unavailable. Please try again."},{status:502}); }
}
