document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  tabLinks.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabLinks.forEach(t => t.classList.remove("active-link"));
      tabContents.forEach(c => c.classList.remove("active-tab"));

      tab.classList.add("active-link");
      tabContents[index].classList.add("active-tab");
    });
});
