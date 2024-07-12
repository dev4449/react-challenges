import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import ReactDOM from "react-dom";

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const NavigationMenu = (props: NavigationMenuProps) => {
  const { isOpen, onClose } = props;

  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="lg:hidden">
      <div
        className="absolute top-0 start-0 bg-primary/45 w-full h-full z-10"
        onClick={onClose}
      ></div>
      <div className="absolute top-0 start-0 bg-primary w-3/4 h-full z-20 text-white pt-5 px-2 text-center">
        <div className="flex justify-end">
          <Icon
            icon="ic:baseline-close"
            width="40"
            height="40"
            onClick={onClose}
          />
        </div>
        <div className="mt-4 p-2 inline-block mx-auto bg-secondary rounded-lg -skew-x-12 ">
          <p className="text-2xl font-bold">React Challenges</p>
        </div>
        <nav className="mt-8 text-start ms-4 text-2xl font-bold">
          <ul>
            <li>Home</li>
          </ul>
        </nav>
      </div>
    </div>,
    portalRoot
  );
};

export default NavigationMenu;
