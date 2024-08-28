import EmailCloseButton from "./emailCloseButton";
import EmailDatee from "./emailDate";
import EmailTitle from "./emailTitle";

export default function EmailContent({ email, setOpenEmail }) {
  const sentDate = new Date(email.createdAt);
  const openEmailDate = `${sentDate.toLocaleDateString()}, ${sentDate.toLocaleTimeString()}`;
  return (
    <div className="p-2 md:p-4 absolute lg:relative h-full w-full bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-gray-50 grow-[2] basis-96 rounded-lg">
      <EmailCloseButton onClick={() => setOpenEmail(null)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailDatee>From: {`<${email.from}>`}</EmailDatee>
      <EmailDatee>To: {`<rodrigo.dev@email.com>`}</EmailDatee>
      <EmailDatee>Date: {openEmailDate}</EmailDatee>
      <hr className="my-4" />
      {email.body}
    </div>
  );
}
