import colorByClass from "../utils/classColor";
<<<<<<< HEAD
import { SpecIcon } from "./Spec";
=======
import { classNames, allData, classAndSpecs } from "../utils/specDataHandler";
>>>>>>> origin/master

// *REMEMBER THAT CLASS IS A TAKEN WORD*

<<<<<<< HEAD
interface ClassSpecs {
	[specName: string]: SpecData;
	spec: SpecData;
}

const WoWSpecs: React.FC = ({ spec }) => {
	const data = specsData;

	return (
		<div className="grid grid-cols-2 md:grid-cols-3 align-middle lg:grid-cols-4 justify-center my-10 gap-4 ">
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
							{Object.entries(classSpecs).map(([specName]) => (
								<div key={specName} className="flex h-[30px] w-[30px]">
									<SpecIcon
										src={specName}
										className="rounded-md border-2 border-black cursor-grab"
									/>
								</div>
							))}
						</div>
					</div>
				);
			})}
=======
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
>>>>>>> origin/master
		</div>
	);
};

export default WoWClasses;
