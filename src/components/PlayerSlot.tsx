import { useDroppable, useDndMonitor } from "@dnd-kit/core";
import { useState } from "react";

interface Spec {
  id: string;
  iconLink: string;
  specName: string;
}

interface PlayerSlotProps {
  id: string;
  assignedSpec: Spec | null; // Allow `null` for unassigned slots
  onDrop: (spec: Spec) => void;
}

const PlayerSlot = ({ id, assignedSpec, onDrop }: PlayerSlotProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  const [currentSpec, setCurrentSpec] = useState<Spec | null>(assignedSpec);

  useDndMonitor({
    onDragEnd(event) {
      const { active, over } = event;

      if (over && over.id === id) {
        const draggedSpec = active.data.current as Spec;

        if (draggedSpec && draggedSpec.iconLink && draggedSpec.specName) {
          setCurrentSpec(draggedSpec);
          onDrop(draggedSpec);
        }
      }
    }
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center justify-center my-2 border-2 rounded-md h-[34px] w-full ${
        isOver ? "bg-gray-200" : "border-gray-500"
      } hover:bg-white/10`}
    >
      {currentSpec ? (
        <div className="flex gap-2 justify-center items-center">
          <img className="w-[30px] h-[30px] rounded-md" src={currentSpec.iconLink} alt={currentSpec.specName} />
          <span className="ml-2 text-white">{currentSpec.specName}</span>
        </div>
      ) : (
        "Empty Slot"
      )}
    </div>
  );
};

export default PlayerSlot;
