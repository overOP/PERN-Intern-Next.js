import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { useWishlist } from "@/store/wishlixtStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import img1 from "../../../assets/Icon/Shape.png";
import shopping from "../../../assets/Icon/shopping bag.png";
import { navData } from "@/data/navdata";

interface Props {
  cartCount: number;
  onClose: () => void;
}

const MobileMenu = ({ cartCount, onClose }: Props) => {
  const [openLinks, setOpenLinks] = useState<Record<number, boolean>>({});
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;
  const pathname = usePathname();

  const toggleLink = (id: number) =>
    setOpenLinks((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="fixed inset-0 bg-white dark:bg-neutral-7 z-50 flex flex-col">
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <span className="text-2xl font-light tracking-wider dark:text-white">
          3legant<span className="text-gray-500 dark:text-gray-400">.</span>
        </span>
        <button onClick={onClose} className="text-gray-700 dark:text-gray-300">
          <MdClose size={24} />
        </button>
      </div>

      <div className="px-6 pb-6">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-neutral-6 dark:text-white"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {navData.map(({ id, title, url }) => {
          const isActive = pathname === url;
          return (
            <React.Fragment key={id}>
              <Link
                href={url}
                onClick={onClose}
                className={`flex items-center justify-between px-6 py-4 ${
                  isActive 
                    ? "text-black dark:text-white font-medium" 
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {title}
                {["Shop", "Product"].includes(title) && (
                  <FaChevronDown
                    size={14}
                    className={`transition-transform ${
                      openLinks[id] ? "rotate-180" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLink(id);
                    }}
                  />
                )}
              </Link>
              <div className="border-b border-gray-200 dark:border-gray-700" />
            </React.Fragment>
          );
        })}
      </nav>

      <div className="px-6 py-8 space-y-6">
        <div className="flex items-center justify-between dark:text-white">
          <span>Cart</span>
          <div className="relative">
            <Image src={shopping} alt="cart" width={20} height={20} className="dark:invert" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black dark:bg-white dark:text-black text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700" />

        <div className="flex items-center justify-between dark:text-white">
          <span>Wishlist</span>
          <Link
            href="/account/wishlist"
            className="relative text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            <Image src={img1} alt="wishlist" width={20} height={20} className="dark:invert" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black dark:bg-white dark:text-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
        </div>
        <div className="border-b border-gray-200 dark:border-gray-700" />

        <button className="w-full bg-black dark:bg-white dark:text-black text-white py-3 rounded-md">
          Sign In
        </button>

        <div className="flex gap-6 text-gray-800 dark:text-gray-200">
          <IoLogoInstagram size={20} />
          <SlSocialFacebook size={20} />
          <PiYoutubeLogoLight size={20} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;