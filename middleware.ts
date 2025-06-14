import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/', '/products(.*)', '/about'])
const isAdminRoute = createRouteMatcher(['/admin(.*)'])
export default clerkMiddleware((auth, req) => {
  // console.log(`admin: ${auth().userId}`)
  const userId = auth()?.userId
  if (!userId) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID
  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL('/', req.url))
  }
  if (!isPublicRoute(req)) auth().protect()
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
