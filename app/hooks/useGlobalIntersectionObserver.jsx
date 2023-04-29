const observedElements = [];

const handleIntersection = (entry) => {
  console.log("Intersection observed: ", entry);
};

const handleObserve = (element) => {
  observedElements.push(element);
  observer.observe(element);
};

const handleUnobserve = (element) => {
  const index = observedElements.indexOf(element);
  if (index !== -1) {
    observedElements.splice(index, 1);
  }
  observer.unobserve(element);
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.66,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(handleIntersection);
}, options);

export { observedElements, handleObserve, handleUnobserve, options };