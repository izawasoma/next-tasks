import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const allTasks: TaskDocument[] = await TaskModel.find();
    return NextResponse.json({ message: "タスクの取得に成功しました", tasks: allTasks})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスクの取得に失敗しました"}, { status: 500 });
  }
}

export const dynamic = "force-dynamic";