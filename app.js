const openBtn = document.querySelector('#toggle');
openBtn.addEventListener('click', openNow);

function openNow() {
  document.querySelector('#sidebar-toggle').style.width = '150px';
}

const closeBtn = document.querySelector('#close');
closeBtn.addEventListener('click', closeNow);

function closeNow() {
  document.querySelector('.sidebar').style.width = '0px';
}