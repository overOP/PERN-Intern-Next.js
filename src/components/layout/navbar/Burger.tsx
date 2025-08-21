import { Button } from "@/components/ui/button";
import { burgerProps } from "@/types/navbar";
import React from "react";

const Burger = ({ icon, onToggle }: burgerProps) => {
  return (
    <Button className="md:hidden p-2" onClick={onToggle}>
      {icon}
    </Button>
  );
};

export default Burger;
