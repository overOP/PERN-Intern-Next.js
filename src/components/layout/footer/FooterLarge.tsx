"use client";
import { footerData, legalLinks } from "@/data/footerData";
import SocialIcons from "@/components/layout/footer/SocialIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  year: number;
}

const FooterLarge = ({ year }: Props) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:block bg-primary-1 text-neutral-1 py-20 px-[160px] bg-black">
      {/* top row */}
      <div className="max-w-[1120px] mx-auto flex justify-between">
        {/* brand */}
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold">3legant.</span>
          <span className="text-text13">|</span>
          <span className="text-text13">Gift &amp; Decoration Store</span>
        </div>

        {/* links */}
        <nav className="flex gap-8">
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
      </div>

      <hr className="max-w-[1120px] mx-auto my-8 border-neutral-4" />

      {/* bottom row */}
      <div className="max-w-[1120px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <p className="text-text14">
            &copy; {year} 3legant. All rights reserved
          </p>
          {legalLinks.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="text-text14 hover:text-gray-400"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <SocialIcons size={20} />
      </div>
    </div>
  );
};

export default FooterLarge;
