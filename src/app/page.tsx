'use client'

import { useState } from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

import { auth } from 'pass3-sdk'
import { SignUpScreen } from "@/components/ui/auth/sign-up"

export default function Component() {

  const [loading, setLoading] = useState(true)

  if (loading) {
    auth.test('adsd')
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Carousel
        className="flex-1 bg-muted"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          <SignUpScreen />
          <CarouselItem>
            <div className="grid grid-cols-2 h-screen">
              <div className="flex flex-col items-center justify-center gap-6 p-8">
                <h2 className="text-3xl font-bold">Sign In</h2>
                <form className="grid w-full max-w-md gap-4">
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <Button className="w-full">Sign In</Button>
                </form>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-primary p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold">Sign In with Pass3</h2>
                <div className="prose max-w-md">
                  <pre>
                    <code>{`
import { Pass3 } from 'pass3-sdk';

const pass3 = new Pass3({
  clientId: 'your-client-id',
  redirectUri: 'https://your-app.com/callback',
});

async function signIn() {
  try {
    await pass3.signIn();
    // User is now signed in
  } catch (error) {
    console.error('Sign in error:', error);
  }
}
                      `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-2 h-screen">
              <div className="flex flex-col items-center justify-center gap-6 p-8">
                <h2 className="text-3xl font-bold">List Users</h2>
                <div className="grid w-full max-w-md gap-4 overflow-auto">
                  {[
                    { id: 1, username: "jsmith", avatar: "/images/placeholder-user.jpg" },
                    { id: 2, username: "emiller", avatar: "/images/placeholder-user.jpg" },
                    { id: 3, username: "lbrown", avatar: "/images/placeholder-user.jpg" },
                    {
                      id: 4,
                      username: "jdoe",
                      avatar: "/placeholder-user.jpg",
                    },
                    { id: 5, username: "mwilson", avatar: "/images/placeholder-user.jpg" },
                  ].map((user) => (
                    <div key={user.id} className="flex items-center gap-4 rounded-md bg-muted p-3">
                      <Avatar>
                        <AvatarImage src="/images/placeholder-user.jpg" alt={user.username} />
                        <AvatarFallback>{user.username.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>{user.username}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-primary p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold">List Users with Pass3</h2>
                <div className="prose max-w-md">
                  <pre>
                    <code>{`
import { Pass3 } from 'pass3-sdk';

const pass3 = new Pass3({
  clientId: 'your-client-id',
  redirectUri: 'https://your-app.com/callback',
});

async function listUsers() {
  try {
    const users = await pass3.getUsers();
    // Display the users in your UI
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
                      `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-2 h-screen">
              <div className="flex flex-col items-center justify-center gap-6 p-8">
                <h2 className="text-3xl font-bold">Create Event</h2>
                <form className="grid w-full max-w-md gap-4">
                  <Input type="text" placeholder="Event Name" />
                  <Textarea placeholder="Event Description" rows={3} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="date" placeholder="Start Date" />
                    <Input type="date" placeholder="End Date" />
                  </div>
                  <Button className="w-full">Create Event</Button>
                </form>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-primary p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold">Create Event with Pass3</h2>
                <div className="prose max-w-md">
                  <pre>
                    <code>{`
import { Pass3 } from 'pass3-sdk';

const pass3 = new Pass3({
  clientId: 'your-client-id',
  redirectUri: 'https://your-app.com/callback',
});

async function createEvent(name, description, startDate, endDate) {
  try {
    await pass3.createEvent({
      name,
      description,
      startDate,
      endDate,
    });
    // Event is now created
  } catch (error) {
    console.error('Error creating event:', error);
  }
}
                      `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-2 h-screen">
              <div className="flex flex-col items-center justify-center gap-6 p-8">
                <h2 className="text-3xl font-bold">Token Gated Content</h2>
                <div className="prose max-w-md">
                  <p>This content is protected by a token. You must have the necessary token to access it.</p>
                  <pre>
                    <code>{`
import { Pass3 } from 'pass3-sdk';

const pass3 = new Pass3({
  clientId: 'your-client-id',
  redirectUri: 'https://your-app.com/callback',
});

async function checkToken() {
  try {
    const hasToken = await pass3.hasToken();
    if (hasToken) {
      // Display the protected content
    } else {
      // Prompt the user to acquire the necessary token
    }
  } catch (error) {
    console.error('Error checking token:', error);
  }
}
                      `}</code>
                  </pre>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6 bg-primary p-8 text-primary-foreground">
                <h2 className="text-3xl font-bold">Token Gated Content with Pass3</h2>
                <div className="prose max-w-md">
                  <p>This content is protected by a token. You must have the necessary token to access it.</p>
                  <pre>
                    <code>{`
import { Pass3 } from 'pass3-sdk';

const pass3 = new Pass3({
  clientId: 'your-client-id',
  redirectUri: 'https://your-app.com/callback',
});

async function checkToken() {
  try {
    const hasToken = await pass3.hasToken();
    if (hasToken) {
      // Display the protected content
    } else {
      // Prompt the user to acquire the necessary token
    }
  } catch (error) {
    console.error('Error checking token:', error);
  }
}
                      `}</code>
                  </pre>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 shadow-lg hover:bg-background/75 focus:outline-none focus:ring-2 focus:ring-primary">
          <ChevronLeftIcon className="h-6 w-6 text-foreground" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 shadow-lg hover:bg-background/75 focus:outline-none focus:ring-2 focus:ring-primary">
          <ChevronRightIcon className="h-6 w-6 text-foreground" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}