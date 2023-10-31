import { Post } from "@/models/Post";
import connectDatabase from "@/utils/dbconfig";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectDatabase();
    const post = await Post.findById({ _id: params.id });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
export const DELETE = async (res, { params }) => {
  const { id } = params;
  try {
    await connectDatabase();

    await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
