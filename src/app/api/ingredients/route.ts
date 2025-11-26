import connectDB from "@/lib/db";
import Ingredient from "@/models/Ingredient";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const ingredients = await Ingredient.find().sort({ name: 1 });
    return NextResponse.json(ingredients);
  } catch (error) {
    console.error("Failed to fetch ingredients:", error);
    return NextResponse.json(
      { error: "Failed to fetch ingredients" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, calories, category, description } = await request.json();

    if (!name || calories === undefined || !category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ingredient = new Ingredient({
      name,
      calories,
      category,
      description: description || "",
    });

    await ingredient.save();
    return NextResponse.json(ingredient, { status: 201 });
  } catch (error) {
    console.error("Failed to create ingredient:", error);
    return NextResponse.json(
      { error: "Failed to create ingredient" },
      { status: 500 }
    );
  }
}
