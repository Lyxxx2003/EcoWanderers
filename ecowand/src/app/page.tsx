'use client';
import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function Home() {
  // const session = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect('/signin');
  //   },
  // });

  return (
    <>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        {/* <div className="p-8">
          <div className="text-white">{session?.data?.user?.email}</div>
          <button className="text-white" onClick={() => signOut()}>Logout</button>
        </div> */}
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>
          Lorem Ipsum is simply dummy text ...
        </p>
      </div>
    </>
  );
}
Home.requireAuth = true