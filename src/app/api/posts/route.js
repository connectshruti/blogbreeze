import connectDatabase from "@/utils/dbconfig";
import { Post } from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  try {
    await connectDatabase();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts));
  } catch (error) {
    return new NextResponse(error);
  }
};

export const POST = async (req, res) => {
  const body = await req.json();
  try {
    await connectDatabase();
    const post = new Post(body);
    await post.save();
    return new NextResponse("Post created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse(error);
  }
};
