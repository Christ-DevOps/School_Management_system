import Announcements from "@/src/components/Announcement";
import AttendanceChart from "@/src/components/AttendanceChart";
import CountChart from "@/src/components/CounChart";
import EventCalendar from "@/src/components/EventCalendar";
import FinanceChart from "@/src/components/FinanceChart";
import RecentActivity from "@/src/components/RecentActivity";
import UserCard from "@/src/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row bg-[#F7F8FA]">
      
      {/* LEFT SIDE CONTENT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        
        {/* 1. TOP CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="teachers" />
          <UserCard type="students" />
          <UserCard type="parents" />
          <UserCard type="staff" />
        </div>

        {/* 2. MIDDLE CHARTS */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* 3. BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* RIGHT SIDE CONTENT (Next Step) */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
      <RecentActivity />
    </div>
  );
};

export default AdminPage