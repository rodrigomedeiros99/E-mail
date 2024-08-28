import { FiX } from "react-icons/fi";

export default function EmailCloseButton({ onClick }) {
  return (
    <button
      className="absolute top-2 right-2 px-2 pb-1 rounded-md bg-red-300 hover:bg-red-400 dark:bg-red-500 dark:hover:bg-red-600 place-content-center transition-colors"
      onClick={onClick}
    >
      <FiX className="inline sm:mr-1 mb-[1px]" />
      <span className="hidden sm:inline">Close</span>
    </button>
  );
}
