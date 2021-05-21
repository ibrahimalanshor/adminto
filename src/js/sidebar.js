const navbarToggle = document.querySelector('.navbar-toggle')
const sidebarClass = document.querySelector('.sidebar').classList

navbarToggle.onclick = function () {
  const iconCLass = this.querySelector('i').classList

  sidebarClass.toggle('block')

  if (sidebarClass.contains('open')) {
    iconCLass.remove('fa-times')
    iconCLass.add('fa-bars')
  } else {
    iconCLass.remove('fa-bars')
    iconCLass.add('fa-times')
  }

  sidebarClass.toggle('open')
}
