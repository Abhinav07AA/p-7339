import React from "react";

interface EquipmentCardProps {
  image: string;
  title: string;
  description: string;
  location: string;
  price: string;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  image,
  title,
  description,
  location,
  price,
}) => {
  return (
    <div className="border bg-white flex items-stretch gap-3 pr-[26px] rounded-xl border-solid border-[#D9D9D9]">
      <img
        loading="lazy"
        src={image}
        className="aspect-[0.91] object-contain w-[113px] shrink-0 rounded-[12px_0px_0px_12px]"
        alt={title}
      />
      <div className="flex flex-col my-auto">
        <div>
          <h3 className="text-[#0B0B0B] text-base tracking-[0.08px]">
            {title}
          </h3>
          <p className="text-[#666] text-xs tracking-[0.05px] mt-1">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-[#0B0B0B] tracking-[0.15px] mt-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/4c4cbeaf8c5438244d48c524da0c2dcaa786d3856d08c03953e6dc4c09afad5b?placeholderIfAbsent=true"
            className="w-4"
            alt="Location"
          />
          <span>{location}</span>
        </div>
        <div className="text-[#0B0B0B] text-[19px] font-medium tracking-[0.03px] mt-4">
          {price}
        </div>
      </div>
    </div>
  );
};
