import specsData from "../specs.json";
import colorByClass from "../utils/classColor";

import allClasses from "../utils/specDataHandler.ts";
import classNames from "../utils/specDataHandler.ts";
import classAndSpecs from "../utils/specDataHandler.ts";

console.log(allClasses, classNames, classAndSpecs);

interface SpecData {
  spec: string;
  "icon-link": string;
}

interface ClassSpecs {
  [specName: string]: SpecData;
  spec: SpecData;
}

const WoWSpecs: React.FC = () => {
  const data = specsData;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 align-middle lg:grid-cols-4 justify-center my-10 gap-4 ">
      {data.map((wowClass, idx) => {
        const className = Object.keys(wowClass)[0];
        const classSpecs = wowClass[className];

        const classColor = colorByClass(className as ClassName);

        return (
          <div
            className="flex justify-center border-[1px] p-2 rounded-lg"
            key={idx}
            style={{ backgroundColor: `${classColor}` }}
          >
            <div className="flex flex-row gap-2 justify-center items-center align-middle">
              {Object.entries(classSpecs).map(([specName, spec]) => (
                <div key={specName} className="flex h-[30px] w-[30px]">
                  <img
                    src={spec["icon-link"]}
                    alt={spec.spec}
                    className="rounded-md border-2 border-black cursor-grab"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WoWSpecs;
