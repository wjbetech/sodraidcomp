import myData from "../specs.json";

// grab *only* class names
const classNames = myData.map((d) => d.className);

// grab *all* data raw
const allData = myData;

// grab classes with their specs & info
const classAndSpecs = [];

for (const wowClass of myData) {
	const { className, specs } = wowClass;
	if (!classAndSpecs[className]) {
		classAndSpecs[className] = [];
	}

	classAndSpecs[className].push(specs);
}

export { classNames, allData, classAndSpecs };
