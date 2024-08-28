// eslint-disable-next-line react/prop-types
const Button = ({ active, onClick, children }) => {
  return (
    <button
      className={`flex-1 p-2 mb-0.5 rounded-lg shadow
        text-gray-900 dark:text-gray-50 hover:ring-1 hover:ring-emerald-600
        ${
          active
            ? "bg-primary-300 dark:bg-emerald-600 shadow-md shadow-slate-700"
            : "bg-gray-200 dark:bg-zinc-900"
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
