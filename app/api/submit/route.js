
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { post, title } = body

    if (!title || !post) {
      return NextResponse.json(
        { success: false, error: true, message: "title and post are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("nextauth")
    const collection = db.collection("posts") // use 'posts' unless you intentionally want 'users'

    const existing = await collection.findOne({ title: title })
    if (existing) {
      return NextResponse.json(
        { success: false, error: true, message: "Post with this title already exists" },
        { status: 409 }
      )
    }

    await collection.insertOne({
      title,
      post,
      createdAt: new Date(),
    })

    return NextResponse.json(
      { success: true, error: false, message: "Post saved successfully!" },
      { status: 201 }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, error: true, message: "Failed to save Post" },
      { status: 500 }
    )
  }
}
