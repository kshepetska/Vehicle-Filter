import axios from "axios";

export const fetchVehicleMakes = async (): Promise<VehicleMake[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetMakesForVehicleType/car?format=json`
    );
    return response.data.Results;
  } catch (error) {
    console.error("Error fetching vehicle makes:", error);
    throw error;
  }
};

export const fetchVehicleModels = async (
  makeId: string,
  year: string
): Promise<VehicleModel[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return response.data.Results;
  } catch (error) {
    console.error("Error fetching vehicle models:", error);
    throw error;
  }
};
