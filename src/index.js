import _ from "lodash";
import "./style.css"; // this is how you add style

function component() {
  const element = document.createElement("div");

  // Lodash is now imported on top of this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
