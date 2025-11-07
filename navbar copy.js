document.addEventListener('DOMContentLoaded', function() {
  // Creating the HTML structure for the navigation bar
  const navbarHTML = `
  <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
      <div class="navbar">
          <div class="logo"><a href="/">Dublino.se</a></div>
          <ul class="links">
              <li><a href="/">Home</a></li>
              <li><a href="contact">Contact</a></li>
              <li><a href="tools">Tools</a></li>
          </ul>
          <div class="toggle_btn">
              <i class="fa-solid fa-bars"></i>
          </div>
      </div>

      <div class="dropdown_menu">
          <li><a href="/">Home</a></li>
          <li><a href="contact">Contact</a></li>
          <li><a href="tools">Tools</a></li>
      </div>
  </header>
  `;

  // Inserting the navbar into the body of the HTML
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Dropdown toggle functionality
  const toggleBtn = document.querySelector('.toggle_btn');
  const toggleBtnIcon = document.querySelector('.toggle_btn i');
  const dropDownMenu = document.querySelector('.dropdown_menu');

  if (toggleBtn && dropDownMenu) {
      toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open');
          const isOpen = dropDownMenu.classList.contains('open');

          // Change the hamburger icon to close (X) when the menu is open
          toggleBtnIcon.classList = isOpen
              ? 'fa-solid fa-xmark'  // Change to X when menu is open
              : 'fa-solid fa-bars';  // Revert to bars when closed
      };
  }
});
