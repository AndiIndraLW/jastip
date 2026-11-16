"use client";

import React from "react";

export default function AnnouncementBar() {
  return (
    <div
      data-pencil-name="Announcement Bar"
      className="box-border w-full h-[40px] shrink-0 flex flex-row gap-0 px-4 sm:px-8 lg:px-[64px] justify-between items-center border-b border-[#D3C7BA] bg-[#EDE4DD] text-[10.5px] font-semibold tracking-[1.5px]"
    >
      <div
        data-pencil-name="Announcement Left"
        className="text-[#5F564F] whitespace-nowrap truncate"
      >
        FREE CONSOLIDATION ON 3+ ITEMS
      </div>
      <div
        data-pencil-name="Announcement Right"
        className="text-[#F2381A] whitespace-nowrap cursor-pointer hover:underline"
      >
        JAKARTA PICKUP EVERY FRIDAY →
      </div>
    </div>
  );
}

