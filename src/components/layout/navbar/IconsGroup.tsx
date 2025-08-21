import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import React from "react";
import Link from "next/link";
import { iconProps } from "@/types/navbar";

const IconsGroup = ({
  searchOpen,
  onToggleSearch,
  search,
  wishlist,
  profile,
  cart,
} : iconProps) => {
  return (
    <div className="flex items-center gap-4">
      <Button className="hidden md:flex" onClick={onToggleSearch}>
        {searchOpen ? (
          <MdClose size={22} />
        ) : (
          <Image src={search} alt="search" width={22} height={22} />
        )}
      </Button>
      {/* wishlist */}
      <Link href="/account/wishlist" className="relative hidden md:flex">
        <Image
          src={wishlist}
          alt="Wishlist"
          width={22}
          height={22}
          className="cursor-pointer"
        />
      </Link>
      {/* profile */}
      <Link href="/account/profile">
        <Button className="hidden md:flex">
          <Image
            src={profile}
            alt="Profile"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </Button>
      </Link>
      {/* Cart */}
      <Link href="/cart" className="relative hidden md:flex">
        <Image
          src={cart}
          alt="Cart"
          width={22}
          height={22}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default IconsGroup;
