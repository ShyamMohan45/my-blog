
import Image from "next/image";
import { Dancing_Script } from 'next/font/google';

import Link from "next/link";
const dancing = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Home() {
   
    
  return (
    <>
      <div 
        className="h-[88vh] bg-cover  flex flex-col justify-center px-10"
        style={{ backgroundImage: "url('/article.jpg')" }}
      >
        <h1 className="text-7xl font-bold text-black max-w-3xl">
          Where Developers Write, Learn, and Grow.
        </h1>
        
        <p className={`text-2xl font-semibold text-black mt-6  ${dancing.className}`}>
          A place where stories and ideas live.
        </p>

     <Link href={"/button"} >   <button  className="mt-8 w-45  px-6 py-3 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800 transition">
          Start Reading
        </button>
        </Link>
      </div>
   
          
    </>
       
  );
}
