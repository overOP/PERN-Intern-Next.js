"use client";
import { iconData, textData } from "@/data/notificationData";
import React, { useState } from "react";
import IconNotification from "./IconNotification";
import TextNotification from "./TextNotification";
import { notificationData } from "@/data/shopData";
import Shop from "../../Shop";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";

const Notification = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative flex w-full items-center justify-center py-2 px-4">
      <div className="flex flex-wrap items-center gap-4">
        {iconData.map((item, index) => (
          <IconNotification key={index} icon={item.image} />
        ))}
        {textData.map((item, index) => (
          <TextNotification key={index} text={item.text} />
        ))}
        <div className="hidden md:inline-flex text-secondary-blue border-b border-secondary-blue">
          {notificationData.map((item, index) => (
            <Shop key={index} text={item.text} />
          ))}
        </div>
      </div>
      <Button
        aria-label="Dismiss Notification bar"
        onClick={() => setVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 md:right-4 lg:right-8"
      >
        <RxCross1 className="h-4 w-4 text-text7" />
      </Button>
    </div>
  );
};

export default Notification;
