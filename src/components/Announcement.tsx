import React from "react";

const announcements = [
  {
    id: 1,
    title: "School Fees Deadline",
    date: "2026-04-15",
    description:
      "Please remind all parents that the second installment for school fees is due by the end of this month.",
  },
  {
    id: 2,
    title: "New Teacher Orientation",
    date: "2026-05-01",
    description:
      "Orientation for the new staff members will take place in the conference hall at 09:00 AM.",
  },
  {
    id: 3,
    title: "National Day Holiday",
    date: "2026-05-20",
    description:
      "The school will remain closed on May 20th in observance of National Day. Classes resume on the 21st.",
  },
];

const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-700">
            Announcements
          </h1>
          <p className="text-xs text-gray-400">
            School updates & notices
          </p>
        </div>

        <button className="text-sm font-medium text-purple-600 hover:text-purple-700 transition">
          View All
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="group bg-gray-50 hover:bg-gray-100 transition-all duration-200 p-4 rounded-xl border border-transparent hover:border-purple-200"
          >
            <div className="flex items-center justify-between mb-2">
              
              <h2 className="font-medium text-gray-700 group-hover:text-purple-600 transition">
                {item.title}
              </h2>

              <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-medium">
                {new Date(item.date).toLocaleDateString()}
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {announcements.length === 0 && (
        <div className="text-center py-6 text-gray-300 text-sm">
          No announcements available.
        </div>
      )}
    </div>
  );
};

export default Announcements;