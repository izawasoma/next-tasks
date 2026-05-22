import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    // 今日の日付を "YYYY-MM-DD" 形式で取得
    const currentDate = new Date()
      .toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");
    const expiredTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate }, // $lt は "less than" を意味し、期限が今日より前のタスクを取得するために使用します
    });
    return NextResponse.json({
      message: "タスクの取得に成功しました",
      tasks: expiredTasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "タスクの取得に失敗しました" },
      { status: 500 },
    );
  }
};

export const dynamic = "force-dynamic";
