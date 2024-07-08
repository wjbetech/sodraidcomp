import myData from "../specs.json";

// types for data
interface Spec {
	specName: string;
	iconLink: string;
}

interface WowClass {
	className: string;
	specs: Spec[];
}

const classAndSpecsData: { [className: string]: Spec[] } = {};

for (const wowClass of myData) {
	classAndSpecsData[wowClass.className] = wowClass.specs;
}

const classNames: string[] = myData.map((d) => d.className);

const allData: WowClass[] = myData;

export { classNames, allData, classAndSpecsData };
