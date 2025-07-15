/*========== Menu Icon Navbar ==========*/
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
}

/*========== Scroll Sections Active Link ==========*/
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  const scrollY = window.scrollY;

  // Aktifkan link navbar saat scroll
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const currentLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (currentLink) currentLink.classList.add('active');
    }
  });

  // Auto-close navbar saat scroll (di mobile)
  if (menuIcon && navbar) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }
};

/*========== Swiper (Optional) ==========*/
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

/*========== Dark Light Mode ==========*/
const darkModeIcon = document.querySelector('#darkMode-icon');

if (darkModeIcon) {
  darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  };
}

/*========== Scroll Reveal ==========*/
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading, lanyard-container', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .project-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .card', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
}

/*========== Lanyard Animations ==========*/
const lanyard = document.getElementById('lanyard');
const card = document.getElementById('cardWrapper');

if (lanyard) {
  // Idle goyang
  gsap.to(lanyard, {
    rotate: 2,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
  });

  // Masuk dari atas
  gsap.from(lanyard, {
    y: -150,
    opacity: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.5)"
  });

  // Parallax mouse
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 30;
    const y = (e.clientY - window.innerHeight / 2) / 30;
    gsap.to(lanyard, {
      x,
      y,
      duration: 0.5,
      ease: "power2.out"
    });
  });
}

if (card) {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
}

const stack = document.getElementById("photoStack");

    stack.addEventListener("click", () => {
    // Ambil elemen pertama (terdepan)
    const first = stack.children[0];
    // Geser ke belakang (paling akhir)
    stack.appendChild(first);
});
