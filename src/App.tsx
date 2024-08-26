import "./App.css";
import WoWClasses from "./components/ClassesAndSpecs";
import NavBar from "./components/NavBar";
import RaidGrid from "./components/RaidGrid";

function App() {
	return (
		<div>
			<NavBar />
			<main className="w-[80%] m-auto">
				<h1 className="">SoD Raid Composition</h1>
				<span className="text-xs text-gray-400">
					by Valruna @ Living Flame EU
				</span>
				<WoWClasses />
				<div className="m-auto w-full">
					<RaidGrid />
				</div>
			</main>
		</div>
	);
}

export default App;
