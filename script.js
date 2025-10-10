// gsap.to("#box1", {
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: "0.5",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box2", {
//   x: 1000,
//   duration: 2,
//   delay: 2.5,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: "0.5",
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.3,
});

tl.to("#box1", {
  x: 1500,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

tl.to("#box2", {
  x: 1500,
  rotate: 360,
  duration: 1.5,
});

gsap.from("h1", {
  opacity: 0,
  color: "red",
  y: 20,
  duration: 2,
  delay: 1,
  stagger: 0.3,
});
