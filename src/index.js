import _ from "lodash";
// import "./style.css"; // this is how you add style
// import Icon from "./icon.png"; // importing images
// import Data from "./data.xml";
// import Notes from "./data.csv";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash is now imported on top of this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  //   element.classList.add("hello");

  // Adding an image
  //   const myIcon = new Image();
  //   myIcon.src = Icon;

  //   element.appendChild(myIcon);

  // Reading the data files:
  //   console.log(Data);
  //   console.log(Notes);

  btn.innerHTML = "Click me and check the console";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
