
"use client"

import React, { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Page() {
  const { data: session, status } = useSession()
  const [postData, setPostData] = useState({ post: "", title: "" })

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      })
      const result = await res.json()
      alert(result.message || "Saved")
    } catch (err) {
      console.error(err)
      alert("Error saving post")
    }
  }

  return (
    <>
      <div
        className="min-h-screen h-[80vh] bg-cover text-black"
        style={{ backgroundImage: "url(/left.jpg)" }}
      >
        <header className="p-4">
          {status === "loading" ? (
            <span className="text-black">Loading...</span>
          ) : session ? (
            <div className="text-black">
              <span>Signed in as {session.user?.email}</span>
              <button onClick={() => signOut()} className="ml-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Sign out
              </button>
            </div>
          ) : (
            <div className="text-black">
              <span>Not signed in</span>
              <button  onClick={() => signIn()} className="ml-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Sign in
              </button>
            </div>
          )}
        </header>

        <main className="p-6">
          <article>
            <h1 className="text-2xl font-bold mb-4">Post title</h1>
            <p>Preview / instructions can go here.</p>
          </article>

          {session ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block mb-1 font-medium">Title</label>
                <input
                  name="title"
                  value={postData.title}
                  onChange={handleChange}
                  type="text"
                  required
                  placeholder="Enter the title of post"
                  className="h-10 w-80 border border-purple-400 rounded-lg px-3 text-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Content</label>
                <textarea
                  name="post"
                  value={postData.post}
                  onChange={handleChange}
                  placeholder="Write your post..."
                  className="w-full max-w-2xl h-40 rounded-lg border border-black p-2 mt-2"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 text-sm text-gray-700">
              Sign in to create or edit posts.
            </div>
          )}
        </main>
      </div>
    </>
  )
}
