import Party from "./Party";
import { buffs } from "../utils/buffs";

export default function RaidGrid() {
	console.log(buffs);

	return (
		<div className="justify-evenly w-full grid gap-2">
			<div className="grid grid-cols-2 gap-4">
				<Party componentId={1} />
				<Party componentId={2} />
				<Party componentId={3} />
				<Party componentId={4} />
			</div>
			<div className="mb-6 my-12 p-4 w-full rounded-md flex flex-col border-2 border-gray-600 text-left">
				<span>Moonkin Aura</span>
			</div>
		</div>
	);
}
