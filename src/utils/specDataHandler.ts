import classesAndSpecs from "../specs.json";

// grab class names
const classAndSpecData = classesAndSpecs.map((classObj) => classObj.className);

export default { classAndSpecData };
