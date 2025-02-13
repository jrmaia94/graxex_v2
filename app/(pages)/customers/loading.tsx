import { LoaderCircleIcon } from "lucide-react";

const Vehicles = () => {
  return (
    <div className="relative flex h-full w-full">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 text-xl font-bold text-muted-foreground">
        <LoaderCircleIcon
          className="animate-spin text-muted-foreground"
          size={50}
        />
        Loading
      </div>
    </div>
  );
};

export default Vehicles;
