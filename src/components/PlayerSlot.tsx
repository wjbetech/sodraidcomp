import { useDroppable } from "@dnd-kit/core";

export default function PlayerSlot() {
	const { isOver, setNodeRef } = useDroppable({
		id: "droppable",
	});
	const style = {
		backgroundColor: isOver ? "white" : undefined,
		opacity: isOver ? "10%" : undefined,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			className="flex items-center justify-center my-2 border-2 border-gray-500 rounded-md h-[34px] w-[180px] p-2 hover:bg-white/10"
		/>
	);
}
