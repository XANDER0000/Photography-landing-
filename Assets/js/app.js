$(function() {
  /* Slider slick
  ========================================*/
  // slider photos and intro

  $("[data-slider]").slick ({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    fade: true,
    arrows: false,
    dots: true,
  });

  // slider videos
  $('.slider-for').slick ({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick ({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    prevArrow: btnprev,
    nextArrow: btnnext,

    responsive: [
        {
           breakpoint: 768,
           settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           }
        }
     ]
  });
});

  /* Videos
  ========================================*/

  var videos  = $(".videos1__content-video");

    videos.on("click", function(){
            var elm = $(this),
                conts   = elm.contents(),
                le      = conts.length,
                ifr     = null;

            for(var i = 0; i<le; i++){
              if(conts[i].nodeType == 8) ifr = conts[i].textContent;
            }

            elm.addClass("player").html(ifr);
            elm.off("click");
        });


  /* MODAL
  ========================================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');

      $(modalId).addClass('show');
      $("body").addClass('no-scroll');

      setTimeout(function() {
          $(modalId).find(".modal__dialog").css ({
              transform: "rotateY(0)"
          });
      }, 60);

  });

  modalClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

      modalParent.find(".modal__dialog").css ({
          transform: "rotateY(90deg)"
      });

      setTimeout(function() {
          modalParent.removeClass('show');
          $("body").removeClass('no-scroll');
      }, 200);
  });

  $(".modal").on("click", function(event) {
      let $this = $(this);

      $this.find(".modal__dialog").css ({
          transform: "rotateY(90deg)"
      });

      setTimeout(function() {
          $this.removeClass('show');
          $("body").removeClass('no-scroll');
      }, 200);
  });

  $(".modal__dialog").on("click", function(event) {
      event.stopPropagation();
  });


  /* Smooth Scroll =========================*/

  $("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");

      $("html, body").animate ({
          scrollTop: elementOffset - 60
      }, 600);
  });

/* Smooth Scroll =========================*/
    const header = document.querySelector('.header');
    const first = document.querySelector('.intro');
    const headerHeight = header.offsetHeight;
    const firstHeight = first.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance > lastScrollTop) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	} else {
		header.classList.add('header--fixed');
		first.style.marginTop = `${headerHeight}px`;
	}

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
		first.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});

  /* Nav Toggle =========================*/

  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function(event) {
      event.preventDefault();

      nav.toggleClass("show");
  });
