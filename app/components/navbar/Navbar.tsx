"use client";
import { useState } from "react";
import NavbarLi from "../navbar-li/NavbarLi";
import { GiChocolateBar } from "react-icons/gi";
import { FaUserAlt, FaUserPlus, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleUserAccountClick = () => {
    router.push("/user_account");
  };

  return (
    <header>
      <div className="mb-16">
        {/* Top section */}
        <div className="flex justify-between items-center mb-8 mt-2 ml-4 p-4 pt-2">
          <div className="flex justify-start space-x-1 items-center">
            <GiChocolateBar className="text-orange-700 text-4xl" />
            <div className="text-3xl font-bold font-mono text-white">
              Choco Craft <span className="text-white text-xl">(Since-1999)</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 mr-4 items-center">
            <div className="relative group">
              <FaUserAlt className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Login</span>
            </div>
            <div className="relative group">
              <FaUserPlus className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Sign up</span>
            </div>
            <div className="relative group">
              <FaShoppingCart className="text-lg cursor-pointer text-white" 
              onClick={handleUserAccountClick}/>
              <span className="icon-tooltip group-hover:opacity-100">
                Your Cart
              </span>
            </div>
          </div>

          {/* Hamburger icon for mobile menu */}
          <div className="md:hidden flex items-center mr-4">
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            ) : (
              <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMobileMenu} />
            )}
          </div>
        </div>

        {/* Navbar Section */}
        <nav
          className={`navbar bg-white w-full h-full ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex justify-center items-center px-0 py-2`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center">
            <NavbarLi name="Home" href="/" />
            <NavbarLi name="About" href="/about" />
            <NavbarLi name="Products" href="/products" />
            <NavbarLi name="Contact" href="/contact" />
          </ul>
        </nav>

        {/* Mobile Icons Section */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex justify-around items-center mt-4">
            <div className="relative group">
              <FaUserAlt className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Login</span>
            </div>
            <div className="relative group">
              <FaUserPlus className="text-lg cursor-pointer text-white" />
              <span className="icon-tooltip group-hover:opacity-100">Sign up</span>
            </div>
            <div className="relative group">
              <FaShoppingCart className="text-lg cursor-pointer text-white" 
              onClick={handleUserAccountClick}/>
              <span className="icon-tooltip group-hover:opacity-100">
                Your Cart
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;