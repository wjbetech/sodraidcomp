import myData from "../specs.json";

// types for data
interface Spec {
	specName: string;
}

interface WowClass {
	className: string;
	specs: Spec[];
}

interface ClassAndSpecs {
	className: string;
	specName: string;
}

// grab *only* class names
const classNames: string[] = myData.map((d) => d.className);

// grab *all* data raw
const allData: WowClass[] = myData;

// grab classes with their specs & info
const classAndSpecs: ClassAndSpecs[] = [];

for (const wowClass of myData) {
	const { className, specs } = wowClass;
	for (const spec of specs) {
		classAndSpecs.push({ className, specName: spec.specName });
	}
}

export { classNames, allData, classAndSpecs };
