import colorByClass from "../utils/classColor";
import { classNames, allData, classAndSpecs } from "../utils/specDataHandler";

// *REMEMBER THAT CLASS IS A TAKEN WORD*

const WoWClasses = () => {
	console.log(classAndSpecs);

	return (
		<div className="grid grid-cols-2 xl:grid-cols-3 my-6 gap-2">
			{Object.keys(classAndSpecs).map((className) => (
				<div
					key={className}
					className="flex flex-row gap-1 border-[2px] rounded-md py-[6px] px-[18px] justify-evenly max-w-[206px]"
					style={{ backgroundColor: `${colorByClass(className)}` }}
				>
					{classAndSpecs[className][0].map((spec) => (
						<img
							key={spec}
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
