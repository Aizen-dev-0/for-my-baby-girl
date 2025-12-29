// Start Screen
function startMain(option){
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  showMessage();
  createHearts(20);
  setTimeout(showBalloonButtons, 2500);
}

// Typing effect
function showMessage(){
  const msg = "helloww baby gurll 😘\nYou wanna se something cwazyyyyy 😏??\nI'll show you something very cwazyyyyy 😏😏";
  let i=0;
  const el = document.getElementById('message');
  el.textContent = '';
  function type(){ 
    if(i<msg.length){
      el.textContent += msg.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

// Balloon Buttons
function showBalloonButtons(){
  document.getElementById('balloon-buttons').classList.remove('hidden');
}

// Hearts background
function createHearts(count){
  const container = document.getElementById('heart-bg');
  for(let i=0;i<count;i++){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random()*100+'%';
    heart.style.animationDuration = 3 + Math.random()*2 + 's';
    container.appendChild(heart);
  }
}

// Sorry Section
function showSorry(){
  document.getElementById('main-screen').classList.add('hidden');
  document.getElementById('sorry-modal').classList.remove('hidden');
  document.getElementById('sorry-message').innerHTML = "Maan jaiye na cutie ji 🥺<br>Pweaseeeee na 😅<br>Ye lijiye phool ab to maan jaiye na 😅";
}

// Back from Sorry
function backHomeFromSorry(){
  document.getElementById('sorry-modal').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
}

// Video
function showVideo(){
  document.getElementById('main-screen').classList.add('hidden');
  document.getElementById('video-modal').classList.remove('hidden');
}

// Back from Video
function backHomeFromVideo(){
  document.getElementById('video-modal').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
}

// Photos
function showPhotos(){
  document.getElementById('main-screen').classList.add('hidden');
  document.getElementById('photos-modal').classList.remove('hidden');
}

// Back from Photos
function backHomeFromPhotos(){
  document.getElementById('photos-modal').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
}

// New Year
function showNewYear(){
  const now = new Date();
  const ny = new Date('2026-01-01T00:00:00');
  if(now >= ny){
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('newyear-modal').classList.remove('hidden');
  } else {
    alert("Locked! Wait for 12 AM 1 Jan 2026 😏");
  }
      }
