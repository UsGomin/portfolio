

// fadeout chargement
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hide");

    // retire comlpletement le loader
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2700);
});

const boutton = document.getElementById("button");
boutton.onclick = () => {
  window.open('image/night.png');
}