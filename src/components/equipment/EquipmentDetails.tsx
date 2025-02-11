import React from "react";

export const EquipmentDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[#0B0B0B] text-[26px] font-medium tracking-[0.13px]">
        MAH605DI-1234ZY
      </div>
      <div className="text-[#666] text-sm font-normal tracking-[0.04px] mt-1">
        Mahindra Arjun Novo 605 DI Tractor
      </div>

      <div className="flex items-center gap-[15px] text-xs text-[#0B0B0B] font-normal tracking-[0.05px] flex-wrap mt-5">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/fffffd9f2f490f286a693cf3333be08347f81d3f590c17e4818637aaefc6fd77?placeholderIfAbsent=true"
            className="w-[15px]"
            alt="Rating"
          />
          <span>4.1 reviews</span>
        </div>
        <div className="border-r h-[17px] border-[#d9d9d9]" />
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bc71945315be8f7053e44b2a52be1d351e4abef5da7c7ee5266b26496dcddff1?placeholderIfAbsent=true"
            className="w-4"
            alt="Location"
          />
          <span>Agra, Uttar Pradesh</span>
        </div>
        <div className="border-r h-[17px] border-[#d9d9d9]" />
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/de1403321e6ee4b8ed919c3d208b2a8f9d06c9c8e8be194ec925b2c7c5d0465d?placeholderIfAbsent=true"
            className="w-4"
            alt="Distance"
          />
          <span>2.1 Km Away</span>
        </div>
        <div className="border-r h-[17px] border-[#d9d9d9]" />
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/370ff3942558345b69ec40583b54554413f28bd082aff58f23eb394cf5ce1845?placeholderIfAbsent=true"
            className="w-4"
            alt="Owner"
          />
          <span>Rajesh Kumar</span>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        <span className="bg-[rgba(249,249,249,1)] border border-[#cdcdcd] px-3.5 py-2 rounded-[100px] text-xs">
          Prime Mover
        </span>
        <span className="bg-[rgba(249,249,249,1)] border border-[#cdcdcd] px-3.5 py-2 rounded-[100px] text-xs">
          Operator Included
        </span>
      </div>

      <div className="text-[#0B0B0B] text-[40px] font-normal mt-5">
        ₹2,000/acre
      </div>
    </div>
  );
};
