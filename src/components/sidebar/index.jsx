import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import WriteButton from "./writeButton";
import Button from "./button";

export default function Sidebar() {
  const adjuste = "inline mr-2 mb-1";
  return (
    <aside className=" hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
      <WriteButton>
        <FiEdit3 className={adjuste} />
        Write
      </WriteButton>
      <Button active>
        <FiInbox className={adjuste} />
        Inbox
      </Button>
      <Button>
        <FiSend className={adjuste} />
        Sent
      </Button>
      <Button>
        <FiFileText className={adjuste} />
        Sketch
      </Button>
      <Button>
        <FiArchive className={adjuste} />
        Archived
      </Button>
      <Button>
        <FiAlertOctagon className={adjuste} />
        Spam
      </Button>
      <Button>
        <FiTrash2 className={adjuste} />
        Trash
      </Button>
    </aside>
  );
}
