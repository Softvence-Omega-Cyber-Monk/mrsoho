import React from "react";
import { Button } from "@/components/ui/button";
interface PrimaryBtnProps {
  btnText?: string;
}
const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ btnText }) => {
  return (
    <div>
      <Button className="w-full h-11 mt-4 py-3 bg-[#FEDA42] text-[#272F3A] text-xl font-bold rounded-lg shadow-md hover:bg-yellow-400 transition duration-150">
        {btnText}
      </Button>
    </div>
  );
};

export default PrimaryBtn;
