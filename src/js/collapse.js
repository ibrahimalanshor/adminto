const toggleCollapses = document.querySelectorAll('.toggle-collapse')

const toggle = function () {
  const targetClass = document.querySelector(this.dataset.target).classList

  targetClass.toggle('hidden')
}

toggleCollapses.forEach(toggleCollapse => {
  toggleCollapse.onclick = toggle
})
