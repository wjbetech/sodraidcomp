import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DraggableItemProps {
  id: string;
  iconLink: string;
  specName: string;
  wowClassName: string;
}

const DraggableItem = ({ id, iconLink, specName, wowClassName }: DraggableItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { id, iconLink, specName, wowClassName }
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
      className="w-[30px] h-[30px] rounded-md cursor-grab"
      src={iconLink}
      alt={specName}
    />
  );
};

export default DraggableItem;
