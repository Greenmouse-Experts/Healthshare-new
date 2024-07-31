import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/img/logo.png";
import Button from "../buttons/Button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full text-base font-montserrat transition-all py-4  ${
        isScrolled ? "bg-[#00A24D] shadow-md " : "bg-transparent"
      }`}
    >
      <div
        className={`p-2   rounded-[100px] max-w-[85%] my-0 mx-auto flex ${
          isScrolled ? "border-none" : "border"
        } `}
      >
        <div className="bg-white w-[15%]  px-4 py-2 rounded-[100px] ">
          <NavLink to="/" className="  my-0 mx-auto   ">
            <img src={Logo} alt="logo" className=" " />
          </NavLink>
        </div>

        <div className="flex flex-grow items-center gap-10 text-white  justify-end px-4 2xl:gap-16   ">
          <NavLink to="/" className="nav">
            HOME
          </NavLink>
          <NavLink to="/# " className="nav ">
            ABOUT US
          </NavLink>
          <NavLink to="/#" className="nav ">
            PRODUCTS & SERVICES
          </NavLink>
          <NavLink to="/# " className="nav ">
            RESOURCES
          </NavLink>
          <NavLink to="/#" className="nav ">
            NEWS & BLOG
          </NavLink>
        </div>

        <Button
          to="/"
          className="  px-8 py-1  bg-[#00A24D] hover:bg-[#145b36] transition-all  "
        >
          CONTACT US
        </Button>
      </div>
    </header>
  );
}

export default Header;
