import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const runtime = 'edge'; // 'nodejs' is the default
export const preferredRegion = ['iad1', 'sfo1']

export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      body: request.body,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}