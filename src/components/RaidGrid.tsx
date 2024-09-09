import { ClassName } from "../utils/classColor";
import Party from "./Party";
import { useState } from "react";
import RaidBuffs from "./RaidBuffs";

type Spec = {
  id: string;
  iconLink: string;
  specName: string;
  wowClassName: ClassName;
};

export default function RaidGrid() {
  // empty slots either contain a Spec item or null
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
    // log out raidGroups to check what level of data is held
    // we need to get the abilities/buffs/debuffs etc
    console.log(raidGroups);
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

      {/* display what abilities, buffs and debuffs we have */}
      <RaidBuffs />
    </div>
  );
}

// todo:
// [] - grab the abilities/buffs/debuffs
// [] - filter those items based on the group and type of ability
// [] - display filtered items in the bottom display
