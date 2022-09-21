const openBtn = document.querySelector('#toggle');
  openBtn.addEventListener('mouseover', firstFunction);

    function firstFunction() {
      document.querySelector('.sidebar').style.width = '150px';
    }

const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', secondFunction);

    function secondFunction() {
      document.querySelector('#sidebar-toggle').style.width = '0px';
    }

document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}