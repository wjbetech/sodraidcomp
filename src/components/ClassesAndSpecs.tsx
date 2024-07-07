import { classAndSpecs } from "../utils/specDataHandler";
import colorByClass from "../utils/classColor";

// dnd-kit
import { useDraggable } from "@dnd-kit/core";

// *REMEMBER THAT CLASS IS A TAKEN WORD*

const WoWClasses = (props) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
			}
		: undefined;

	return (
		<div className="grid grid-cols-2 xl:grid-cols-3 my-6 gap-2">
			{Object.keys(classAndSpecs).map((className) => (
				<div
					key={className}
					className="flex flex-row gap-1 border-[2px] rounded-md py-[6px] px-[18px] justify-evenly max-w-[206px]"
					style={{ backgroundColor: `${colorByClass(className)}` }}
				>
					{classAndSpecs[className][0].map((spec) => (
						<img
							ref={setNodeRef}
							style={style}
							{...listeners}
							{...attributes}
							key={spec}
							className="w-[30px] h-[30px] rounded-md"
							src={spec.iconLink}
							alt={spec.specName}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default WoWClasses;
