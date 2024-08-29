import { useDroppable } from "@dnd-kit/core";
import { useEffect } from "react";

interface PlayerSlotProps {
  id: string;
  player: string;
  onDrop: (specId: string) => void;
}

const PlayerSlot = ({ id, player, onDrop }: PlayerSlotProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  useEffect(() => {
    if (isOver && player === "") {
      const specId = id;
      onDrop(specId);
    }
  }, [isOver, player, onDrop, id]);

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center justify-center my-2 border-2 rounded-md h-[34px] w-full ${
        isOver ? "bg-gray-200" : "border-gray-500"
      } hover:bg-white/10`}
    >
      {player ? <img src={player} alt="Player" className="w-[30px] h-[30px] rounded-md" /> : "Empty Slot"}
    </div>
  );
};

export default PlayerSlot;
