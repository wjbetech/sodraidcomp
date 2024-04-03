import './App.css'
import ClassesAndSpecs from "./components/ClassesAndSpecs"
import RaidGrid from "./components/RaidGrid"

function App() {


  return (
      <main>
        <h1>SoD Raid Composition</h1>
        <span>by Valruna @ Living Flame EU</span>
        <ClassesAndSpecs />
        <div className="w-[75%] m-auto">
          <RaidGrid />
        </div>
      </main>
  )
}

export default App;
