
function playSound(e){
  // grab the audio associated with the keyCode
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  // stop function from running if there is no audio
  if(!audio) return;

  //rewind the audio back to the start if key is hit againg
  audio.currentTime = 0

  //play audio associated with keyCode
  audio.play()

  //add the playing class to the key
  key.classList.add('playing')
}

function removeTransition(e){
  //skip if the property name isn't equal to transform
  if (e.propertyName !== 'transform')return;
  this.classList.remove('playing')
}

  // add an addEventListener to select ALL the elemets that have the key class
  const keys = document.querySelectorAll('.key');

  //run a foreach loop that will add a transitionend eventlistener to each element
  keys.forEach(key =>key.addEventListener('transitionend', removeTransition));

  //add event listener to listen for keydown on the window
  window.addEventListener('keydown', playSound);
