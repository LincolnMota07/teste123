const swiper = new Swiper('.swiper', {
    
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      1728: {
        slidesPerView: 3,
        spaceBetween: 100
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
     
    },
    loop: true,

  });

  document.getElementById('playPauseBtn').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    if (video.paused) {
      video.play();
      this.innerHTML = 'Pause';
    } else {
      video.pause();
      this.innerHTML = 'Play';
    }
  });



  



