"use client";

import { Heart, ShoppingCart, X, Menu } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const navElement = ({ name, path }: NavbarProps) => {
    const isActive =
      pathName === path || (path !== "/" && pathName.startsWith(path));

    return (
      <div
        onClick={() => setMenuOpen(false)}
        className={`font-medium transition-colors duration-200 ${
          isActive
            ? "text-orange-500 border-b-2 border-orange-500 pb-1"
            : "text-gray-800 hover:text-orange-500"
        }`}
      >
        <Link href={path} className="text-sm lg:text-base">
          {name}
        </Link>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-transparent fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo.webp"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="w-[181px] h-[32px] lg:w-[225px] lg:h-[39px]"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
              {navElement({ name: "Home", path: "/" })}
              {navElement({ name: "Shop", path: "/shop" })}
              {navElement({ name: "About us", path: "/about" })}
              {navElement({ name: "Blog", path: "/blog" })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Favorites */}
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm lg:text-base">Favorites</span>
              </button>

              {/* Cart */}
              <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors relative">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="hidden lg:block text-sm lg:text-base">
                  Cart
                </span>
              </button>

              {/* Sign In Button */}
              <button className="bg-transparent hover:bg-green-700 border border-white hover:border-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Sign in
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-700 hover:text-orange-500"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 py-2 space-y-1">
            <div className="py-2">
              {navElement({ name: "Home", path: "/" })}
            </div>
            <div className="py-2">
              {navElement({ name: "Shop", path: "/shop" })}
            </div>
            <div className="py-2">
              {navElement({ name: "About us", path: "/about" })}
            </div>
            <div className="py-2">
              {navElement({ name: "Blog", path: "/blog" })}
            </div>
            <div className="py-2">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Favorites</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
