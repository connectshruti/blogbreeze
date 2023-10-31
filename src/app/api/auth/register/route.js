import { User } from "@/models/User";
import connectDatabase from "@/utils/dbconfig";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (req, res) => {
  const { name, email, password } = await req.json();
  await connectDatabase();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return new NextResponse("User created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
