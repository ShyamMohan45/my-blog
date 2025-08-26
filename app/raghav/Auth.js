"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Auth({isOpen,onClose}) {
    

    if (!isOpen) return null

   return (
    <> 
    <div className=" relative inset-0 bg-white bg-opacity-50 flex items-center justify-center">


 <div className="absolute top-20 rounded-lg w-[400px] left-143 flex flex-col gap-2 h-[40] bg-white p-10">             <h2 className="text-2xl text-black font-bold mb-6">Create an account to Create Post</h2>

<button onClick={() => signIn("google")}
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.5 0 6.4 1.2 8.7 3.4l6.5-6.5C35.3 2.6 30.1 0 24 0 14.6 0 6.5 5.8 2.6 14.1l7.8 6.1C12 14.1 17.5 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.6c-.6 3.2-2.4 6-5.2 7.9l8 6.2c4.7-4.3 7.7-10.7 7.7-18.6z"/>
        <path fill="#FBBC05" d="M10.4 28.2c-.6-1.8-.9-3.7-.9-5.7s.3-3.9.9-5.7l-7.8-6.1C.9 14.4 0 19.1 0 22.5s.9 8.1 2.6 11.7l7.8-6z"/>
        <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.7l-8-6.2c-2.2 1.5-5.1 2.4-7.9 2.4-6.5 0-12-4.6-13.9-10.9l-7.8 6C6.5 42.2 14.6 48 24 48z"/>
    </svg>
    <span>Continue with Google</span>
</button>

 
<button onClick={() => signIn("linkedin")}
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
        <path fill="#0077B5" d="M34,2.5v29C34,32.9,32.9,34,31.5,34h-29C1.1,34,0,32.9,0,31.5v-29C0,1.1,1.1,0,2.5,0h29 C32.9,0,34,1.1,34,2.5z"/>
        <path fill="#fff" d="M5,12h5v17H5V12z M7.5,8C6.1,8,5,6.9,5,5.5S6.1,3,7.5,3S10,4.1,10,5.5S8.9,8,7.5,8z M14,12h5v2.5h0.1 c0.7-1.3,2.5-2.7,5.1-2.7c5.5,0,6.5,3.6,6.5,8.3V29h-5V21c0-2-0.1-4.6-3-4.6c-3,0-3.5,2.2-3.5,4.4V29h-5V12z"/>
    </svg>
    <span>Continue with LinkedIn</span>
</button>


 <button onClick={() => signIn("github")}
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1.1 3 .9.1-.6.3-1.1.6-1.3-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.3.3.6.8.6 1.6v2.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/>
    </svg>
    <span>Continue with GitHub</span>
</button>

 <button onClick={() => signIn("twitter")}
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DA1F2">
        <path d="M23.4 4.6c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.4 1.9-2.5-.9.5-1.8.9-2.9 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .9.1 1.3-3.7-.2-7-2-9.2-4.8-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.9-.7 0-1.4-.2-2-.6v.1c0 2.3 1.6 4.3 3.8 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.4-1.7 1.3-3.8 2.1-6 2.1H2c2.2 1.4 4.9 2.2 7.7 2.2 9.2 0 14.3-7.6 14.3-14.3v-.7c1-.7 1.7-1.5 2.3-2.5z"/>
    </svg>
    <span>Continue with Twitter</span>
</button>

 
<button onClick={() => signIn("facebook")}
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24H12v-9.3H9.3v-3.6H12V8.4c0-2.7 1.6-4.2 4-4.2 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.6.6-1.6 1.5v2h3.2l-.4 3.6h-2.8V24h5.5c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.2-1.3z"/>
    </svg>
    <span>Continue with Facebook</span>
</button>


<button onClick={() => signIn("apple")}
    className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md max-w-xs px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
        <path d="M16.4 1.4c0 1-0.4 2-1.1 2.8-0.7 0.8-1.9 1.5-2.9 1.4 0-1.1 0.4-2.2 1.1-3 0.8-0.9 2-1.5 3-1.6zM20.8 17.4c-0.5 1.1-0.8 1.6-1.5 2.6-1 1.5-2.4 3.2-4.1 3.2-1.5 0-1.9-1-4-1-2.1 0-2.5 1-4 1-1.7 0-3-1.6-4.1-3.1C2 17.3 1.1 13 2.7 10.3c1-1.6 2.8-2.7 4.8-2.7 1.5 0 2.9 1 3.9 1 0.9 0 2.6-1.2 4.6-1 0.8 0 3 0.3 4.4 2.3-0.1 0-2.6 1.5-2.6 4.5 0 3.6 3.2 4.8 3.2 4.8z"/>
    </svg>
    <span>Continue with Apple</span>
</button>
   </div>
          </div>
      
  
 <button
  onClick={onClose}
  className="absolute top-43 right-150 cursor-pointer text-gray-500 text-xl"
>
  ✖
</button>

</>)}

