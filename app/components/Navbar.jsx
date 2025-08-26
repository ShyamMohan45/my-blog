"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react';
import Auth from '../raghav/Auth';

import { Dancing_Script } from 'next/font/google';
const dancing = Dancing_Script({
  weight: ['400', '700'], // choose weights you want
  subsets: ['latin'],
});


function Navbar() {
    const [showModal, setshowModal] = useState(false)

  const handleCreateClick = () => {
   setshowModal(true) 
  }


  

  return (<>
    <nav className={`flex justify-around items-center bg-pink-100 border border-black h-20 ${dancing.className}`}>
        <div className={`text-3xl text-black  ${dancing.className}`}  >
       <Link href={"/"}>    WriteSphere ✍️ </Link>
            </div>
        <ul className={`flex justify-center items-center space-x-7  text-black text-bold text-2xl  ${dancing.className}`}>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/about"}><li>About</li></Link>
          <Link onClick={handleCreateClick} href={"/post"}><li> Create Post</li></Link> 
          <Link onClick={handleCreateClick} href={"/login"}><li>login</li></Link>
          <Link onClick={handleCreateClick} href={"/start"}><li>Get started</li></Link>

        </ul>
    </nav>


       

     <Auth isOpen={showModal} onClose={() => setshowModal(false)} />

     
    </>
  )
}

export default Navbar
