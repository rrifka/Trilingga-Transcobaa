//header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('shadow'); 
    } else {
        header.classList.remove('shadow'); 
    }
});

//dropdown
const menuIcon = document.getElementById('menu-icon');
const navLink = document.querySelector('.nav-link');

menuIcon.addEventListener('click', () => {
    navLink.classList.toggle('show');
});

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
});

//responsif header
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

// Menambahkan event listener pada dropdown toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah link berfungsi default

        // Dapatkan dropdown content terkait
        const dropdownContent = this.nextElementSibling;
        const chevronIcon = this.querySelector('.chevron-icon');

        // Toggle class .show untuk menampilkan/menyembunyikan dropdown content
        dropdownContent.classList.toggle('show');

        // Toggle class .rotated untuk mengatur rotasi chevron
        chevronIcon.classList.toggle('rotated');
    });
});


// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     grabCursor: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
