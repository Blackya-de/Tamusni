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

    if(boxTop < triggerBottom) {
        box.classList.add('show')
    } else {
        box.classList.remove('show')
    }
  })
}


const hamburger = document.querySelector('.hamburger');
const nav_bar_menu = document.querySelector('.nav-bar-menu');
const lines = document.querySelectorAll('.line');

hamburger.addEventListener('click', ()=>{
  nav_bar_menu.classList.toggle("open");
  lines.forEach(line => {
    line.classList.toggle("open");
  });
})
