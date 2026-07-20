const bg = document.querySelector(".background");

const particleCount = 70;

for (let i = 0; i < particleCount; i++) {

  const p = document.createElement("div");
  p.className = "particle";

  const size = Math.random() * 4 + 1;

  p.style.width = size + "px";
  p.style.height = size + "px";

  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";

  p.style.animationDuration = (Math.random() * 20 + 15) + "s";
  p.style.animationDelay = (-Math.random() * 30) + "s";

  bg.appendChild(p);

}
