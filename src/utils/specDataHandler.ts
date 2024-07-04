import myData from '../specs.json';

// grab *only* class names
const classNames = myData.map((d) => d.className);

// grab *only* classes and specs
function handleClassAndSpec(data) {
  const result = [];

  for (const d of data) {
    for (const spec of d.specs) {
      result.push({
        className: d.className,
        specName: spec.specName
      });
    }
  }

  return result;
}

const classesAndSpecs = handleClassAndSpec(myData);

// grab *all* data raw
const allData = myData;

export { classNames, classesAndSpecs, allData };
