import ActionMenu from "../ui/ActionMenu";
import Logo from "../../icons/Logo";

export default function Header() {
  return (
    <header className="sticky top-0 py-5 lg:py-10 backdrop-blur-sm overflow-x-clip lg:relative lg:top-auto z-[100]">
      <nav className="container mx-auto px-3 md:px-5">
        <div className="flex items-center w-full justify-between lg:flex-col lg:justify-start lg:items-start lg:gap-10">
          <Logo />
          <ActionMenu />
        </div>
      </nav>
    </header>
  );
}
