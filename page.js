{ const navbar = document.getElementById("navbar"); if (window.scrollY > 50) { navbar.classList.add("scrolled"); } else { navbar.classList.remove("scrolled"); } });

const menuToggle = document.getElementById("menu-toggle"); const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => { navLinks.classList.toggle("show"); });