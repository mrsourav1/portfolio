import { useState } from "react";
import { SelectedPage } from "../types/types";
import NavSection from "./NavSection";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <nav className="bg-slate-800 bg-opacity-80 h-20 text-slate-50">
      <div className="flex justify-between mx-16 px-2 py-6">
        <NavSection
          btn="Sourav"
        />
        <div className="w-1/3">
          <ul className="flex justify-between text-xl font-extrabold">
            {Object.values(SelectedPage).map((page) => (
              <li key={page}>
                <NavSection
                  btn={page}
                  selected={selectedPage === page}
                  onClick={() => setSelectedPage(page)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
