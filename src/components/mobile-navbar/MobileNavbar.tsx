import { Icon } from "@iconify-icon/react";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

export default function MobileNavbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="lg:hidden">
      <section className="bg-primary h-[100px] p-4 flex items-center justify-between text-white">
        <div>
          <Icon
            icon="ic:baseline-menu"
            width="48"
            height="48"
            onClick={toggleMenu}
          />
        </div>
        <div className="p-2 bg-secondary rounded-lg -skew-x-12 ">
          <p className="text-2xl font-bold">React Challenges</p>
        </div>
      </section>
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
