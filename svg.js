const heading = document.querySelector(".center-part1 h1");

// Split text into words, then letters within each word
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

//GSAP animations
var tl = gsap.timeline();

tl.from(".center-part1 .char", {
  y: 100,
  opacity: 0,
  duration: 0.6,
  ease: "power3.out",
  stagger: 0.03,
});

tl.from("section .center-part2 img", {
  opacity: 0,
  duration: 2,
  scrub: 2,
});
