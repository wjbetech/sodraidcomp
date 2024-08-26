import './App.css';
import WoWClasses from './components/ClassesAndSpecs';
import NavBar from './components/NavBar';
import RaidGrid from './components/RaidGrid';
import { DndContext, DragStartEvent } from '@dnd-kit/core';

function App() {
  const handleDragStart = (event: DragStartEvent) => {
    console.log('Dragging started!');
    console.log(event);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('Dragging ended!');
    console.log(event);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <NavBar />
      <main className="w-[80%] m-auto">
        <h1 className="">SoD Raid Composition</h1>
        <span className="text-xs text-gray-400">by Valruna @ Living Flame EU</span>
        <WoWClasses />
        <div className="m-auto w-full">
          <RaidGrid />
        </div>
      </main>
    </DndContext>
  );
}

export default App;
