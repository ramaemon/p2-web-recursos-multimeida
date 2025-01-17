function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      // Item has crossed our observation
      // threshold - load src from data-src
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.remove('lazyload');
      // Job done for this item - no need to watch it!
      observer.unobserve(entry.target);
    }
  });
}

const images = document.querySelectorAll('.lazyload');
const observer = new IntersectionObserver(handleIntersection);
images.forEach(image => observer.observe(image));