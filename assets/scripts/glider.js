  window.addEventListener('load', function(){
    new Glider(document.querySelector('.carouselList'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carouselIndicate',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
})