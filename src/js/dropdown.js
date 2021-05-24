const dropdowns = document.querySelectorAll('.dropdown')

const openDropdown = function (e) {
  e.preventDefault()

  const dropdownMenuClass = this.nextElementSibling.classList

  dropdownMenuClass.toggle('block')
}

const outsideClick = (target, dropdown, toggle) => {
  if (!dropdown.contains(target) && target !== toggle) {
    dropdown.querySelector('.dropdown-menu').classList.remove('block')
  }
}

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle')

  window.addEventListener('click', e => {
    outsideClick(e.target, dropdown, toggle)
  })

  toggle.onclick = openDropdown
})
