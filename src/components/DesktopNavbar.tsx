import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  return (
    <nav className="hidden lg:flex justify-between items-center h-[100px] bg-primary text-white p-7">
      <ul className="flex gap-x-2 font-bold text-2xl">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div className="p-2 bg-secondary rounded-lg -skew-x-12 ">
        <p className="text-2xl font-bold">React Challenges</p>
      </div>
    </nav>
  );
}
