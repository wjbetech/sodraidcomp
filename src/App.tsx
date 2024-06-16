import "./App.css";
import WoWSpecs from "./components/ClassesAndSpecs";
import RaidGrid from "./components/RaidGrid";

// DnDKit
import { DndContext } from "@dnd-kit/core";

function App() {
	return (
		<DndContext>
			<main className="">
				<h1 className="">SoD Raid Composition</h1>
				<span className="text-xs text-gray-400">
					by Valruna @ Living Flame EU
				</span>
				<WoWSpecs />
				<div className="m-auto w-full">
					<RaidGrid />
				</div>
			</main>
		</DndContext>
	);
}

export default App;
