import PlayerSlot from "./PlayerSlot";

interface PartyProps {
	componentId: number;
}

export default function Party(props: PartyProps) {
	return (
		<div className="flex flex-col items-center w-full space-y-1">
			<h5 className="text-gray-500 font-semibold">Group {props.componentId}</h5>
			<PlayerSlot id={`player-slot-${props.componentId}-1`} />
			<PlayerSlot id={`player-slot-${props.componentId}-2`} />
			<PlayerSlot id={`player-slot-${props.componentId}-3`} />
			<PlayerSlot id={`player-slot-${props.componentId}-4`} />
			<PlayerSlot id={`player-slot-${props.componentId}-5`} />
		</div>
	);
}
