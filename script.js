/* Floating hearts generator */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 400);

/* Screen control */
function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* Typing effect */
function typeText(element, text, speed = 50) {
  element.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* Start */
function startApp() {
  show("mainScreen");
  const msg = document.getElementById("typedMsg");
  typeText(
    msg,
    "helloww baby gurll 😘\nYou wanna see something cwazyyyyy 😏??\nI'll show you something very cwazyyyyy 😏😏"
  );
}

/* Sorry flow */
function openSorry() {
  document.getElementById("contentScreen").innerHTML = `
    <h2>Maan jaiye na cutie ji 🥺</h2>
    <p>Pweaseeeee na 😅</p>
    <img src="assets/cat.png">
    <p>ye lijiye phool ab to maan jaiye na 😅</p>
    <button onclick="maanGayi()">Haa maan gye 😅</button>
    <button id="noBtn" onclick="this.remove()">Nahi abhi nahi mane hai</button>
    <br><br>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show("contentScreen");
}

/* Hearts burst */
function maanGayi() {
  for (let i = 0; i < 30; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = "💖";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = "24px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

/* Video */
function openVideo() {
  document.getElementById("contentScreen").innerHTML = `
    <p>here's something i made for you 😅</p>
    <video controls width="90%">
      <source src="assets/video.mp4" type="video/mp4">
    </video>
    <br><br>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show("contentScreen");
}

/* Photos */
function openPhotos() {
  document.getElementById("contentScreen").innerHTML = `
    <p>here's my cute little baby girl 😅</p>
    <img src="assets/p1.jpg">
    <img src="assets/p2.jpg">
    <img src="assets/p3.jpg">
    <img src="assets/p4.jpg">
    <br><br>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show("contentScreen");
}

/* New Year */
function openNewYear() {
  const now = new Date();
  const unlock = new Date("2026-01-01T00:00:00");

  if (now < unlock) {
    alert("Not yet baby 🎆💗");
    return;
  }

  for (let i = 0; i < 10; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 1500);
  }

  document.getElementById("contentScreen").innerHTML = `
    <h2>Happy New Year my cutie 🎆💖</h2>
    <p>
      If love had a language,<br>
      my heart would speak your name.<br><br>
      I’m sorry for the moments I failed you,<br>
      and grateful for every moment you stayed.<br><br>
      I love you today, tomorrow,<br>
      and in every year that follows.
    </p>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show("contentScreen");
                               }
