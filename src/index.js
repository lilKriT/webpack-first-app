import _ from "lodash";

// this was the async version
// async function getComponent() {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["Hello", "webpacka"], " ");
//   element.onclick = Print.bind(null, "Hello webpack!" + cube(3));

//   return element;
// }

function getComponent() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");

  button.innerHTML = "Click me";
  element.innerHTML = _.join(["Hello", "Webpack"], " ");
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = (e) =>
    import(/* webpackChunkName: "print" */ "./print").then((module) => {
      const print = module.default;
      print();
    });

  return element;
}

document.body.appendChild(getComponent());

// this is for hot reloading (hmr)
// if (module.hot) {
//   module.hot.accept("./print.js", () => {
//     console.log("Accepting the updated module!");
//     // print();
//     document.body.removeChild(element);
//     element = getComponent();
//     document.body.appendChild(element);
//   });
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW REgistered ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
