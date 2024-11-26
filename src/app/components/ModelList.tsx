import { useState, useEffect } from "react";
import Loader from "./Loader";
import { fetchVehicleModels } from "../service";

const fetchModels = async (makeId: string, year: string) => {
  const vehicleModels = await fetchVehicleModels(makeId, year);
  return vehicleModels;
};

export const ModelList = ({
  makeId,
  year,
}: {
  makeId: string;
  year: string;
}) => {
  const [models, setModels] = useState<VehicleModel[]>([]);

  useEffect(() => {
    const getModels = async () => {
      const vehicleModels = await fetchModels(makeId, year);
      setModels(vehicleModels);
    };

    getModels();
  }, [makeId, year]);

  if (models.length === 0) {
    return <Loader />;
  }

  return (
    <ul className="max-w-[60vw] flex flex-wrap gap-4">
      {models.map((model) => (
        <li
          key={model.Model_ID}
          className="p-4 bg-white bg-opacity-10 backdrop-blur-md text-white font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/30 rounded"
        >
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};
