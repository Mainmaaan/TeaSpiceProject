const messages = [
  "🍵 Fresh Herbal Tea Daily",
  "🌶 Exotic Spices from Around the World",
  "🫖 Limited-Time Special: Honey Masala Chai",
  "🥗 Pair your tea with healthy snacks!"
];

let index = 0;
const floatingTextEl = document.querySelector('.floating-text');

if (floatingTextEl) {
  function rotateText() {
    // Fade out
    floatingTextEl.classList.remove("show");
    setTimeout(() => {
      floatingTextEl.textContent = messages[index];
      floatingTextEl.classList.add("show"); // Fade in
      index = (index + 1) % messages.length;
    }, 500); // match CSS fade-out duration
  }

  setInterval(rotateText, 3000);
  rotateText();
}
