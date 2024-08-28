export default function Avatarr({ letter }) {
  return (
    <div className="rounded-full w-10 h-10 place-content-center grid bg-rose-300 dark:bg-sky-600">
      <span className="mb-0.5">{letter}</span>
    </div>
  );
}
