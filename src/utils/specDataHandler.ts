import classesAndSpecs from '../specs.json';

// grab class names
const classAndSpecData = classesAndSpecs;

classAndSpecData.forEach((className, idx) => {
  return className[idx];
});

export default { classAndSpecData };
