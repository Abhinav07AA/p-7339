import React from "react";

interface SpecificationRowProps {
  label: string;
  value: string;
  alternate?: boolean;
}

const SpecificationRow: React.FC<SpecificationRowProps> = ({
  label,
  value,
  alternate,
}) => (
  <div
    className={`flex items-stretch gap-5 flex-wrap justify-between px-5 py-[11px] ${alternate ? "bg-[rgba(249,249,249,1)]" : "bg-white"} border-b border-[#d9d9d9]`}
  >
    <div className="text-[#666]">{label}</div>
    <div className="text-[#0B0B0B] text-right">{value}</div>
  </div>
);

export const RentalSummary = () => {
  return (
    <div className="flex flex-col text-sm font-normal tracking-[0.04px] leading-[1.1]">
      <SpecificationRow
        label="Brand & Model"
        value="Mahindra Arjun Novo 605 DI Tractor"
      />
      <SpecificationRow label="Year of Manufacture" value="2023" alternate />
      <SpecificationRow label="Engine Power (HP)" value="42 HP" />
      <SpecificationRow label="Fuel Type" value="Diesel" alternate />
      <SpecificationRow label="Lifting Capacity" value="1,500 kg" />
      <SpecificationRow label="PTO Power (HP)" value="38 HP" alternate />

      <h3 className="text-[#0B0B0B] font-medium mt-6 mb-3">
        Rental Performance Summary
      </h3>

      <SpecificationRow label="Total Views" value="2,300" />
      <SpecificationRow
        label="Rental Requests"
        value="12 inquiries received"
        alternate
      />
      <SpecificationRow
        label="Successful Rentals"
        value="5 completed rentals"
      />
      <SpecificationRow
        label="Total Earnings"
        value="₹50,000 earned so far"
        alternate
      />
      <SpecificationRow
        label="Average Rental Duration"
        value="6 days per rental"
      />
    </div>
  );
};
