function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show');
  }

  function openOverlay(src) {
    const overlay = document.getElementById("overlay");
    const zoomedImg = document.getElementById("zoomedImg");
    zoomedImg.src = src;
    overlay.style.display = "flex";
  }

  function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
  }