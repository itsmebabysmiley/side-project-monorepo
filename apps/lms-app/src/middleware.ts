import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = 'secret'

const key = new TextEncoder().encode(secretKey)

const protectedRoutes = ['/profile']

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  const result = await decrypt(session)
  return result
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const session = await getSession()

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/pre-auth', request.url))
  }
  return NextResponse.next()
}
