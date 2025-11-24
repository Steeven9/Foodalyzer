import connectDB from "@/lib/db";
import Meal from "@/models/Meal";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    const query: { date?: { $gte: Date; $lt: Date } } = {};
    if (date) {
      const startOfDay = new Date(date);
      const endOfDay = new Date(date);
      endOfDay.setDate(endOfDay.getDate() + 1);

      query.date = {
        $gte: startOfDay,
        $lt: endOfDay,
      };
    }

    const meals = await Meal.find(query)
      .populate({
        path: "dishes.dishId",
        populate: {
          path: "ingredients.ingredientId",
        },
      })
      .sort({ date: -1, mealType: 1 });

    return NextResponse.json(meals);
  } catch (error) {
    console.error("Failed to fetch meals:", error);
    return NextResponse.json(
      { error: "Failed to fetch meals" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { date, mealType, dishes } = await request.json();

    if (!date || !mealType || !dishes || dishes.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const meal = new Meal({
      date: new Date(date),
      mealType,
      dishes,
    });

    await meal.save();
    await meal.populate({
      path: "dishes.dishId",
      populate: {
        path: "ingredients.ingredientId",
      },
    });

    return NextResponse.json(meal, { status: 201 });
  } catch (error) {
    console.error("Failed to create meal:", error);
    return NextResponse.json(
      { error: "Failed to create meal" },
      { status: 500 }
    );
  }
}
