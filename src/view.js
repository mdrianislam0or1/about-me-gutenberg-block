import { store, getContext } from "@wordpress/interactivity";

store("bradsboilerplate", {
  actions: {
    printName: () => {
      const context = getContext();
      alert(`The sky color is ${context.attributes.name}`);
      console.log("print from here ", context.attributes.name);
    },

    printImage: () => {
      const context = getContext();
      console.log("print image here", context.attributes.image);
    },
    toggleSkyColor: () => {
      const context = getContext();
      context.showSkyColor = !context.showSkyColor;
    },
    toggleGrassColor: () => {
      const context = getContext();
      context.showGrassColor = !context.showGrassColor;
    },
    accessExample: () => {
      const context = getContext();
      alert(`The sky color is ${context.attributes.skyColor}`);
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter h3");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const speed = 10000;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
