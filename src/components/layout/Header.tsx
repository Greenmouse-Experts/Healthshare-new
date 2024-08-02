import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/img/logo.png";
import Button from "../buttons/Button";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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


  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header
      className={`fixed top-0 left-0 z-[999] w-full text-base font-montserrat transition-all py-4 bg-transparent font-medium"
      }`}
    >
      <div
        className={`p-2   rounded-[100px] max-w-[85%] my-0 mx-auto flex ${
          isScrolled ? "border-none bg-[#00A24D]" : "border"
        } `}
      >
        <div className="bg-white w-[40%] lg:w-[15%]  px-4 py-2 rounded-[100px] ">
          <NavLink to="/" className="mx-auto my-0 ">
            <img src={Logo} alt="logo" className="" />
          </NavLink>
        </div>

        <div className="lg:flex hidden  items-center justify-end flex-grow gap-10 px-4 text-white 2xl:gap-16 ">
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

        <div className="flex lg:hidden  items-center justify-end flex-grow gap-10 px-4 text-white 2xl:gap-16 ">
          <div onClick={handleMenu}>
            {isMenuOpen ? (
              <GiHamburgerMenu size={30} />
            ) : (
              <GiCancel size={30} />
            )}
          </div>
        </div>

        <Button
          to="/"
          className={`px-8 py-1  bg-[#00A24D] hover:bg-[#145b36] transition-all rounded-[100px] max-w-[85%] my-0 mx-auto hidden lg:flex duration-350 ${
            isScrolled
              ? "  border border-[#fff] hover:bg-white hover:text-[#00a24d] transition-all"
              : ""
          }`}
        >
          CONTACT US
        </Button>
      </div>
    </header>
  );
}

export default Header;
