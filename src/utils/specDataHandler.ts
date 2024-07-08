import myData from "../specs.json";

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

// ensure all future uses of data are validated
const validatedData: WowClass[] = myData;

// grab *only* class names
const classNames: string[] = validatedData.map((d) => d.className);

// grab *all* data raw
const allData: WowClass[] = validatedData;

// grab classes with their specs & info
const classAndSpecs: ClassAndSpecs[] = [];

for (const wowClass of validatedData) {
	const { className, specs } = wowClass;
	for (const spec of specs) {
		classAndSpecs.push({ className, specName: spec.specName });
	}
}

export { classNames, allData, classAndSpecs };
