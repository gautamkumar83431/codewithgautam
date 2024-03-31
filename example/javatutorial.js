
// Get the modal
var modale = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modale) {
    modal.style.display = "none";
  }
}
