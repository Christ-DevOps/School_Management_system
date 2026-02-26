"use client";

import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/src/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventCalendar from '@/src/components/EventCalendar';
import Announcements from '@/src/components/Announcement';
import TimetableCalendar from '@/src/components/TimeTable';

// 1. Setup Calendar Localizer
const localizer = momentLocalizer(moment);


//Welcome
const WelcomeCard = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Welcome back, Alex! 👋</h1>
      <p className="text-gray-500 mt-1">Ready to conquer your classes today?</p>
    </div>
    <div className="flex gap-3 bg-Scholarpurplelight p-2 rounded-lg border border-ScholarPurple">
      <button className="text-xl hover:scale-110 transition-transform" title="Feeling Great">😊</button>
      <button className="text-xl hover:scale-110 transition-transform" title="Feeling Okay">😐</button>
      <button className="text-xl hover:scale-110 transition-transform" title="Need Help">😔</button>
    </div>
  </div>
);

// Schedule calendar
const ScheduleCalendar = () => {

  const minTime = new Date();
  minTime.setHours(7, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(17, 30, 0);  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col min-h-[500px]">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Weekly Schedule (<span>SE3B</span> )</h2>
      <div className="flex-1 h-full">
        {/* We use a custom wrapper to override default calendar styles to match your theme */}
        <div className="h-full min-h-[400px] [&_.rbc-event]:bg-ScholarSky [&_.rbc-event]:text-gray-800 [&_.rbc-today]:bg-ScholarSkylight">
          <Calendar
            min={minTime}
            max={maxTime}
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.WORK_WEEK}
            views={['work_week', 'day', 'agenda']}
            step={60}
            showMultiDayTimes
            style={{ height: 500 }}
          />
        </div>
      </div>
    </div>
  );
};

// AI component
const AIChatTeaser = () => (
  <div className="bg-violet-600 rounded-xl p-6 shadow-sm text-white border border-violet-700">
    <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">✨ AI Study Bot</h2>
    <p className="text-sm text-violet-100 mb-5">Stuck on your assignments? Ask your context-aware assistant.</p>
    <button className="w-full bg-white text-violet-700 py-2.5 rounded-lg font-semibold hover:bg-violet-50 transition-colors shadow-sm">
      Chat Now
    </button>
  </div>
);

// --- COMPONENT: Upcoming Classes List ---
const UpcomingClasses = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Next Up</h2>
      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">Today</span>
    </div>
    <div className="space-y-3">
      {calendarEvents.map((event) => (
        <div key={event.title} className={`p-4 rounded-lg border border-gray-50 flex justify-between items-center hover:shadow-sm transition-shadow cursor-pointer ${event.color} bg-opacity-30`}>
          <div>
            <h4 className="font-medium text-gray-800">{event.title}</h4>
            <p className="text-xs text-gray-600 mt-1">{moment(event.start).format('h:mm A')} - Room 302</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- MAIN PAGE LAYOUT ---
const StudentDashboard = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-6 w-full min-h-screen bg-gray-50 font-sans">
      
      {/* LEFT SIDE: Welcome & Calendar (2/3 width) */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        <WelcomeCard />
        <TimetableCalendar />
      </div>

      {/* RIGHT SIDE: Widgets & Next Classes (1/3 width) */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <AIChatTeaser />
        <EventCalendar />
        <Announcements />
      </div>

    </div>
  );
};

export default StudentDashboard;