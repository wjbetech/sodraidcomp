import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import colorByClass, { type ClassName } from "../utils/classColor";
import { classAndSpecsData } from "../utils/specDataHandler";

const DraggableItem = ({ id, iconLink, specName }: { id: number; iconLink: string; specName: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  });

  const style = {
    transform: CSS.Transform.toString(transform)
  };

  return (
    <img
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
  return (
    <div className="grid grid-cols-3 gap-2 m-auto place-items-center my-6">
      {Object.keys(classAndSpecsData).map((className) => (
        <div
          key={className}
          className="flex flex-row gap-1 border-[2px] rounded-md py-[6px] px-[18px] justify-evenly min-w-[200px] max-w-[240px]"
          style={{
            backgroundColor: `${colorByClass(className as ClassName)}`
          }}
        >
          {classAndSpecsData[className].map((spec) => (
            <DraggableItem key={spec.specName} id={spec.id} iconLink={spec.iconLink} specName={spec.specName} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WoWClasses;
