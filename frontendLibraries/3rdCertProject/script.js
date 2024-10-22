  const display = document.getElementById("display");
  const drumpad = document.querySelectorAll(".drum-pad");
  const audio = document.querySelectorAll(".clip");

document.addEventListener('keydown', function(event) {
 const key = event.key.toUpperCase();

  for (let i = 0; i < drumpad.length; i++) {
    if ( drumpad[i].id == key ) {
      audio[i].play();
      display.innerHTML = audio[i].innerHTML;
      }
    }
}); 

for (let i = 0; i < drumpad.length; i++) {
  //drumpad.addEventListener('click',console.log("this works"))
const pad = document.querySelector('#'+drumpad[i].id)
pad.addEventListener('click', function() {
    audio[i].play();
    display.innerHTML = audio[i].innerHTML
});
}




