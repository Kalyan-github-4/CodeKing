import { courseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";


const DATA = [
  {
    id: 1,
    name: "Introduction to CSS",
    description: "Learn what CSS is, how it works, and how to apply styles to HTML elements.",
    exercises: [
      { name: "Add CSS using inline styles", xp: 20, difficulty: "Easy" },
      { name: "Use internal CSS with <style>", xp: 25, difficulty: "Easy" },
      { name: "Link an external CSS file", xp: 25, difficulty: "Easy" }
    ]
  },
  {
    id: 2,
    name: "CSS Selectors",
    description: "Understand how to target HTML elements using different CSS selectors.",
    exercises: [
      { name: "Use element and class selectors", xp: 25, difficulty: "Easy" },
      { name: "Apply ID and group selectors", xp: 30, difficulty: "Easy" },
      { name: "Style elements using descendant selectors", xp: 35, difficulty: "Medium" }
    ]
  },
  {
    id: 3,
    name: "Colors & Typography",
    description: "Style text using colors, fonts, spacing, and typography properties.",
    exercises: [
      { name: "Apply colors using HEX, RGB, and named colors", xp: 25, difficulty: "Easy" },
      { name: "Style text using font properties", xp: 30, difficulty: "Medium" },
      { name: "Create a typography-based content page", xp: 40, difficulty: "Medium" }
    ]
  },
  {
    id: 4,
    name: "Box Model",
    description: "Learn how margin, padding, border, and content define element layout.",
    exercises: [
      { name: "Apply margin and padding", xp: 25, difficulty: "Easy" },
      { name: "Style borders and outlines", xp: 30, difficulty: "Easy" },
      { name: "Build a card layout using box model", xp: 40, difficulty: "Medium" }
    ]
  },
  {
    id: 5,
    name: "CSS Layout Basics",
    description: "Understand how elements are positioned and aligned on a webpage.",
    exercises: [
      { name: "Use display and visibility properties", xp: 30, difficulty: "Medium" },
      { name: "Position elements using relative and absolute", xp: 40, difficulty: "Medium" },
      { name: "Create a simple page layout", xp: 45, difficulty: "Hard" }
    ]
  },
  {
    id: 6,
    name: "Flexbox",
    description: "Build flexible and responsive layouts using CSS Flexbox.",
    exercises: [
      { name: "Create a flex container", xp: 30, difficulty: "Easy" },
      { name: "Align items using justify-content and align-items", xp: 40, difficulty: "Medium" },
      { name: "Build a responsive navbar using Flexbox", xp: 50, difficulty: "Hard" }
    ]
  },
  {
    id: 7,
    name: "CSS Grid",
    description: "Design complex, two-dimensional layouts using CSS Grid.",
    exercises: [
      { name: "Create a basic grid layout", xp: 35, difficulty: "Medium" },
      { name: "Use grid-template areas", xp: 45, difficulty: "Medium" },
      { name: "Build a dashboard layout using Grid", xp: 55, difficulty: "Hard" }
    ]
  },
  {
    id: 8,
    name: "Responsive Design",
    description: "Make websites adaptable to different screen sizes using responsive techniques.",
    exercises: [
      { name: "Use media queries", xp: 35, difficulty: "Medium" },
      { name: "Build a mobile-first layout", xp: 45, difficulty: "Medium" },
      { name: "Optimize a page for desktop, tablet, and mobile", xp: 55, difficulty: "Hard" }
    ]
  },
  {
    id: 9,
    name: "Transitions & Animations",
    description: "Add motion and interactivity using CSS transitions, transforms, and animations.",
    exercises: [
      { name: "Create hover transitions", xp: 30, difficulty: "Easy" },
      { name: "Apply transforms (scale, rotate, translate)", xp: 40, difficulty: "Medium" },
      { name: "Build a CSS loading animation", xp: 55, difficulty: "Hard" }
    ]
  },
  {
    id: 10,
    name: "CSS Variables & Best Practices",
    description: "Write clean, maintainable, and scalable CSS using modern techniques.",
    exercises: [
      { name: "Use CSS custom properties (variables)", xp: 35, difficulty: "Medium" },
      { name: "Refactor styles using reusable classes", xp: 45, difficulty: "Medium" },
      { name: "Style a complete webpage with clean CSS", xp: 60, difficulty: "Hard" }
    ]
  }
];





export async function GET(req: NextRequest) {
  try {
    const rows = DATA.map(item => ({
      name: item.name,
      description: item.description,
      exercises: (item.exercises),
      chapterId: item.id,
      courseId: 2,
    }));

    await db.insert(courseChaptersTable).values(rows);

    return NextResponse.json({ message: "HTML chapters inserted for courseId 1" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Insert failed" }, { status: 500 });
  }
}