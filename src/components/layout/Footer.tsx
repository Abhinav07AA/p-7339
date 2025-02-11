import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white flex w-full items-stretch gap-5 text-sm tracking-[0.04px] flex-wrap justify-between px-4 py-5">
      <div className="flex items-center gap-2 text-[rgba(18,18,18,1)] font-medium leading-[15px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=100 100w"
          className="aspect-[1] object-contain w-[55px] self-stretch shrink-0 my-auto"
          alt="Portal Logo"
        />
        <span className="w-[219px] my-auto">
          Uttar Pradesh Farm Equipment Management Portal
        </span>
      </div>
      <div className="text-[#0A142F] text-center font-normal leading-[1.1] my-auto">
        © 2025 UP govt. All Rights Reserved.
      </div>
    </footer>
  );
};
