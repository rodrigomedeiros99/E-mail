import emails from "../../emails.json";
import EmailListItem from "./emailListItem";
export default function EmailList({ setOpenEmail }) {
  return (
    <div className="relative overflow-y-scroll grow-[1]">
      {emails.map((email) => (
        <EmailListItem
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
      ))}
    </div>
  );
}
