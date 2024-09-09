import { ClassName } from "../utils/classColor";
import Party from "./Party";
import { useState } from "react";
import RaidBuffs from "./RaidBuffs";

type Spec = {
  id: string;
  iconLink: string;
  specName: string;
  wowClassName: ClassName;
  buffs: string[];
  debuffs: string[];
  abilities: string[];
};

export default function RaidGrid() {
  // empty slots either contain a Spec item or null
  const [raidGroups, setRaidGroups] = useState<(Spec | null)[][]>([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);

  // state for all the buffs, debuffs and abilities of the raid
  const [raidBuffs, setRaidBuffs] = useState<Record<string, number>>({});
  const [raidDebuffs, setRaidDebuffs] = useState<Record<string, number>>({});
  const [raidAbilities, setRaidAbilities] = useState<Record<string, number>>({});

  // counter for numbers of items in state items
  const updateCounter = (
    items: string[],
    counter: Record<string, number>,
    setCounter: React.Dispatch<React.SetStateAction<Record<string, number>>>
  ) => {
    const updatedCounter = { ...counter };
    items.forEach((item) => {
      updatedCounter[item] = (updatedCounter[item] || 0) + 1;
    });
    setCounter(updatedCounter);
  };

  const handleDrop = (groupId: number, slotIndex: number, spec: Spec) => {
    setRaidGroups((prevGroups) => {
      const newGroups = [...prevGroups];
      newGroups[groupId][slotIndex] = spec;
      return newGroups;
    });
    // log out raidGroups to check what level of data is held
    // we need to get the abilities/buffs/debuffs etc
    // console.log(raidGroups);

    // update the counters for buffs, debuffs, abilities
    updateCounter(spec.buffs, raidBuffs, setRaidBuffs);
    updateCounter(spec.debuffs, raidDebuffs, setRaidDebuffs);
    updateCounter(spec.abilities, raidAbilities, setRaidAbilities);
  };

  return (
    <div className="w-full flex flex-col place-items-center place-content-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-10">
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
      <RaidBuffs buffs={raidBuffs} debuffs={raidDebuffs} abilities={raidAbilities} />
    </div>
  );
}

// todo:
// [O] - grab the abilities/buffs/debuffs
// [] - filter those items based on the group and type of ability
// [] - display filtered items in the bottom display
