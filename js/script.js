const textEl = document.getElementById('text')
const logoTxt = document.getElementById('logo')
const text = 'Tamusni'

let idx = 1
let speed = 300

writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  setTimeout(writeText, speed)
}

const boxes = document.querySelectorAll('.semestre-r,.semestre-l')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}


const hamburger = document.querySelector('.hamburger');
const nav_bar_menu = document.querySelector('.nav-bar-menu');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', () => {
  nav_bar_menu.classList.toggle("open");
  lines.forEach(line => {
    line.classList.toggle("open");
  });
})


/*-----------------------------swiper-initialized-------------------------*/
var mySwiper = new Swiper('.swiper-container', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


})


/*---------------------------------- JQuery nav links to scroll down ----------------------------------*/
$('.js--scroll-to-contribution').click(function () {
  $('html, body').animate({ scrollTop: $('.contribution').offset().top }, 1000);
})


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });






