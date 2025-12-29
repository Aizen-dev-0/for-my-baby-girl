function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startApp() {
  show('mainScreen');
}

function openSorry() {
  document.getElementById('contentScreen').innerHTML = `
    <h2>Maan jaiye na cutie ji 🥺</h2>
    <p>Pweaseeeee na 😅</p>
    <img src="assets/cat.png" width="150">
    <p>ye lijiye phool ab to maan jaiye na 😅</p>
    <button onclick="maanGayi()">Haa maan gye 😅</button>
    <button id="noBtn" onclick="this.style.display='none'">Nahi abhi nahi mane hai</button>
    <br><br>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show('contentScreen');
}

function maanGayi() {
  alert("YAYYYYYY 💖💖💖");
}

function openVideo() {
  document.getElementById('contentScreen').innerHTML = `
    <p>here's something i made for you 😅</p>
    <video controls width="90%">
      <source src="assets/video.mp4" type="video/mp4">
    </video>
    <br><br>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show('contentScreen');
}

function openPhotos() {
  document.getElementById('contentScreen').innerHTML = `
    <p>here's my cute little baby girl 😅</p>
    <img src="assets/p1.jpg" width="40%">
    <img src="assets/p2.jpg" width="40%">
    <img src="assets/p3.jpg" width="40%">
    <img src="assets/p4.jpg" width="40%">
    <br><br>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show('contentScreen');
}

function openNewYear() {
  const now = new Date();
  const unlock = new Date("2026-01-01T00:00:00");

  if (now < unlock) {
    alert("Wait till New Year baby 🎆💗");
    return;
  }

  document.getElementById('contentScreen').innerHTML = `
    <h2>Happy New Year my cutie 🎆💖</h2>
    <p>
      You are my home, my comfort, my forever.<br>
      I’m sorry for every time I hurt you.<br>
      I’ll love you today, tomorrow, and always.
    </p>
    <p><i>
      If love had a face, it would look like you.
    </i></p>
    <button onclick="show('mainScreen')">there's more 💕</button>
  `;
  show('contentScreen');
    }
