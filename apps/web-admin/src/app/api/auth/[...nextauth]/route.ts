import { authOptions } from '@elitevalet/network/src/config/authOptions'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
