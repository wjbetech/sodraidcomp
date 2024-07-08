import colorByClass, { type ClassName } from "../utils/classColor";
import { classAndSpecsData } from "../utils/specDataHandler";

// *REMEMBER THAT CLASS IS A TAKEN WORD*

const WoWClasses = () => {
	console.log(classAndSpecsData);

	return (
		<div className="grid grid-cols-2 xl:grid-cols-3 my-6 gap-2">
			{Object.keys(classAndSpecsData).map((className) => (
				<div
					key={className}
					className="flex flex-row gap-1 border-[2px] rounded-md py-[6px] px-[18px] justify-evenly max-w-[206px]"
					style={{ backgroundColor: `${colorByClass(className as ClassName)}` }}
				>
					{classAndSpecsData[className].map((spec) => (
						<img
							key={spec.specName}
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
