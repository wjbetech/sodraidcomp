import classesAndSpecs from '../specs.json';

// build object for each class
const allClassDetails: { class: string; specs: [] }[] = [];

// build class + spec objects
const classWithSpecs: { class: string; specs: string }[] = [];

for (const classObject of classesAndSpecs) {
  for (const [className, specs] of Object.entries(classObject)) {
    const specNames = specs.map((specObj: object) => Object.keys(specObj));
    classWithSpecs.push({
      class: className,
      specs: specNames
    });
  }
}

// grab class names
const classNames = classesAndSpecs.map((classes) => {
  return Object.keys(classes)[0];
});

export default { classNames, classWithSpecs, allClassDetails };
