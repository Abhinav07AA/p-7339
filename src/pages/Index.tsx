
import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EquipmentGallery } from "@/components/equipment/EquipmentGallery";
import { EquipmentDetails } from "@/components/equipment/EquipmentDetails";
import { EquipmentCalendar } from "@/components/equipment/EquipmentCalendar";
import { RentalSummary } from "@/components/equipment/RentalSummary";
import { EquipmentCard } from "@/components/equipment/EquipmentCard";

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Header />

      <main className="flex w-full flex-col items-stretch mt-4 px-4">
        <div className="text-[#0B0B0B] text-xs font-normal leading-[1.1] tracking-[0.05px]">
          My Equipment / <span className="text-[#0B0B0B]">MAH605DI-1234ZY</span>
        </div>

        <div className="mt-4">
          <div className="gap-4 flex max-md:flex-col">
            {/* Left Column */}
            <div className="w-1/2 max-md:w-full">
              <EquipmentGallery />
              <div className="mt-6">
                <RentalSummary />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-1/2 max-md:w-full">
              <div className="flex flex-col">
                <EquipmentDetails />
                <EquipmentCalendar />

                <h3 className="text-[#0B0B0B] text-base font-medium leading-[1.1] tracking-[0.04px] mt-[77px] mb-4">
                  More Available Equipment
                </h3>

                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <EquipmentCard
                      key={i}
                      image="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/6009c3a83e3a565e639bcf037aac5e6cdd563678d7579fb5f3a8e9c9526927e8?placeholderIfAbsent=true"
                      title="MAH605DI-1234ZY"
                      description="Mahindra Arjun Novo 605 DI Tractor"
                      location="Agra, Uttar Pradesh"
                      price="₹2,000/day"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
