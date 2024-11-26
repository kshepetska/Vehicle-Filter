"use client";
import React, { useState, useEffect } from "react";
import { fetchVehicleMakes } from "./service";
import Dropdown from "./components/Dropdown";
import NextButton from "./components/NextButton";
import { MainLayout } from "./components/MainLayout";
import Loader from "./components/Loader";
import { VehicleMake, DropdownOption } from "./types";

const HomePage: React.FC = () => {
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [vehicleMakes, setVehicleMakes] = useState<VehicleMake[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const yearOptions: DropdownOption[] = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => ({
      value: (2015 + i).toString(),
      label: (2015 + i).toString(),
    })
  );

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const makes = await fetchVehicleMakes();
        setVehicleMakes(makes);
      } catch (error) {
        console.error("Error fetching vehicle makes:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMakes();
  }, []);

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-8 text-white">Filter Vehicles</h1>
      <div className="flex flex-row w-full gap-6 justify-center items-center">
        {isLoading ? (
          <Loader />
        ) : (
          <Dropdown
            label="Select Vehicle Make"
            options={vehicleMakes.map((make) => ({
              value: make.MakeId,
              label: make.MakeName,
            }))}
            selected={selectedMake}
            setSelected={setSelectedMake}
          />
        )}
        <Dropdown
          label="Select Model Year"
          options={yearOptions}
          selected={selectedYear}
          setSelected={setSelectedYear}
        />
      </div>
      <NextButton
        href={
          selectedMake && selectedYear
            ? `/result/${selectedMake}/${selectedYear}`
            : ""
        }
        disabled={!selectedMake || !selectedYear}
      />
    </MainLayout>
  );
};

export default HomePage;
