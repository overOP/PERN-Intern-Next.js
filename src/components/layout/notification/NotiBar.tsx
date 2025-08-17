"use client";
import { useState } from "react";
import Notification from "@/components/layout/notification/Notification";
import { noti } from "@/data/navdata";
import { RxCross1 } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";

const NotiBar = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <header className="relative flex w-full items-center justify-center 
      bg-gradient-to-r from-primary via-primary-light to-secondary-blue 
      py-2 px-4 dark:from-neutral-7 dark:via-neutral-6 dark:to-neutral-5">
      <div className="flex flex-wrap items-center gap-4">
        {noti.map((item) => (
          <Notification key={item.id} icon={item.image} text={item.title} />
        ))}
        <button
          className="group hidden md:inline-flex items-center text-secondary-blue dark:text-secondary-blue/80 border-b border-secondary-blue dark:border-secondary-blue/80 text-button-xs Inter hover:text-white dark:hover:text-white transition-colors"
        >
          Shop Now
          <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
        </button>
      </div>
      <button
        aria-label="Dismiss notification bar"
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 md:right-4 lg:right-8 text-white dark:text-neutral-2 hover:text-white/80 dark:hover:text-neutral-3"
      >
        <RxCross1 className="h-4 w-4" />
      </button>
    </header>
  );
};

export default NotiBar;