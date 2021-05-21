const modalToggles = document.querySelectorAll('.modal-toggle')
const modals = document.querySelectorAll('.modal')

const toggleModal = function (e) {
  e.preventDefault()

  const targetClass = document.querySelector(this.dataset.target).classList

  targetClass.toggle('flex')
}

const closeModal = function (e) {
  e.preventDefault()

  const modalClass = this.closest('.modal').classList

  modalClass.remove('flex')
}

modalToggles.forEach(modalToggle => {
  modalToggle.onclick = toggleModal
})

modals.forEach(modal => {
  const modalCloses = modal.querySelectorAll('.modal-close')

  modalCloses.forEach(modalClose => {
    modalClose.onclick = closeModal
  })
})
