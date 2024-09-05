import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface DraggableItemProps {
  id: string;
  iconLink: string;
  specName: string;
}

const DraggableItem = ({ id, iconLink, specName }: DraggableItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { id, iconLink, specName } // Attach the actual spec data here
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

export default DraggableItem;
