"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { MaleFemale, More } from '@/public';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#FAE27C', 
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#C3EBFA', 
  },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-sm border border-slate-100">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={More} alt="more" width={20} height={20} className="cursor-pointer" />
      </div>

      {/* CHART - Centered with background image/icon placeholder */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart 
            cx="50%" 
            cy="50%" 
            innerRadius="40%" 
            outerRadius="100%" 
            barSize={32} 
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Gender Icon in the middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Image src={MaleFemale} alt='Male and female' height={50} width={80} />
        </div>
      </div>

      {/* BOTTOM - Legend */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#C3EBFA] rounded-full" />
          <h1 className="font-bold text-sm">Boys</h1>
          <h2 className="text-xs text-gray-400">55% (678)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-[#FAE27C] rounded-full" />
          <h1 className="font-bold text-sm">Girls</h1>
          <h2 className="text-xs text-gray-400">45% (556)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;