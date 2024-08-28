import Avatar from "./avatar";
import Logo from "./logo";
import SearchForm from "./searchForm";

export default function Header() {
  return (
    <header className="px-4 xl:px-6 h-16 lg:h-20 flex items-center justify-between gap-6 md:gap-16 xl:gap-32 bg-zinc-100 dark:bg-zinc-800 ">
      <Logo />
      <SearchForm />
      <Avatar />
    </header>
  );
}
