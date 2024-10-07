import logo from "../../assets/logo.png";
import { Search } from "lucide-react";
import { AlignRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex justify-center pt-5">
      <div className="w-11/12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" />
          <h1 className="text-white text-2xl font-black">
            Drop <br /> Cream
          </h1>
        </div>
        <nav className="max-lg:hidden">
          <ul className="flex gap-10">
            <li className="text-white font-medium">Inicio</li>
            <li className="text-white font-medium">Acerca Nosotros</li>
            <li className="text-white font-medium">Contactanos</li>
            <li>
              <Search size={28} strokeWidth={3} className="text-white" />
            </li>
          </ul>
        </nav>
        <AlignRight size={38} strokeWidth={2} className="text-white" />
      </div>
    </header>
  );
};

export default Navbar;
