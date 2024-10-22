import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized: async ({ auth,request:{nextUrl} }) => {
            const isLogin = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            if (isOnDashboard) {
                if (isLogin) {
                    return true;
                }
                return true;
            } else if (isLogin) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return false;
        }
    },
    providers: [],
} satisfies NextAuthConfig;