import React from "react";
import searchIc from "@/assets/Icon/Vector copy.png";
import icon from "@/assets/Icon/Shape.png";
import shopping from "@/assets/Icon/shopping bag.png";
import profile from "@/assets/Icon/Vector copy 2.png";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { useWishlist } from "@/store/wishlixtStore";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";

interface Props {
    cartCount: number;
    searchOpen: boolean;
    onToggleSearch: () => void;
    height?: number;
    width?: number;
}

const IconsGroup = ({
  cartCount,
  searchOpen,
  onToggleSearch,
  height = 22,
  width = 22,
}: Props) => {
  const { wishlistItems } = useWishlist();
  const wishlistCount = wishlistItems.length;

  return (
    <div className="flex items-center space-x-5">
      <Button onClick={onToggleSearch} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hidden md:flex">
        {searchOpen ? (
          <MdClose size={22} />
        ) : (
          <Image src={searchIc} alt="" width={width} height={height} className="dark:invert" />
        )}
      </Button>
      
      <Link
        href="/account/wishlist"
        className="relative text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hidden md:flex"
      >
        <Image src={icon} alt="wishlist" width={width} height={height} className="dark:invert" />
        {wishlistCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black dark:bg-white dark:text-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {wishlistCount}
          </span>
        )}
      </Link>

      <Link href="/account">
        <Button className="hidden md:flex">
          <Image src={profile} alt="profile" width={width} height={height} className="dark:invert" />
        </Button>
      </Link>

      <Link
        href="/cart"
        className="relative text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white hidden md:flex"
      >
        <Image src={shopping} alt="cart" width={width} height={height} className="dark:invert" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black dark:bg-white dark:text-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
      
      <ModeToggle/>
    </div>
  );
};

export default IconsGroup;