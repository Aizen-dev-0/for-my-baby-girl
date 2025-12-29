const home = document.getElementById('home');
const sorry = document.getElementById('sorry');
const videoSec = document.getElementById('videoSection');
const imagesSec = document.getElementById('imagesSection');

document.getElementById('btn-sorry').onclick = () => {
  showSection(sorry);
};

document.getElementById('btn-haamaan').onclick = () => {
  showSection(home);
};

document.getElementById('btn-video').onclick = () => {
  showSection(videoSec);
};

document.getElementById('btn-images').onclick = () => {
  showSection(imagesSec);
};

document.querySelectorAll('.btn-home').forEach(btn => {
  btn.onclick = () => showSection(home);
});

function showSection(section) {
  [home, sorry, videoSec, imagesSec, document.getElementById('newYear')].forEach(sec => {
    sec.classList.remove('active');
  });
  section.classList.add('active');
}
