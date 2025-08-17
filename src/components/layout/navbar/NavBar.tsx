"use client";
import React, { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import DesktopLinks from "./DesktopLinks";
import IconsGroup from "./IconsGroup";
import { useCart } from "@/hook/useCart";
import MobileBurger from "./MobileBurger";
import SearchInput from "./SearchInput";
import MobileSearchBar from "./MobileSearchBar";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const cartCount = useCart((state) =>
    state.cartItem.reduce((total, item) => total + item.quantity, 0)
  );

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [, setDebounced] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 500);
    return () => clearTimeout(t);
  }, [search]);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearch("");
  };

  return (
    <nav className="shadow-2xl dark:shadow-primary py-4 px-6 sticky top-0 z-50 bg-white dark:bg-neutral-900">
      <div className="max-w-[1120px] mx-auto flex justify-between items-center">
        {/* Mobile burger only on small screens */}
        <div className="md:hidden">
          <MobileBurger open={mobileOpen} onToggle={toggleMobile} />
        </div>

        {/* Brand always visible */}
        <BrandLogo />

        {/* Desktop nav links (hidden on mobile) */}
        <div className="hidden md:flex">
          <DesktopLinks />
        </div>

        {/* Icons (cart, search, etc.) */}
        <IconsGroup
          cartCount={cartCount}
          searchOpen={searchOpen}
          onToggleSearch={toggleSearch}
        />
      </div>

      {/* Desktop search input (only md+) */}
      {searchOpen && (
        <div className="hidden md:block">
          <SearchInput value={search} onChange={setSearch} />
        </div>
      )}

      {/* Mobile search bar (only < md) */}
      {searchOpen && (
        <div className="md:hidden">
          <MobileSearchBar value={search} onChange={setSearch} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <MobileMenu
            cartCount={cartCount}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
