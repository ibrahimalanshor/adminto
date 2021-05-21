const dropdowns = document.querySelectorAll('.dropdown')

const openDropdown = function (e) {
  e.preventDefault()

  const dropdownMenuClass = this.nextElementSibling.classList

  dropdownMenuClass.toggle('block')
}

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle')

  toggle.onclick = openDropdown
})
