"use client";
import React, { useState, useEffect, Suspense } from "react";
import { MainLayout } from "@/app/components/MainLayout";
import PrevButton from "@/app/components/PrevButton";
import Loader from "@/app/components/Loader";
import { ModelList } from "@/app/components/ModelList";

interface Params {
  makeId: string;
  year: string;
}

const ResultPage = ({ params }: { params: Promise<Params> }) => {
  const [makeId, setMakeId] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const unwrappedParams = await params;
      setMakeId(unwrappedParams.makeId);
      setYear(unwrappedParams.year);
    };

    fetchParams();
  }, [params]);

  if (!makeId || !year) {
    return <Loader />;
  }

  return (
    <MainLayout>
      <PrevButton />
      <h1 className="text-2xl font-bold mb-8 text-white">Vehicle Models</h1>
      <Suspense fallback={<Loader />}>
        <ModelList
          makeId={makeId}
          year={year}
        />
      </Suspense>
    </MainLayout>
  );
};

export default ResultPage;
