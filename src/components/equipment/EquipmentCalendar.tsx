
import React from "react";

interface DateButtonProps {
  day: string;
  month: string;
  isActive?: boolean;
}

const DateButton: React.FC<DateButtonProps> = ({ day, month, isActive }) => (
  <button
    className={`rounded bg-white border flex flex-col items-center w-[47px] h-[47px] px-[11px] py-1.5 border-[#d9d9d9] ${
      isActive ? "text-[#0B0B0B]" : "text-[#666]"
    }`}
  >
    <span>{day}</span>
    <span className="mt-[5px]">{month}</span>
  </button>
);

export const EquipmentCalendar = () => {
  return (
    <div className="flex flex-col bg-white border border-[#d9d9d9] rounded-xl p-6 mt-8">
      <h3 className="text-[#0B0B0B] text-sm font-medium tracking-[0.04px]">
        Available Dates
      </h3>
      <div className="flex flex-wrap gap-[15px] mt-4">
        <DateButton day="28" month="Jan" />
        <DateButton day="29" month="Jan" />
        <DateButton day="30" month="Jan" />
        <DateButton day="31" month="Jan" />
        <DateButton day="01" month="Feb" />
        <DateButton day="02" month="Feb" />
        <DateButton day="03" month="Feb" isActive />
        <DateButton day="04" month="Feb" isActive />
        <DateButton day="05" month="Feb" isActive />
        <DateButton day="06" month="Feb" isActive />
        <DateButton day="07" month="Feb" isActive />
        <DateButton day="08" month="Feb" isActive />
      </div>
      <div className="flex flex-wrap gap-[15px] mt-3">
        <DateButton day="09" month="Feb" isActive />
        <DateButton day="10" month="Feb" isActive />
        <DateButton day="11" month="Feb" isActive />
        <DateButton day="12" month="Feb" isActive />
        <DateButton day="13" month="Feb" isActive />
        <DateButton day="14" month="Feb" isActive />
        <DateButton day="15" month="Feb" isActive />
        <DateButton day="16" month="Feb" isActive />
        <DateButton day="17" month="Feb" isActive />
        <DateButton day="18" month="Feb" isActive />
        <DateButton day="19" month="Feb" isActive />
        <DateButton day="20" month="Feb" isActive />
      </div>
      <div className="flex w-full items-stretch gap-4 mt-8">
        <button className="flex-grow bg-[#388E3C] text-white font-medium uppercase tracking-[0.18px] px-8 py-[21px] rounded-[100px]">
          Rent Now
        </button>
        <button className="w-[57px] h-[57px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/9e305b477f2b53ed53b372b5aa36153f9d7c77d99d4ccb2603ccc08bcdf5b5b9?placeholderIfAbsent=true"
            alt="Share"
            className="w-full h-full"
          />
        </button>
      </div>
    </div>
  );
};
