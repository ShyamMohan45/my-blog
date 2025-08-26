"use client"
import React from 'react'
import { useEffect,useState } from 'react';
import { Dancing_Script } from 'next/font/google';
const dancing = Dancing_Script({
  weight: ['400', '700'], 
  subsets: ['latin'],
});
function about() {
  const images =[
    "/smile.jpg",
    "/s.jpg",
    "/p.jpg",
    "/l.jpg",
    "/w.jpg"
  ]

  const colors = [
"bg-pink-100",
"bg-white",
"bg-amber-200",
"bg-blue-100",
"bg-green-100"
  ]



 const [index, setindex] = useState(0);

useEffect(() => {

  const timer = setTimeout(() => {
        let nextindex = index + 1;
  if(nextindex >= images.length){
    nextindex = 0;
  }
  setindex(nextindex);
    },3000);


  return () => {
    clearTimeout(timer);
  }
}, [index])

useEffect(() => {
  images.forEach((img) => {
    const newImg = new Image();
    newImg.src = img;
  });
}, []);


  return (
    <>
    <main className='grid grid-cols-2 '>
<section className={`${colors[index]} min-h-[80vh] flex flex-col justify-center items-center  `}>


  <h1 className={`text-4xl mb-5   text-black text-bold  ${dancing.className}`}>Welcome to My Blog Platform 👋 </h1>
  
  <h2 className={`text-black mx-0 text-4xl py-3 text-bold   ${dancing.className}`}>Support Human Stories</h2>
<p className={` text-black  text-2xl py-3 text-bold  max-w-2xl ${dancing.className}`}>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>  

</section>


<section className='min-h-[80vh]' style={{ backgroundImage:  `url(${images[index]})`,    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
     }} > 
</section>
    </main>

<main className=' grid grid-cols-2 border  border-black'>
    <section className={` ${dancing.className}  min-h-screen sticky top-0 flex flex-col h-30  justify-center items-center  border border-black`} style={{ backgroundImage:  "url(/e.jpg)"}}>
      <p className='text-6xl text-justify leading-relaxed w-180 text-black mb-20 '>How I am going to post and change an article or blog ?</p>
    </section>
   <section className="aryan  min-h-screen  p-10 bg-gray-100 space-y-15">
    <div className="flex flex-col items center justify-center space-y-8 ">
      <h1 className='text-black  text-5xl'>
        Reward writers
      </h1>
      <p className='text-justify text-xl text-black  '>Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.</p>
  </div>

  <div className="flex flex-col items center justify-center space-y-8 ">
      <h1 className='text-black  text-5xl'>
        Unlock every story

      </h1>
      <p className='text-justify text-xl text-black  '>In today’s digital world, blogging has become one of the most effective ways to share knowledge, experiences, and opinions with a global audience. An article allows you to express your ideas clearly, provide valuable insights, and connect with readers who share similar interests. Whether it’s about technology, lifestyle, or personal growth, writing a blog not only helps in building your personal brand but also opens the door to meaningful conversations and opportunities.</p>
  </div>

  <div className="flex flex-col irtems center justify-center space-y-8 ">
      <h1 className='text-black  text-5xl'>
        Enhance your reading experience

      </h1>
      <p className='text-justify text-xl text-black  '>Writing an article is more than just putting words on a page—it’s about telling a story that informs, inspires, or challenges the reader. A good blog post captures attention with a strong opening, keeps the reader engaged with useful or entertaining content, and leaves them with something to think about or act upon. Whether you’re sharing tips, experiences, or opinions, every article is an opportunity to make an impact.</p>
  </div>

<div className="flex flex-col items center justify-center space-y-8 ">
      <h1 className='text-black  text-5xl'>
        Elevate your writing
      </h1>
      <p className='text-justify text-xl text-black  '>Articles play a vital role in communicating ideas to a wide audience. They not only educate readers but also spark curiosity and encourage discussions on important topics. A well-written blog can simplify complex subjects, share personal experiences, or provide practical advice in a way that connects with people. The beauty of writing is that every article becomes a unique voice that adds value to the digital space.</p>

</div>


<div className="flex flex-col items center justify-center space-y-8 ">
      <h1 className='text-black  text-5xl'>
Support a mission that matters
       
      </h1>
      <p className='text-justify text-xl text-black  '>Every article is a chance to share a perspective that might inspire, inform, or guide someone else. Blogs allow writers to document their thoughts, explore new ideas, and reach readers across the world in just a few clicks. With the right words, even a simple article can leave a lasting impression and start meaningful conversations.</p>
</div>
  </section>



</main> 



</>
  )
}

export default about
2