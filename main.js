// consts
const button = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const playBtn = document.querySelectorAll('.hero__btn, .video__btn');
const video = document.querySelector('.video');
const loader = document.querySelector('.preloader');
const favouriteSection = document.querySelector('.favourite');
const comboSection = document.querySelector('.combo');
const menuLinks = document.querySelectorAll('.menu__link');


// menu
button.addEventListener("click", function () {
    menu.classList.toggle('menu_active');
    this.classList.toggle('header__burger_active');
    hero.classList.toggle('hero_menu-opened');
    body.classList.toggle('darked');
});

// menu links click
for (const link of menuLinks) {
    link.addEventListener("click", function () {
        for (const element of menuLinks) {
            element.classList.remove('menu__link_active');
        }
        this.classList.add('menu__link_active');
    });
}

// observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.menu__link').forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('menu__link_active');
                } else{
                    link.classList.remove('menu__link_active');
                }
            });
        }
    });
}, {
    threshold: 0.7,
});

document.querySelectorAll('section').forEach((section) => observer.observe(section));




// smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// header scrolled
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 52) {
        header.classList.add('header_scrolled');
    } else {
        header.classList.remove('header_scrolled');
    }
});

// video player
for (const button of playBtn) {
    button.addEventListener("click", function () {
        video.classList.toggle('video_active');
        body.classList.toggle('no-scroll');
    });
}

// preloader function
function preloader() {
    loader.classList.add('preloader_closed');
}

// preloader call
setTimeout(preloader, 3000);

// slider 1
const slider1 = new Swiper('.favourite__list', {
    // Optional parameters
    slidesPerView: 2.25,
    spaceBetween: 30,
    speed: 1000,

    // Navigation arrows
    navigation: {
        nextEl: '.favourite__right-arrow',
        prevEl: '.favourite__left-arrow',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,

        },
        // when window width is >= 640px
        1470: {
            slidesPerView: 2.25,
            spaceBetween: 30
        }
    }

});


// on slide
slider1.on('slideChange', function () {
    let currentSlide = slider1.realIndex + 2;
    if (currentSlide === slider1.slides.length) {
        favouriteSection.classList.add('favourite_to-left');
    }
    if (currentSlide === 2) {
        favouriteSection.classList.remove('favourite_to-left');
    }
});


// tabs
const tabs = document.querySelectorAll('.gifset__tab');
const tabsButtons = document.querySelectorAll('.gifset__tabs-button');

for (const button of tabsButtons) {
    button.addEventListener("click", function () {
        const number = this.getAttribute('data-tab');
        for (const tab of tabs) {
            if (tab.getAttribute('data-tab') === number) {
                for (const elem of tabs) {
                    elem.classList.remove('gifset__tab_active');
                }
                for (const elem of tabsButtons) {
                    elem.classList.remove('gifset__tabs-button_active');
                }
                tab.classList.add('gifset__tab_active')
                button.classList.add('gifset__tabs-button_active');
            }
        }
    });
}

// slider 2

const slider2 = new Swiper('.combo__list', {
    // Optional parameters
    slidesPerView: 3.25,
    spaceBetween: 30,
    speed: 1000,

    // Navigation arrows
    navigation: {
        nextEl: '.combo__right-arrow',
        prevEl: '.combo__left-arrow',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,

        },
        // when window width is >= 640px
        1470: {
            slidesPerView: 3.25,
            spaceBetween: 30
        }
    }
});

// on slide
slider2.on('slideChange', function () {
    let currentSlide = slider2.realIndex + 3;
    console.log(currentSlide);
    console.log(slider2.slides.length);
    if (currentSlide === slider2.slides.length) {
        comboSection.classList.add('combo_to-right');
    }
    if (currentSlide === 3) {
        comboSection.classList.remove('combo_to-right');
    }
});