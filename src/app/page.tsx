import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-emerald-400 mb-4">
              Foodalyzer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Track your meals, count your calories, understand your diet
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Foodalyzer helps you maintain a healthy diet by tracking your
              meals and their nutritional content. Build your personal
              ingredient pantry, log daily meals, and visualize your calorie
              intake.
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                🥗 The Pantry
              </h2>
              <p className="text-slate-300 mb-6">
                Build your personal ingredient database. Add ingredients with
                their calorie content and category information. Your pantry is
                saved for easy reuse across meals.
              </p>
              <Link href="/pantry">
                <Button className="w-full">Go to Pantry</Button>
              </Link>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                📝 The Table
              </h2>
              <p className="text-slate-300 mb-6">
                Log your daily meals by selecting ingredients from your pantry
                and entering their weights. Calories are automatically
                calculated based on your ingredient data.
              </p>
              <Link href="/table">
                <Button className="w-full">Go to Table</Button>
              </Link>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                📊 Diary
              </h2>
              <p className="text-slate-300 mb-6">
                View your daily meal summaries with calorie breakdowns by
                category and meal type. Visualize your eating patterns and
                nutritional distribution.
              </p>
              <Link href="/diary">
                <Button className="w-full">Go to Diary</Button>
              </Link>
            </div>

            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                ℹ️ How It Works
              </h2>
              <ul className="text-slate-300 space-y-2">
                <li>✓ Create ingredients in your pantry</li>
                <li>✓ Log meals with ingredient combinations</li>
                <li>✓ Track weight for each ingredient</li>
                <li>✓ View daily calorie summaries</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-emerald-900 bg-opacity-50 border border-emerald-700 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-emerald-300 mb-4">
              Ready to start tracking?
            </h3>
            <p className="text-slate-300 mb-8">
              Begin by adding ingredients to your pantry, then start logging
              your meals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pantry">
                <Button className="w-full sm:w-auto">Start with Pantry</Button>
              </Link>
              <Link href="/table">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Log a Meal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
