function changeImage(button) {
    button.classList.toggle('clicked');
  }
  
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('show');
  }

  const detailsElement = document.getElementById('collapse');
  const contentElement = detailsElement.querySelector('.collapsible-content');
  
  detailsElement.addEventListener('toggle', function() {
      if (detailsElement.open) {
          contentElement.classList.add('show');
      } else {
          contentElement.classList.remove('show');
      }
  });

document.querySelector(".collapsible-text").addEventListener("click", function() {
      var content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
  });