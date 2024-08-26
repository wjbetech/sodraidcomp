import { DndContext, type DragEndEvent, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import colorByClass, { type ClassName } from '../utils/classColor';
import { classAndSpecsData } from '../utils/specDataHandler';

const DraggableItem = ({ id, iconLink, specName }: { id: string; iconLink: string; specName: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  });

  const style = {
    transform: CSS.Transform.toString(transform)
  };

  return (
    <img
      id={id}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="w-[30px] h-[30px] rounded-md cursor-pointer"
      src={iconLink}
      alt={specName}
    />
  );
};

const WoWClasses = () => {
  // const handleDragStart = (event: DragEvent) => {
  // 	console.log("Dragging started!");
  // 	console.log(event);
  // };

  // const handleDragEnd = (event: DragEndEvent) => {
  // 	console.log("Dragging ended!");
  // 	console.log(event);
  // };

  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 my-6 gap-2">
      {Object.keys(classAndSpecsData).map((className) => (
        <div
          key={className}
          className="flex flex-row gap-1 border-[2px] rounded-md py-[6px] px-[18px] justify-evenly max-w-[206px]"
          style={{
            backgroundColor: `${colorByClass(className as ClassName)}`
          }}
        >
          {classAndSpecsData[className].map((spec) => (
            <DraggableItem key={spec.specName} id={spec.iconLink} iconLink={spec.iconLink} specName={spec.specName} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WoWClasses;
