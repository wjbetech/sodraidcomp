import { ClassName } from "../utils/classColor";
import PlayerSlot from "./PlayerSlot";

interface Spec {
  id: string;
  iconLink: string;
  specName: string;
  wowClassName: ClassName;
}

interface PartyProps {
  componentId: number;
  group: (Spec | null)[]; // empty slots are given null
  onDrop: (slotIndex: number, spec: Spec) => void;
}

export default function Party({ componentId, group, onDrop }: PartyProps) {
  return (
    <div className="flex flex-col m-auto min-w-[300px] max-w-[400px] space-y-1">
      <h5 className="text-gray-500 font-semibold">Group {componentId}</h5>
      {group.map((assignedSpec, index) => (
        <PlayerSlot
          key={index}
          id={`player-slot-${componentId}-${index + 1}`}
          assignedSpec={assignedSpec}
          onDrop={(spec) => onDrop(index, spec)}
        />
      ))}
    </div>
  );
}
