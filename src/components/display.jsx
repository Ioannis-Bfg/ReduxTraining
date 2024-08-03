import { useSelector } from "react-redux";

export default function Display() {
  const displayValue = useSelector((state) => state.calculations.displayValue);
  return (
    <div className="bg-[#f3e7d0] rounded-lg flex-1 text-zinc-700 font-bold text-6xl flex justify-end items-center px-4 py-4 overflow-x-auto">
      {displayValue}
    </div>
  );
}
