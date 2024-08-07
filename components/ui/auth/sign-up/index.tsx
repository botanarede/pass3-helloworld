'use client'

import * as React from "react"
import { FC } from "react"

import { CarouselItem } from "@/components/ui/carousel"
import { SignUpForm } from "@/components/ui/auth/sign-up/form"

export const SignUpScreen: FC = () => {
  return (
    <>
      <CarouselItem>
        <div className="grid grid-cols-2 h-screen">
          <SignUpForm />
          <div className="flex flex-col items-center justify-center gap-6 bg-primary p-8 text-primary-foreground">
            <h2 className="text-3xl font-bold">Sign Up with Pass3</h2>
            <div className="prose max-w-md">
              <pre>
                <code>{`
    import { Pass3 } from 'pass3-sdk';

    const pass3 = new Pass3({
    clientId: 'your-client-id',
    redirectUri: 'https://your-app.com/callback',
    });

    async function signUp(username, email, password) {
    try {
    await pass3.signUp(username, email, password);
    // User is now signed up
    } catch (error) {
    console.error('Sign up error:', error);
    }
    }
                  `}</code>
              </pre>
            </div>
          </div>
        </div>
      </CarouselItem>
    </>
  )
}