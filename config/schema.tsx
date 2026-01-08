import { id } from "date-fns/locale";
import { integer, json, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  name: varchar({ length: 255 }).notNull(),
  //   age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points: integer().default(0),
  subscription: varchar()
});

export const courseTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull().unique(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  bannerImage: varchar().notNull(),
  level: varchar({ length: 50 }).default('Beginner'),
  tags: varchar({ length: 255 })

});

export const courseChaptersTable = pgTable("courseChapters", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 500 }).notNull(),
  exercises: json(),
  chapterId: integer().notNull()
});

export const enrolledCoursesTable = pgTable("enrolledCourses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  courseId: integer().notNull(),
  enrolledDate: timestamp().defaultNow(),
  xpEarned: integer().default(0)
});

export const completedExercisesTable = pgTable("completedExercises", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).notNull(),
  courseId: integer().notNull(),
  chapterId: integer().notNull(),
  exerciseId: integer().notNull(),
  completedDate: timestamp().defaultNow(),
})
