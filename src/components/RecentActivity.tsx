import React from 'react'

const activities = [
  {
    id: 1,
    user: "Admin",
    action: "added a new teacher",
    target: "John Doe",
    time: "2 mins ago",
    iconColor: "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-300"
  },
  {
    id: 2,
    user: "System",
    action: "generated monthly",
    target: "Finance Report",
    time: "1 hour ago",
    iconColor: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300"
  },
  {
    id: 3,
    user: "You",
    action: "updated the",
    target: "Exam Schedule",
    time: "3 hours ago",
    iconColor: "bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-300"
  }
]

const RecentActivity = () => {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <h1 className="text-xl font-semibold mb-6 dark:text-white">Recent Activities</h1>
      
      <div className="flex flex-col gap-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            {/* Timeline Line & Dot */}
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full mt-1 ${activity.iconColor.split(' ')[0]}`} />
              <div className="w-[2px] h-full bg-slate-100 dark:bg-slate-700 mt-1" />
            </div>

            {/* Content */}
            <div className="flex flex-col pb-2">
              <p className="text-sm text-gray-600 dark:text-slate-300">
                <span className="font-bold text-gray-800 dark:text-white">{activity.user}</span> {activity.action}{" "}
                <span className="font-semibold text-purple-500">{activity.target}</span>
              </p>
              <span className="text-xs text-gray-400 mt-1">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity