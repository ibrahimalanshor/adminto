const inputFiles = document.querySelectorAll('.file-input')

const selectFile = function () {
  let fileName = this.files[0].name

  fileName = fileName.length >= 30 ? `${fileName.substr(0, 27)}...` : fileName

  this.previousElementSibling.querySelector('.file-input-upload').innerHTML = fileName
}

inputFiles.forEach(input => {
  input.onchange = selectFile
})
