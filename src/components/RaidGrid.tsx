import Party from "./Party";
import { useState } from "react";

type RaidGroup = string[];
type SlotIndex = number;
type SpecId = string;

export default function RaidGrid() {
  // dnd-kit seems to require "slots" to drop items into
  // we have to create mutable "slots" for the raid slots
  // regardless, so building an array here to represent the raid
  // is probably the next logical step
  const [raidGroups, setRaidGroups] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ]);

  // handling drop for each slot in raidGroups
  const handleDrop = (groupId: number, slotIndex: number, specId: string) => {
    setRaidGroups((prevGroups) => {
      const newGroups = [...prevGroups];
      newGroups[groupId][slotIndex] = specId;
      return newGroups;
    });
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-4">
        {raidGroups.map((group: RaidGroup, index) => (
          <Party
            key={Math.floor(index * (Math.random() * 1000))}
            componentId={index + 1}
            group={group}
            onDrop={(slotIndex: SlotIndex, specId: SpecId) => handleDrop(index, slotIndex, specId)}
          />
        ))}
      </div>
      <div className="mb-6 my-12 p-4 w-full rounded-md flex flex-col border-2 border-gray-600 text-left">
        <span>Moonkin Aura</span>
      </div>
    </div>
  );
}
