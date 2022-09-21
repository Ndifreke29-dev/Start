// Initialize variable - OPEN BUTTON
const openBtn = document.querySelector('#toggle');
  //  Add Event Listener
  openBtn.addEventListener('mouseover', firstFunction);

    // Create Function
    function firstFunction() {
      document.querySelector('.sidebar').style.width = '150px';
    }

    // CLOSE BUTTON
const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', secondFunction);

    function secondFunction() {
      document.querySelector('#sidebar-toggle').style.width = '0px';
    }


// BODY CLOSE
document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById('sidebar-toggle').style.width = '0px';
}


// Change Background
document.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});