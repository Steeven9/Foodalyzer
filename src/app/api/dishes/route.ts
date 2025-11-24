import connectDB from "@/lib/db";
import Dish from "@/models/Dish";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const dishes = await Dish.find().populate("ingredients.ingredientId");
    return NextResponse.json(dishes);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch dishes" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { name, ingredients } = await request.json();

    if (!name || !ingredients || ingredients.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const dish = new Dish({
      name,
      ingredients,
    });

    await dish.save();
    await dish.populate("ingredients.ingredientId");

    return NextResponse.json(dish, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create dish" },
      { status: 500 }
    );
  }
}
