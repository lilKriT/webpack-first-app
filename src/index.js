import Print from "./print";
import "./style.css";
import { cube } from "./math";

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import("lodash");

  element.innerHTML = _.join(["Hello", "webpacka"], " ");
  element.onclick = Print.bind(null, "Hello webpack!" + cube(3));

  return element;
}

let element;
getComponent().then((component) => {
  element = component;
  document.body.appendChild(element);
});

if (module.hot) {
  module.hot.accept("./print.js", () => {
    console.log("Accepting the updated module!");
    // print();
    document.body.removeChild(element);
    element = getComponent();
    document.body.appendChild(element);
  });
}
