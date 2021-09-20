drum_list = document.querySelectorAll(".drum")

for (i = 0; i < drum_list.length; i++) {
  drum_list[i].addEventListener("click", playSoundByClick)
}

function playSoundByClick() {
  var letter = this.innerHTML;
  makeSound(letter)
  animation(letter)
  }

document.addEventListener("keypress", playSoundByTyping)

function playSoundByTyping (event) {
  var keyboard = event.key
  makeSound(keyboard)
  animation(keyboard)
}

function makeSound(keyboard) {
  switch (keyboard) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play()
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play()
      break

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play()
      break

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play()
      break

    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play()
      break

    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play()
      break

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play()
      break
      
    default:
      console.log(keyboard)
      break;
  }
}
 
function animation (keyword) {
  var btnChoosen = document.querySelector("." + keyword)
  btnChoosen.classList.add("pressed")
  setTimeout(function () {
    btnChoosen.classList.remove("pressed")
  },100)
}