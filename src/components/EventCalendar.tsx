"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import { More } from "@/public";

// Logic: Date | null for single date selection
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
      {/* CALENDAR CONTAINER */}
      <div className="p-2">
        <Calendar 
          onChange={onChange} 
          value={value} 
          locale="en-US"
          // These props help clean up the UI
          next2Label={null}
          prev2Label={null}
          
        />
      </div>

      {/* EVENT HEADER */}
      <div className="flex items-center justify-between mt-8 mb-4">
        <h1 className="text-lg font-bold text-gray-700">Events</h1>
        <Image src={More} alt="options" width={20} height={20} className="cursor-pointer opacity-50" />
      </div>

      {/* EVENT ITEMS */}
      <div className="flex flex-col gap-4">
        {/* Mock events - these will eventually be mapped from your API */}
        {[1, 2, 3].map((item) => (
          <div 
            key={item} 
            className="p-4 rounded-xl border border-gray-100 border-t-4 odd:border-t-purple-400 even:border-t-yellow-400 bg-slate-50/50"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-600 text-sm">Exam: Physics 101</h2>
              <span className="text-[10px] text-gray-400">12:00 PM - 2:00 PM</span>
            </div>
            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
              Final practical examination for senior students in Lab A.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;