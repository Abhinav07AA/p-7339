import React from "react";

export const EquipmentGallery = () => {
  return (
    <div className="w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/7df3e282ea47c0adc285fc211185bcb8b75f593efcbb665667722ee17bf7efec?placeholderIfAbsent=true&width=100 100w"
        className="aspect-[1.65] object-contain w-full rounded-xl"
        alt="Equipment"
      />
      <div className="flex items-center gap-7 text-[19px] tracking-[0.03px] mt-8">
        <button className="text-[#0B0B0B] font-medium">Details</button>
        <button className="text-[#666] font-normal">Reviews</button>
      </div>
      <h2 className="text-[#0B0B0B] text-sm font-medium tracking-[0.04px] mt-6">
        Specifications
      </h2>
    </div>
  );
};
