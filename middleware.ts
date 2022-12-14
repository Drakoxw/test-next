import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToStorage, logDev } from './utils'
import { useGlobalCtx } from 'state'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = getToStorage('token')
  if (token === '') {
    logDev('no existe token')
    return NextResponse.redirect(new URL('/', request.url))
  }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/resposesApi/:path*',
}