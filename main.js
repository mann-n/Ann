// Slider Can

//var slides = document.querySelectorAll('.slider__item');
//var btns = document.querySelectorAll('.dots');
//var nextBtn = document.querySelectorAll('.next');
//let currentSlide = 1;
//
//var manualNav = function(manual) {
//    slides.forEach((slide) => {
//        slide.classList.remove('active');
//        
//        btns.forEach((btn) => {
//            btn.classList.remove('active');
//        });
//    });
//    
//    
//    slides[manual].classList.add('active');
//    btns[manual].classList.add('active');
//}
//
//btns.forEach((btn, i) => {
//    btn.addEventListener("click", () => {
//        manualNav(i);
//        currentSlide = i;
//    });
//});

var nextBtn = document.querySelector('.next');
let slides = document.querySelectorAll('.slider__item');
let dots = document.querySelectorAll('.can__dots');
let index = 0;

nextBtn.onclick = () => {
    if (index === slides.length -1) {
        index = 0;
    } else {
        index++;
    }
    Show();
}
//nextBtn.onclick = () => {
//    if (index === 0) {
//        index = slides.length -1;
//    } else {
//        index--;
//    }
//    Show();
//}
function Show() {
    for(var i=0; i<slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}


// Animation for arrow


//document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('.header');
//    const nav = document.querySelector('.nav');
//    const scrollItems = document.querySelectorAll('.arrow');
//    
//    const scrollAnimation = () => {
//        let windowCenter = window.innerHeight + window.scrollY;
//        scrollItems.forEach(el => {
//            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
//            if (windowCenter >= scrollOffset) {
//                el.classList.add('arrow__animation');
//            } else {
//                el.classList.remove('arrow__animation');
//            }
//        });
//    };
//    
//    const headerFixed = () => {
//        let scrollTop = window.scrollY;
//        let navCenter = nav.offsetHeight / 2;
//        
//        if (scrollTop >= navCenter) {
//            nav.classList.add('fixed');
//            header.style.marginTop = `${nav.offsetHeight}px`;
//        } else {
//            nav.classList.remove('fixed');
//            header.style.marginTop = `0px`;
//        }
//    };
//    
//    
//    
//    window.addEventListener('scroll', () => {
//        
//    });
//}); 

// Open-modal

document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open");
    document.getElementById("body").classList.add("no__scroll");
});

document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open");
    document.getElementById("body").classList.remove("no__scroll");
});


// Portfolio slider

let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".portfolio__pagination",
        clickable: true,
      },
      navigation: {
          prevEl: ".portfolio__btn-prev",
          nextEl: ".portfolio__btn-next"
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      },
    });

// Scroll header

$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });
});




























