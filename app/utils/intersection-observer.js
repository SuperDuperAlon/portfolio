function handleIntersection(entry) {
  console.log("Intersection observed: ", entry);
  if (entry.isIntersecting) {
    entry.target.classList.add("observed");
  } 
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

export const observer = new IntersectionObserver((entries) => {
  entries.forEach(handleIntersection);
}, options);
