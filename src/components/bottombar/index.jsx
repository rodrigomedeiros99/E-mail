import { useState } from "react";
import Button from "./button";
import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiMenu,
  FiTrash2,
  FiX,
} from "react-icons/fi";

const inlineIcon = "inline mb-1 sm:mr-2";
const smOnlyText = "hidden sm:inline";

const Bottombar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex gap-2 md:hidden items-center relative">
      <Button>
        <FiEdit3 className={inlineIcon} />
        <span className={smOnlyText}>Write</span>
      </Button>
      <Button active>
        <FiInbox className={inlineIcon} />
        <span className={smOnlyText}>Inbox</span>
      </Button>
      <Button>
        <FiFileText className={inlineIcon} />
        <span className={smOnlyText}>Sketch</span>
      </Button>
      <Button onClick={() => setIsMenuOpen((state) => !state)}>
        {isMenuOpen ? (
          <>
            <FiX className={inlineIcon} />
            <span className={smOnlyText}>Close</span>
          </>
        ) : (
          <>
            <FiMenu className={inlineIcon} />
            <span className={smOnlyText}>More</span>
          </>
        )}
      </Button>
      <div
        className={`${isMenuOpen ? "absolute" : "hidden"}
          right-0 bottom-12 flex flex-col gap-2 w-full`}
      >
        <Button>
          <FiArchive className="inline mr-2 mb-1" />
          <span className={smOnlyText}>Archived</span>
        </Button>
        <Button>
          <FiAlertOctagon className="inline mr-2 mb-1" />
          <span className={smOnlyText}>Spam</span>
        </Button>
        <Button>
          <FiTrash2 className="inline mr-2 mb-1" />
          <span className={smOnlyText}>Trash</span>
        </Button>
      </div>
    </div>
  );
};

export default Bottombar;
