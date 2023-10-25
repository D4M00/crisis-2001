const swiper = new Swiper('.swiperGod', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    autoplay: {
        delay: 3000,
      },

    
  });

  const swiperDog = new Swiper('.swiperDog', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    
  });

