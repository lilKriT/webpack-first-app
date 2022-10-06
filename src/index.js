import _ from "lodash";
import "./style.css"; // this is how you add style
import Icon from "./icon.png"; // importing images

function component() {
  const element = document.createElement("div");

  // Lodash is now imported on top of this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Adding an image
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
