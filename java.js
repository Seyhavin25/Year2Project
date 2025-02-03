// Variable to hold the currently playing audio
var currentAudio = null;

// Select all carousel items (divs with the class 'carousel-item')
var numberOfSongs = document.querySelectorAll(".carousel-item").length;

for (var i = 0; i < numberOfSongs; i++) {
  // Add event listener to each carousel item
  document
    .querySelectorAll(".carousel-item")
    [i].addEventListener("click", function () {
      var itemId = this.id.trim(); // Get the id of the clicked carousel item

      // If an audio is already playing, stop it before playing the new one
      if (currentAudio) {
        currentAudio.pause(); // Pause the current audio
        currentAudio.currentTime = 0; // Reset the audio to the beginning
      }

      // Use switch statement to play the corresponding audio based on the item ID
      switch (itemId) {
        case "ahmom":
          currentAudio = new Audio("Music/ahmom.mp3");
          currentAudio.play();
          break;

        case "mama":
          currentAudio = new Audio("Music/babymama.mp3");
          currentAudio.play();
          break;

        case "sangkran":
          currentAudio = new Audio("Music/sangkran.mp3");
          currentAudio.play();
          break;

        default:
          alert("No song available for this item");
      }
    });
}

// Stop button functionality
document.getElementById("stopButton").addEventListener("click", function () {
  if (currentAudio) {
    currentAudio.pause(); // Pause the current audio
    currentAudio.currentTime = 0; // Reset the audio to the beginning
  }
});
