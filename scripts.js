document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("animateFromLeft");

  setTimeout(function () {
      section.style.left = "0"; // Set the left property to 0 to move the section in from the left
  }, 100);
  });

  document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loadingScreen");

  // Simulate a delay to demonstrate the effect (replace with your actual content loading logic)
  setTimeout(function () {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.transform = "scale(8)";
      setTimeout(function () {
          loadingScreen.style.display = "none";
          document.body.style.overflow = "auto"; // Enable scrolling after loading screen disappears
      }, 1500);
  }, 800); // Adjust the timeout (in milliseconds) to match your desired delay
  });



  






  


          
  