const openBtn = document.querySelector('#toggle');
  openBtn.addEventListener('mouseover', firstFunction);

    function firstFunction() {
      document.querySelector('.sidebar').style.width = '150px';
    }

const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('mouseover', secondFunction);

    function secondFunction() {
      document.querySelector('#sidebar-toggle').style.width = '0px';
    }