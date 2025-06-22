const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("reveal", entry.isIntersecting);
  });
}, {
  threshold: 0.3
});

sections.forEach(section => observer.observe(section));
