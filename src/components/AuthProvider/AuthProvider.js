"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'

function AuthProvider({ childern }) {
    return (
        <SessionProvider>{childern}</SessionProvider>
    )
}

export default AuthProvider