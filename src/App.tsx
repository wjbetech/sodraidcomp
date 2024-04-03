import "./App.css";
import ClassesAndSpecs from "./components/ClassesAndSpecs";
import RaidGrid from "./components/RaidGrid";

function App() {
  return (
    <main>
      <h1>SoD Raid Composition</h1>
      <span className="text-xs text-gray-400">by Valruna @ Living Flame EU</span>
      <ClassesAndSpecs />
      <div className="m-auto w-full">
        <RaidGrid />
      </div>
    </main>
  );
}

export default App;
