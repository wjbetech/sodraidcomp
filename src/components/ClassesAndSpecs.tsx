import { classesAndSpecs } from "../utils/specs";
import colorByClass from "../utils/classColor";

const Specs = ({ className, properties }) => {

  const textColor = colorByClass(className);

  return (
    <div className="p-2">
      <ul>
        {properties.map(property => (
          <li key={property} className="flex flex-col p-1 mb-1 border-2 border-gray-600 rounded-md w-[150px]" style={{ color: `${textColor}` }}>{property}</li>
        ))}
      </ul>
    </div>
  );
}

// Main component
const ClassesAndSpecs = () => {
  return (
    <div className="flex justify-center my-4">
      {Object.entries(classesAndSpecs).map(([className, properties]) => (
        <Specs 
          key={className} 
          className={className} 
          properties={properties} 
        />
      ))}
    </div>
  );
}

export default ClassesAndSpecs;