import specsData from "../specs.json";
import colorByClass from "../utils/classColor";

interface SpecData {
  spec: string;
  "icon-link": string;
}

interface ClassSpecs {
  [specName: string]: SpecData;
  spec: SpecData;
}

const WoWSpecs: React.FC = () => {
  const data: WoWClass[] = specsData;

  return (
    <div className="grid grid-cols-4 align-middle justify-center my-10 gap-4 ">
      {data.map((wowClass) => {
        const className = Object.keys(wowClass)[0];
        const classSpecs = wowClass[className];

        const classColor = colorByClass(className as ClassName);

        return (
          <div
            className="flex justify-center border-[1px] p-2 rounded-lg"
            key={wowClass}
            style={{ backgroundColor: `${classColor}` }}
          >
            <div className="flex flex-row gap-4 justify-center items-center align-middle">
              {Object.entries(classSpecs).map(([specName, spec]) => (
                <div key={specName} className="flex h-[32px] w-[32px]">
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
