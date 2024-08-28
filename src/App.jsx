import Header from "./components/header";
import Container from "./components/container";
import Sidebar from "./components/sidebar";
import Bottombar from "./components/bottombar";
import { useState } from "react";
import EmailList from "./components/emailList";
import EmailContent from "./components/emailContent";

export default function App() {
  const btn =
    "flex justify-center mt-10 ring-1 ring-red-500 rounded-xl mx-auto px-4 py-2 text-center transition-colors text-gray-50 bg-gray-600 hover:bg-purple-600 hover:text-gray-200";
  const [openEmail, setOpenEmail] = useState(null);
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <EmailList setOpenEmail={setOpenEmail} />
          {openEmail && (
            <EmailContent email={openEmail} setOpenEmail={setOpenEmail} />
          )}
          <Bottombar />
        </div>
      </Container>
    </>
  );
}
