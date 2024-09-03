import PlayerSlot from "./PlayerSlot";

interface Spec {
  id: string;
  iconLink: string;
  specName: string;
}

interface PartyProps {
  componentId: number;
  group: (Spec | null)[]; // Allow `null` in the group array
  onDrop: (slotIndex: number, spec: Spec) => void;
}

export default function Party({ componentId, group, onDrop }: PartyProps) {
  return (
    <div className="flex flex-col m-auto w-full space-y-1">
      <h5 className="text-gray-500 font-semibold">Group {componentId}</h5>
      {group.map((assignedSpec, index) => (
        <PlayerSlot
          key={index}
          id={`player-slot-${componentId}-${index + 1}`}
          assignedSpec={assignedSpec} // Pass assignedSpec to the slot
          onDrop={(spec) => onDrop(index, spec)}
        />
      ))}
    </div>
  );
}
