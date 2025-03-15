// Function to change text when the button is clicked
function changeText() {
    let paragraph = document.getElementById("dynamic-text");
    paragraph.innerText = "You just clicked the button!";

     // Apply fade-in effect
     paragraph.classList.add("show")
}

// Event listener for the button click
document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".btn-click");
    button.addEventListener("click", changeText);
});
    
  // In the above code, we have defined a function  changeText()  
  // that changes the text of the paragraph element with the id  dynamic-text  to 
  // “You just clicked the button!” when the button is clicked.
  //  We have added an event listener to the button that listens 
  // for the click event and calls the  changeText()  function 
  // when the button is clicked. 
