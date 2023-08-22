// Create eventListener to all the button 
// All button should be able to play a different sound.
// Get all the drum buttons
const drumButtons = document.querySelectorAll('.drum');

// Function to play the sound
function playSound(soundURL) {
  const audio = new Audio(soundURL);
  audio.play();
}

// Add event listeners to all drum buttons
drumButtons.forEach(button => {
  button.addEventListener('click', function () {
    const key = this.textContent;
    playSound(getSoundURL(key));
    animateButton(key);
  });
});

// Add keypress event listener to the entire document
document.addEventListener('keydown', function (event) {
  const key = event.key.toLowerCase();
  if (isValidKey(key)) {
    playSound(getSoundURL(key));
    animateButton(key);
  }
});

// Function to get sound URL based on the key
function getSoundURL(key) {
  const soundURLs = {
    'w': 'https://files.codingninjas.in/tom-1-28537.mp3',
    'a': 'https://files.codingninjas.in/tom-2-28541.mp3',
    's': 'https://files.codingninjas.in/tom-3-28542.mp3',
    'd': 'https://files.codingninjas.in/tom-4-28543.mp3',
    'j': 'https://files.codingninjas.in/snare-28545.mp3',
    'k': 'https://files.codingninjas.in/crash-28546.mp3',
    'l': 'https://files.codingninjas.in/kick-bass-28547.mp3'
  };
  return soundURLs[key];
}

// Function to check if the key is valid
function isValidKey(key) {
  return ['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key);
}

// Function to animate the button
function animateButton(key) {
  const button = document.querySelector('.' + key);
  if (button) {
    button.classList.add('pressed');
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 100);
  }
}
