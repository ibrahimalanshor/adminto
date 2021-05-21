const alertDismiss = document.querySelectorAll('.alert-dismiss')

const removeAlert = function () {
  const alert = this.closest('.alert')

  alert.remove()
}

alertDismiss.forEach(alert => {
  const closeButton = alert.querySelector('.close')

  closeButton.onclick = removeAlert
})
