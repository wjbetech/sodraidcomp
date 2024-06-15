import "./App.css";
import WoWSpecs from "./components/ClassesAndSpecs";
import RaidGrid from "./components/RaidGrid";

function App() {
  return (
    <main className="">
      <h1 className="mt-8">SoD Raid Composition</h1>
      <span className="text-xs text-gray-400">by Valruna @ Living Flame EU</span>
      <WoWSpecs />
      <div className="m-auto w-full">
        <RaidGrid />
      </div>
    </main>
  );
}

export default App;
