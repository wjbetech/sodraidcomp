import { useDroppable } from "@dnd-kit/core";
import { useEffect } from "react";

interface Spec {
  id: string;
  iconLink: string;
  specName: string;
}

interface PlayerSlotProps {
  id: string;
  assignedSpec: Spec | null;
  onDrop: (spec: Spec) => void;
}

const PlayerSlot = ({ id, assignedSpec, onDrop }: PlayerSlotProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  useEffect(() => {
    if (isOver && !assignedSpec) {
      // If the slot is empty and being hovered over, call onDrop
      const spec = { id: "spec-id", iconLink: "spec-icon", specName: "spec-name" }; // replace this with actual spec data
      onDrop(spec);
    }
  }, [isOver, assignedSpec, onDrop]);

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center justify-center my-2 border-2 rounded-md h-[34px] w-full ${
        isOver ? "bg-gray-200" : "border-gray-500"
      } hover:bg-white/10`}
    >
      {assignedSpec ? (
        <>
          <img className="w-[30px] h-[30px] rounded-md" src={assignedSpec.iconLink} alt={assignedSpec.specName} />
          <span className="ml-2 text-gray-800">{assignedSpec.specName}</span>
        </>
      ) : (
        "Empty Slot"
      )}
    </div>
  );
};

export default PlayerSlot;
