import { useDroppable } from "@dnd-kit/core";

interface PlayerSlotProps {
  id: string;
}

const PlayerSlot = ({ id }: PlayerSlotProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  if (isOver) {
    console.log(`Over ${id}`);
  }

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center justify-center my-2 border-2 rounded-md h-[34px] w-full ${
        isOver ? "bg-gray-200" : "border-gray-500"
      } hover:bg-white/10`}
    >
      {" "}
    </div>
  );
};

export default PlayerSlot;
