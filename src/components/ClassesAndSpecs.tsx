import specsData from "../specs.json";
import colorByClass from "../utils/classColor";

interface SpecData {
  spec: string;
  "icon-link": string;
}

interface ClassSpecs {
  [specName: string]: SpecData;
}

const WoWSpecs: React.FC = () => {
  const data: WoWClass[] = specsData;

  return (
    <div className="grid grid-cols-4 align-middle justify-center my-10 gap-4 ">
      {data.map((wowClass, index) => {
        const className = Object.keys(wowClass)[0];
        const classSpecs = wowClass[className];

        const classColor = colorByClass(wowClass);
        console.log(classColor);

        return (
          <div
            className="flex justify-center border-[1px] p-2 rounded-lg"
            key={index}
            style={{ backgroundColor: `${classColor}` }}
          >
            <div className="flex flex-row gap-4">
              {Object.entries(classSpecs).map(([specName, spec], idx) => (
                <div key={idx} className="h-[30px] w-[30px]">
                  <img src={spec["icon-link"]} alt={spec.spec} />
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
