import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.08)] flex w-full items-center gap-5 justify-between px-4 py-[5px]">
      <div className="flex items-center gap-2 text-sm text-[rgba(18,18,18,1)] font-medium tracking-[0.04px] leading-[15px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=200 200w"
          className="aspect-[1] object-contain w-[55px] self-stretch shrink-0 my-auto"
          alt="Portal Logo"
        />
        <Link to="/" className="w-[219px] my-auto">
          Uttar Pradesh Farm Equipment Management Portal
        </Link>
      </div>

      <nav className="flex items-center gap-8 text-sm text-[#666] font-normal text-justify tracking-[0.04px] leading-[1.1]">
        <Link to="/browse" className="text-[#0B0B0B] font-medium">
          Browse Equipment
        </Link>
        <Link to="/rentals" className="hover:text-[#0B0B0B]">
          My Rentals
        </Link>
        <Link to="/marketplace" className="hover:text-[#0B0B0B]">
          Residue Marketplace
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <button aria-label="Notifications" className="w-8 h-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/6a78b82cec16cc9639dbced6e3aee7b96d121c4eb47e68013c0a111e4dbd7aa7?placeholderIfAbsent=true"
            alt="Notifications"
            className="w-full h-full"
          />
        </button>
        <button aria-label="Messages" className="w-8 h-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/495938e0ae0ba4fd02f5897b37c84036c1dfb2e70b34f9ac38da36355dd27d41?placeholderIfAbsent=true"
            alt="Messages"
            className="w-full h-full"
          />
        </button>
        <button aria-label="Profile" className="w-8 h-8">
          <img
            srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1741de0da35527ccef29d9421814faae1fa6833c377682c2f65997f0c9806754?placeholderIfAbsent=true&width=100 100w"
            alt="Profile"
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
    </header>
  );
};
