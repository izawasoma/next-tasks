import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

export const TaskEditButton = ({ id }: TaskEditButtonProps) => {
  return (
    <Link href={`/edit/${id}`}>
      <FaPen className="hover:text-gray-700 text-lg cursor-pointer"/>
    </Link>
  )
}
