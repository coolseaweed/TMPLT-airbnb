"use client";
import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      src="/images/placeholder.png"
      alt="Avatar"
    />
  );
};

export default Avatar;
