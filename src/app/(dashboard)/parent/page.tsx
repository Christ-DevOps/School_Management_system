"use client";

import React, { useState } from 'react';
// Mock imports for the components you already have
import TimetableCalendar from '@/src/components/TimeTable';
import EventCalendar from '@/src/components/EventCalendar';
import Announcements from '@/src/components/Announcement';

// --- 1. MOCK DATA: Handling Multiple Children ---
const parentData = {
  name: "Mr. / Mme. Sabine",
  children: [
    {
      id: "c1",
      firstName: "Alexandre",
      grade: "SE3B",
      attendance: 95,
      fees: { total: 1000, paid: 1000 }, // Fully paid (Green)
      avatarColor: "bg-ScholarSky text-blue-800"
    },
    {
      id: "c2",
      firstName: "Chloe",
      grade: "CM2",
      attendance: 82,
      fees: { total: 800, paid: 400 }, // Partially paid (Orange)
      avatarColor: "bg-ScholarYellow text-yellow-800"
    },
    {
      id: "c3",
      firstName: "Leo",
      grade: "CE1",
      attendance: 98,
      fees: { total: 800, paid: 0 }, // Nothing paid (Red)
      avatarColor: "bg-Scholarpurplelight text-violet-800"
    }
  ]
};

// --- 2. COMPONENT: Custom SVG Circular Progress Chart ---
const CircularProgress = ({ percentage, colorClass, label, subLabel }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius; // ~226.19
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center w-24 h-24">
        {/* Background Track */}
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r={radius} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100" />
          {/* Progress Indicator */}
          <circle
            cx="48" cy="48" r={radius}
            stroke="currentColor" strokeWidth="8" fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`transition-all duration-1000 ease-out ${colorClass}`}
            strokeLinecap="round"
          />
        </svg>
        {/* Center Text */}
        <div className="absolute flex flex-col items-center">
          <span className="text-lg font-bold text-gray-800">{percentage}%</span>
        </div>
      </div>
      <h4 className="mt-3 text-sm font-semibold text-gray-700">{label}</h4>
      <p className="text-xs text-gray-500 text-center">{subLabel}</p>
    </div>
  );
};

// --- 3. COMPONENT: The Context Switcher (Child Tabs) ---
const ChildSelector = ({ children, selectedId, onSelect }) => (
  <div className="flex gap-4 overflow-x-auto pb-2 mb-2 scrollbar-hide">
    {children.map((child) => {
      const isSelected = child.id === selectedId;
      return (
        <button
          key={child.id}
          onClick={() => onSelect(child.id)}
          className={`flex items-center gap-3 p-3 pr-6 rounded-xl border transition-all ${
            isSelected 
              ? 'bg-white border-ScholarPurple shadow-md scale-100' 
              : 'bg-gray-50 border-transparent hover:bg-gray-100 opacity-70 hover:opacity-100 scale-95'
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${child.avatarColor}`}>
            {child.firstName.charAt(0)}
          </div>
          <div className="text-left">
            <h3 className={`font-semibold ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>{child.firstName}</h3>
            <p className="text-xs text-gray-500">Class: {child.grade}</p>
          </div>
        </button>
      );
    })}
  </div>
);

// --- MAIN DASHBOARD LAYOUT ---
const ParentDashboard = () => {
  // Global State: Which child are we currently viewing? Defaults to the first child.
  const [selectedChildId, setSelectedChildId] = useState(parentData.children[0].id);
  
  // Get the full object of the currently selected child
  const activeChild = parentData.children.find(c => c.id === selectedChildId);

  // Fee Logic Helper
  const feePercentage = Math.round((activeChild.fees.paid / activeChild.fees.total) * 100);
  let feeColorClass = "text-emerald-500"; // Default Green
  let feeStatusText = "All tranches paid";
  
  if (feePercentage === 0) {
    feeColorClass = "text-red-500";
    feeStatusText = "No payments made";
  } else if (feePercentage > 0 && feePercentage < 100) {
    feeColorClass = "text-orange-500";
    feeStatusText = "Partially paid";
  }

  return (
    <div className="p-4 flex flex-col xl:flex-row gap-6 w-full min-h-screen bg-gray-50 font-sans">
      
      {/* LEFT SIDE (2/3 width) */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        
        {/* 1. Welcome & Global Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Welcome, {parentData.name} 👋</h1>
            <p className="text-gray-500 mt-1">Select a child below to view their specific progress.</p>
          </div>
          <button className="hidden sm:block bg-Scholarpurplelight text-violet-700 px-4 py-2 rounded-lg font-medium border border-ScholarPurple hover:bg-violet-100 transition-colors">
            Contact Admin
          </button>
        </div>

        {/* 2. The Context Switcher */}
        <ChildSelector 
          children={parentData.children} 
          selectedId={selectedChildId} 
          onSelect={setSelectedChildId} 
        />

        {/* 3. Notification Banner (Conditional Rendering based on fees) */}
        {feePercentage < 100 && (
          <div className={`p-4 rounded-xl border flex items-start gap-4 ${
            feePercentage === 0 ? 'bg-red-50 border-red-200' : 'bg-orange-50 border-orange-200'
          }`}>
            <span className="text-2xl">{feePercentage === 0 ? '🚨' : '⚠️'}</span>
            <div>
              <h4 className={`font-semibold ${feePercentage === 0 ? 'text-red-800' : 'text-orange-800'}`}>
                Action Required: School Fees Pending
              </h4>
              <p className={`text-sm mt-1 ${feePercentage === 0 ? 'text-red-600' : 'text-orange-700'}`}>
                {activeChild.firstName} currently has pending tuition fees. Please complete the next tranche to avoid disruption in portal access.
              </p>
              <button className={`mt-3 px-4 py-1.5 rounded bg-white shadow-sm text-sm font-medium border ${feePercentage === 0 ? 'text-red-700 border-red-200 hover:bg-red-50' : 'text-orange-700 border-orange-200 hover:bg-orange-100'}`}>
                View Invoice & Pay
              </button>
            </div>
          </div>
        )}

        {/* 4. Active Child Stats (The Charts) */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-around items-center gap-8">
          <CircularProgress 
            percentage={activeChild.attendance} 
            colorClass="text-blue-500" 
            label="Attendance Rate" 
            subLabel="Present vs. Total Days"
          />
          
          <div className="hidden sm:block w-px h-24 bg-gray-100"></div> {/* Divider */}

          <CircularProgress 
            percentage={feePercentage} 
            colorClass={feeColorClass} 
            label="Financial Status" 
            subLabel={feeStatusText}
          />
        </div>

        {/* 5. Timetable (Receives active child ID in future backend implementation to fetch right schedule) */}
        <div className="flex-1">
           {/* Passing a key forces React to re-mount the calendar if the child changes, ensuring fresh rendering */}
          <TimetableCalendar key={selectedChildId} childId={selectedChildId} />
        </div>

      </div>

      {/* RIGHT SIDE: Global Widgets (1/3 width) */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <div className="bg-violet-600 rounded-xl p-6 shadow-sm text-white border border-violet-700">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">✨ AI Insights</h2>
          <p className="text-sm text-violet-100 mb-5">Get an instant, context-aware summary of {activeChild.firstName}'s performance this week.</p>
          <button className="w-full bg-white text-violet-700 py-2.5 rounded-lg font-semibold hover:bg-violet-50 transition-colors shadow-sm">
            Generate Report
          </button>
        </div>
        
        <EventCalendar />
        <Announcements />
      </div>

    </div>
  );
};

export default ParentDashboard;