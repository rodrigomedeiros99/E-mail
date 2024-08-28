import Avatarr from "./avatarr";

export default function EmailListItem({ onClick, email }) {
  return (
    <article
      className="flex items-center gap-4 [&+article]:mt-2 p-2 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-lg transition-colors "
      onClick={onClick}
    >
      <Avatarr letter={email.from[0].toUpperCase()} />
      <div className="grow shrink basis-40">
        <strong>{email.subject}</strong>
        <p>
          {email.body.length > 64
            ? email.body.slice(0, 64) + "..."
            : email.body}
        </p>
      </div>
    </article>
  );
}
