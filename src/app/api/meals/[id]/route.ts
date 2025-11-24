import connectDB from "@/lib/db";
import Meal from "@/models/Meal";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const meal = await Meal.findById(params.id).populate({
      path: "dishes.dishId",
      populate: {
        path: "ingredients.ingredientId",
      },
    });

    if (!meal) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 });
    }

    return NextResponse.json(meal);
  } catch (error) {
    console.error("Failed to fetch meal:", error);
    return NextResponse.json(
      { error: "Failed to fetch meal" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { mealType, dishes } = await request.json();

    const meal = await Meal.findByIdAndUpdate(
      params.id,
      { mealType, dishes },
      { new: true }
    ).populate({
      path: "dishes.dishId",
      populate: {
        path: "ingredients.ingredientId",
      },
    });

    if (!meal) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 });
    }

    return NextResponse.json(meal);
  } catch (error) {
    console.error("Failed to update meal:", error);
    return NextResponse.json(
      { error: "Failed to update meal" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const meal = await Meal.findByIdAndDelete(params.id);

    if (!meal) {
      return NextResponse.json({ error: "Meal not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Meal deleted" });
  } catch (error) {
    console.error("Failed to delete meal:", error);
    return NextResponse.json(
      { error: "Failed to delete meal" },
      { status: 500 }
    );
  }
}
