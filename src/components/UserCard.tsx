import Image from "next/image";
import { Logo, More} from "@/public"; // Ensure you have a 'more' or 'ellipsis' icon

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-400 even:bg-yellow-400 p-4 flex-1 min-w-[130px] shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600 font-semibold">
          2025/26
        </span>
        <Image src={More} alt="more" width={20} height={20} className="cursor-pointer" />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-white">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-100">{type}</h2>
    </div>
  );
};

export default UserCard;