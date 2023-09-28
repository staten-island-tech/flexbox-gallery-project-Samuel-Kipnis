const modal = document.querySelector(".modal");
const modalButtons = document.querySelectorAll('.card-button')


// Get the button that opens the modal
for(let button of modalButtons) {
    button.onclick = function() {
        modal.style.display = "block";
      }
}
// Get the <span> element that closes the modal
const span = document.querySelector('.close');

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 