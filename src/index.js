function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  // For safety, remove "main" and add "private: true" in package.json
  // This is not the best way to do this. Not immediately visible that it requires an external library (lodash)
  // If a dependency is missing or wrong order - BOOM
  // If it's included and not used - waste of bandwidth
  return element;
}

document.body.appendChild(component());
