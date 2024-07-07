import { useState } from "react";
import "./App.css";
import WoWClasses from "./components/ClassesAndSpecs";
import NavBar from "./components/NavBar";
import RaidGrid from "./components/RaidGrid";

// DnDKit
import { DndContext } from "@dnd-kit/core";

function App() {
	const [isDropped, setIsDropped] = useState(false);

	function handleDragEnd(event) {
		if (event.over && event.over.id === "droppable") {
			setIsDropped(true);
		}
	}

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<NavBar />
			<main className="w-[80%] m-auto">
				<h1 className="">SoD Raid Composition</h1>
				<span className="text-xs text-gray-400">
					by Valruna @ Living Flame EU
				</span>
				<WoWClasses />
				<div className="m-auto w-full">
					<RaidGrid>{isDropped ? draggableMarkup : "Drop here"}</RaidGrid>
				</div>
			</main>
		</DndContext>
	);
}

export default App;
