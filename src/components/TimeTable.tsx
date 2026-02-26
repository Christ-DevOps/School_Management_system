"use client";

import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { calendarEvents } from '../lib/data';

// 1. Initialize the date localizer
const localizer = momentLocalizer(moment);


const TimetableCalendar = () => {
  // 3. THE FIX: Force the calendar to open to the exact week of our mock data
  const targetDate = new Date(2024, 7, 12); // August 12, 2024

  // 4. Set calendar boundaries (7:00 AM to 5:30 PM) so we don't show midnight hours
  const minTime = new Date();
  minTime.setHours(7, 0, 0);

  const maxTime = new Date();
  maxTime.setHours(17, 30, 0);

  // 5. Inject your custom Scholar theme colors directly into the event blocks
  const eventStyleGetter = (event) => {
    return {
      style: {
        backgroundColor: 'var(--color-violet-600)', // ScholarSky
        color: '#D5E0F0', // Dark gray text for readability
        border: '1px solid #CFCEFF', // ScholarPurple border
        borderRadius: '6px',
        fontWeight: '600',
        fontSize: '13px',
        padding: '2px 6px',
      },
    };
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col w-full h-[650px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">My Weekly Timetable</h2>
        <span className="bg-Scholarpurplelight text-gray-700 px-3 py-1 rounded-md text-sm font-medium border border-ScholarPurple">
          4 Periods / Day
        </span>
      </div>
      
      {/* Calendar Wrapper */}
      <div className="flex-1 w-full h-full">
        <Calendar
          localizer={localizer}
          events={calendarEvents   }
          startAccessor="start"
          endAccessor="end"
          defaultView={Views.WORK_WEEK}
          views={['work_week', 'day']} // Only show Week and Day views
          defaultDate={targetDate}     // <-- THIS DISPLAYS THE EVENTS
          min={minTime}                // Starts day at 7:00 AM
          max={maxTime}                // Ends day at 5:30 PM
          step={15}                    // Time block granularity
          timeslots={4}                // Divides the grid nicely for 15-min intervals
          eventPropGetter={eventStyleGetter} // Applies the colors
          formats={{
            dayFormat: 'dddd', // Shows 'Monday' instead of 'Mon 12'
            timeGutterFormat: 'h:mm A', // 7:30 AM
          }}
        />
      </div>

      {/* Tailwind global overrides for calendar internals to match your aesthetic */}
      <style jsx global>{`
        .rbc-time-view {
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }
        .rbc-today {
          background-color: #EDF9FD !important; /* ScholarSkylight */
        }
        .rbc-header {
          padding: 8px;
          font-weight: 600;
          color: #4b5563;
        }
        .rbc-time-slot {
          min-height: 20px; /* Adjusts grid row height */
        }
      `}</style>
    </div>
  );
};

export default TimetableCalendar;