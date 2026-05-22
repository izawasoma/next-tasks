import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    await connectDb();
    const task = await TaskModel.findById(params.id);
    if(!task) {
      return NextResponse.json({ message: "タスクが見つかりませんでした" }, { status: 404 });
    }
    return NextResponse.json({ message: "タスクの取得に成功しました", task })
  } catch {
    return NextResponse.json({ message: "タスクの取得に失敗しました" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";