import { FaTrashAlt } from "react-icons/fa";

interface TaskDeleteButtonProps {
  id: string;
}

export const TaskDeleteButton = ({ id }: TaskDeleteButtonProps) => {
  return (
    <form action="">
      <button type="submit" className="hover:text-gray-700 text-lg cursor-pointer">
        <FaTrashAlt />
      </button>
    </form>
  )
}
