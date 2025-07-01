import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Configuração de autenticação básica
const USERNAME = process.env.BASIC_AUTH_USERNAME || 'davidlucas'
const PASSWORD = process.env.BASIC_AUTH_PASSWORD || '123452'

export function middleware(request: NextRequest) {
  // Verificar se é uma requisição para arquivos estáticos
  if (request.nextUrl.pathname.startsWith('/_next') || 
      request.nextUrl.pathname.startsWith('/favicon.ico') ||
      request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Verificar autenticação básica
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader) {
    return new NextResponse('Autenticação necessária', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Sistema de Gestão Têxtil"',
      },
    })
  }

  // Decodificar credenciais
  const encodedCredentials = authHeader.split(' ')[1]
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString()
  const [username, password] = decodedCredentials.split(':')

  // Verificar credenciais
  if (username !== USERNAME || password !== PASSWORD) {
    return new NextResponse('Credenciais inválidas', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Sistema de Gestão Têxtil"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 