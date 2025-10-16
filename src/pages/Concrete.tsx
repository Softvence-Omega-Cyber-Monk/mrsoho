import Banner from "@/components/Banner";
import React, { useMemo, useState } from "react";
import BannerImg from "../assets/images/concrete-banner.jpg";
import ShapeSelector from "@/components/ShapeSelector";
import { CONCRETE_MIXES, ConcreteMix, Dimensions, Shape, Unit } from "@/typs";
import DimensionInput from "@/components/DimensionInput";
import ConcreteMixSelector from "@/components/ConcreteMixSelector";
import ResultsPanel from "@/components/ResultsPanel";

const Concrete: React.FC = () => {
  const [selectedShape, setSelectedShape] = useState<Shape>("Slabs & Walls");

  const [unit, setUnit] = useState<Unit>("Meters");
  const [dimensions, setDimensions] = useState<Dimensions>({
    length: 0,
    width: 0,
    thickness: 0,
    quantity: 1,
  });
  const handleDimensionChange = (key: keyof Dimensions, value: string) => {
    // We only need to store the value for the UI, not calculate anything yet
    const numValue = parseFloat(value) || 0;
    setDimensions((prev) => ({
      ...prev,
      [key]: numValue < 0 ? 0 : numValue,
    }));
  };

  // Initialize with the first mix selected, but allow null for optional status

  const [selectedMix, setSelectedMix] = useState<ConcreteMix | null>(
    CONCRETE_MIXES[0]
  );

  // restult panel
  // This is where you will add your full math later!
  const [addCostPerYard, setAddCostPerYard] = useState(5.0);
  const { totalVolumeYards, estimatedCost } = useMemo(() => {
    // **Returning Zeros for UI implementation phase**
    return {
      totalVolumeYards: 0,
      estimatedCost: 0,
    };
  }, [addCostPerYard]); // Dependencies ready for logic implementation
  const handleClearAll = () => {
    // In the real app, this resets all state (dimensions, shape, mix, etc.)
    setAddCostPerYard(0);
    alert("Alert: All state has been reset in the parent component!");
  };
  return (
    <div className="space-y-8 mb-16">
      {/* <h1>Concrete Page</h1>
      <p>Content for Concrete will go here.</p> */}
      <Banner
        imageUrl={BannerImg}
        title="concrete title"
        subtitle="A powerful tool to help you get an accurate estimate of the volume and cost of concrete needed for your next project."
      />

      <div className="flex justify-between gap-8 flex-col md:flex-row items-start md:items-stretch  md:px-10 px-1">
        <div className="flex-1">
          <div className="flex flex-col space-y-7">
            <div>
              <h2 className="text-xl text-[#6C7787] mb-4">1. Select Shape</h2>
              <ShapeSelector
                selectedShape={selectedShape} // Pass current state down
                onSelectShape={setSelectedShape} // Pass setter function down
              />
            </div>
            {/* Dimensions Input (Left Column) */}
            <div className="">
              <h2 className="text-xl text-[#6C7787]">2. Enter Dimensions</h2>
              <DimensionInput
                unit={unit}
                setUnit={setUnit}
                dimensions={dimensions}
                onDimensionChange={handleDimensionChange}
              />
            </div>

            <div>
              {/* 4. Select a Concrete Mix */}
              <section className="my-8">
                <h2 className="text-xl text-[#6C7787] mb-4">
                  3. Select a Concrete Mix (Optional)
                </h2>
                <ConcreteMixSelector
                  mixes={CONCRETE_MIXES}
                  selectedMix={selectedMix}
                  onSelectMix={setSelectedMix} // This handler now supports setting to null for deselection
                />
              </section>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="">
            <ResultsPanel
              totalVolumeYards={totalVolumeYards}
              estimatedCost={estimatedCost}
              addCostPerYard={addCostPerYard}
              setAddCostPerYard={setAddCostPerYard}
              onClearAll={handleClearAll} // Passing the reset function
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concrete;
