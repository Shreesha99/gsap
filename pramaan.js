const heading = document.querySelector(".main-heading");

if (heading) {
  const words = heading.textContent.split(" ");
  heading.innerHTML = words
    .map((word) => {
      const letters = word
        .split("")
        .map((c) => `<span class="char">${c}</span>`)
        .join("");
      return `<span class="word">${letters}&nbsp;</span>`;
    })
    .join("");
}

const navTl = gsap.timeline({ defaults: { ease: "power3.out" } });

navTl.from(".navbar h4", {
  y: -20,
  opacity: 0,
  duration: 0.5,
});

navTl.from(".navbar .links h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
});

navTl.from(".main h1 .char", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.03,
});
