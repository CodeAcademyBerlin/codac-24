import { database } from "@/db";
import { cohorts, lessons, students } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getLessonsByCourseId = (courseId: number) => {
    const result = database
        .select()
        .from(lessons)
        .where(eq(lessons.courseId, courseId));
    return result;
}

export const getCommunity = () => {
    const result = database.query.cohorts.findMany();
    return result;
}