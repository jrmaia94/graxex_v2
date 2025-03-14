import { LoaderCircleIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="absolute flex h-full w-full items-center justify-center bg-white/80">
      <LoaderCircleIcon className="animate-spin" size={40} />
    </div>
  );
};

export default Loader;
