import Party from "./Party";
import { useState } from "react";

type Spec = {
  id: string;
  iconLink: string;
  specName: string;
};

export default function RaidGrid() {
  // Allow `Spec` or `null` in the raidGroups array
  const [raidGroups, setRaidGroups] = useState<(Spec | null)[][]>([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);

  const handleDrop = (groupId: number, slotIndex: number, spec: Spec) => {
    setRaidGroups((prevGroups) => {
      const newGroups = [...prevGroups];
      newGroups[groupId][slotIndex] = spec;
      return newGroups;
    });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4">
        {raidGroups.map((group, index) => (
          <Party
            key={index}
            componentId={index + 1}
            group={group}
            onDrop={(slotIndex, spec) => handleDrop(index, slotIndex, spec)}
          />
        ))}
      </div>
      <div className="mb-6 my-12 p-4 w-full rounded-md flex flex-col border-2 border-gray-600 text-left">
        <span>Moonkin Aura</span>
      </div>
    </div>
  );
}
