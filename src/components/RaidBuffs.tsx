import React from "react";

interface RaidStatsProps {
  buffs: Record<string, number>;
  debuffs: Record<string, number>;
  abilities: Record<string, number>;
}

export default function RaidBuffs({ buffs, debuffs, abilities }: RaidStatsProps) {
  return (
    <div className="flex flex-col text-left">
      <h3 className="font-semibold">Raid Buffs</h3>
      <ul>
        {Object.entries(buffs).map(([buff, count]) => (
          <li key={buff}>{`${buff}: ${count}`}</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Raid Debuffs</h3>
      <ul>
        {Object.entries(debuffs).map(([debuff, count]) => (
          <li key={debuff}>{`${debuff}: ${count}`}</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Raid Abilities</h3>
      <ul>
        {Object.entries(abilities).map(([ability, count]) => (
          <li key={ability}>{`${ability}: ${count}`}</li>
        ))}
      </ul>
    </div>
  );
}
