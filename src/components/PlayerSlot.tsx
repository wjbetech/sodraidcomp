import { useDroppable } from "@dnd-kit/core";
import { useEffect, useState } from "react";

interface Spec {
  id: string;
  iconLink: string;
  specName: string;
}

interface PlayerSlotProps {
  id: string;
  onDrop: (spec: Spec) => void;
}

const DraggableItem = ({ spec }: { spec: Spec }) => {
  return <img className="w-[30px] h-[30px] rounded-md cursor-pointer" src={spec.iconLink} alt={spec.specName} />;
};

const PlayerSlot = ({ id, onDrop }: PlayerSlotProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });
  const [assignedSpec, setAssignedSpec] = useState<Spec | null>(null);

  useEffect(() => {
    if (isOver && !assignedSpec) {
      const droppableSpec: Spec = JSON.parse(id);
      setAssignedSpec(droppableSpec);
      onDrop(droppableSpec);
    }
  }, [isOver, assignedSpec, onDrop, id]);

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center justify-center my-2 border-2 rounded-md h-[34px] w-full ${
        isOver ? "bg-gray-200" : "border-gray-500"
      } hover:bg-white/10`}
    >
      {assignedSpec ? (
        <>
          <DraggableItem spec={assignedSpec} />
          <span className="ml-2 text-gray-800">{assignedSpec.specName}</span>
        </>
      ) : (
        "Empty Slot"
      )}
    </div>
  );
};

export default PlayerSlot;
