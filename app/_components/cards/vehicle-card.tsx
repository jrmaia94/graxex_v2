import { VehicleCardType } from "@/types/vehicle-types";

const VehicleCard = ({ vehicle }: { vehicle: VehicleCardType }) => {
  return (
    <div className="w-full max-w-[200px] p-1">
      <p className="truncate text-primary">
        {vehicle.model + " - " + vehicle.make}
      </p>
      <p className="truncate text-muted-foreground">{vehicle.color}</p>
      <p className="truncate text-primary">{vehicle.Customer.name}</p>
    </div>
  );
};

export default VehicleCard;
