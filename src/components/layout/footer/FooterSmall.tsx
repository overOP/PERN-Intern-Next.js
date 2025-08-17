"use client";

import { footerData, naveFooter } from "@/data/footerData";
import SocialIcons from "./SocialIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  year: number;
}

const FooterSmall = ({ year }: Props) => {
  const pathname = usePathname();

  return (
    <div className="block lg:hidden bg-primary-1 text-neutral-1 px-6 py-12 bg-black">
      <div className="max-w-[480px] mx-auto flex flex-col items-center gap-10">
        {/* brand */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-semibold leading-none">3legant.</h2>
          <div className="h-px w-8 bg-neutral-4" />
          <p className="text-text13 text-center">Gift &amp; Decoration Store</p>
        </div>

        {/* nav links */}
        <nav className="flex flex-wrap justify-center gap-8 w-full">
          {footerData.map((item) => {
            const isActive = pathname === item.url;
            return (
              <Link
                key={item.id}
                href={item.url}
                className={`text-text13 ${
                  isActive ? "font-medium" : "hover:text-gray-400"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* social icons */}
        <hr className="w-full border-neutral-4" />
        <SocialIcons className="pt-4" />

        {/* legal + small nav */}
        <div className="flex flex-col items-center gap-6 pt-4 w-full">
          <div className="flex flex-wrap justify-center gap-4">
            {naveFooter.map((item) => {
              const isActive = pathname === item.url;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  className={`text-text14 ${
                    isActive ? "font-medium" : "hover:text-gray-400"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <p className="text-text14 text-center">
            &copy; {year} 3legant. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSmall;
