const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

function toggleNav(x) {
    x.classList.toggle("change");
  } 