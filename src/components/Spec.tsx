import { useDraggable } from "@dnd-kit/core";

export const SpecIcon = ({ spec }) => {
	const { attributes, setNodeRef, listeners } = useDraggable({
		id: "draggable",
	});

	return (
		<img
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			src={spec.icon}
			alt={spec.icon}
			className="flex h-[30px] w-[30px] rounded-md border-2 border-black cursor-grab"
		/>
	);
};
