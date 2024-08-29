import PlayerSlot from "./PlayerSlot";

interface PartyProps {
  componentId: number;
  group: string[];
  onDrop: (slotIndex: number, specId: string) => void;
}

export default function Party({ componentId, group, onDrop }: PartyProps) {
  return (
    <div className="flex flex-col m-auto w-full space-y-1">
      <h5 className="text-gray-500 font-semibold">Group {componentId}</h5>
      {group.map((player, index) => (
        <PlayerSlot
          key={Math.floor(index * (Math.random() * 1000))}
          id={`player-slot-${componentId}-${index + 1}`}
          player={player}
          onDrop={(specId) => onDrop(index, specId)}
        />
      ))}
      {/* <PlayerSlot id={`player-slot-${props.componentId}-1`} />
      <PlayerSlot id={`player-slot-${props.componentId}-2`} />
      <PlayerSlot id={`player-slot-${props.componentId}-3`} />
      <PlayerSlot id={`player-slot-${props.componentId}-4`} />
      <PlayerSlot id={`player-slot-${props.componentId}-5`} /> */}
    </div>
  );
}
