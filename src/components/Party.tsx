import PlayerSlot from "./PlayerSlot";

interface PartyProps {
  componentId: number;
}

export default function Party(props: PartyProps) {
  return (
    <div className="">
      <h5 className="text-gray-500 font-semibold">Group {props.componentId}</h5>
      <PlayerSlot />
      <PlayerSlot />
      <PlayerSlot />
      <PlayerSlot />
      <PlayerSlot />
    </div>
  )
}