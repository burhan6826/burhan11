// Optional: Add stars in background
const universe = document.querySelector(".universe");

for (let i = 0; i < 150; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "white";
  star.style.position = "absolute";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.opacity = Math.random();
  universe.appendChild(star);
}
