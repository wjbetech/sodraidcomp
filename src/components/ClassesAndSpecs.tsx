import { classesAndSpecs } from "../utils/specs";
import colorByClass from "../utils/classColor";

const Specs = ({ className, properties }) => {
  const classColor = colorByClass(className);

  return (
    <div className={`p-2 border-2 border-gray-600 mx-1 rounded-md bg-${className} bg-opacity-50`}>
      <ul className="flex flex-col justify-evenly">
        {properties.map((property) => (
          <li
            key={property}
            className="p-1 mb-1 border-2 border-gray-600 bg-gray-900 rounded-md w-[150px] cursor-pointer"
            style={{ color: `${classColor}` }}
          >
            {property}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main component
const ClassesAndSpecs = () => {
  return (
    <div className="flex justify-center my-4">
      {Object.entries(classesAndSpecs).map(([className, properties]) => (
        <Specs key={className} className={className} properties={properties} />
      ))}
    </div>
  );
};

export default ClassesAndSpecs;
