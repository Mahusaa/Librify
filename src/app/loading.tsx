import { Loader } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-64">
      <Loader className="w-10 h-10 text-black animate-spin" />
    </div>
  );
}

