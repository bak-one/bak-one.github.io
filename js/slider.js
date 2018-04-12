var swiper = new Swiper('.swiper-container-portfolio', {
      slidesPerView: 4,
      spaceBetween: 50,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,

        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
var swiper2 = new Swiper('.swiper-container-person', {
      slidesPerView: 3,
      spaceBetween: 20,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      breakpoints: {
      

        900: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
 