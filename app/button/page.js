"use client"
import React from 'react'
import Auth from '../raghav/Auth'
import { useState } from 'react';

function page() {
    const [showModal, setshowModal] = useState(false)
        
          const handleCreateClick = () => {
           setshowModal(true) 
          }
  return (
    <div>
       <button onClick={handleCreateClick}  className="mt-8 w-45  px-6 py-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 transition">
          Start Reading
        </button>

 <Auth isOpen={showModal} onClose={() => setshowModal(false)} />
    </div>
  )
}

export default page
