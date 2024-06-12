"use client";
import Magnetic from "@/common/Magnetic";
import Link from "next/link";
import React from "react";

const NameHeader = ({ color }: { color: string }) => {
  return (
    <Link href={"/"}>
      <div className="absolute top-[50px] left-[50px] max-sm:left-[20px]">
        <Magnetic>
          <p
            className={`text-lg font-thin  ${
              color ? `text-${color}` : "text-white"
            }`}
          >
            @ fawasam
          </p>
        </Magnetic>
      </div>
    </Link>
  );
};

export default NameHeader;
