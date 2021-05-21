const sidebarMenus = document.querySelectorAll('.sidebar-menu.has-child')

const toggleSidebar = function (e) {
  e.preventDefault()

  const sidebarCaretClass = this.querySelector('.sidebar-caret').classList

  if (this.classList.contains('open')) {
    sidebarCaretClass.remove('fa-caret-down')
    sidebarCaretClass.add('fa-caret-right')
  } else {
    sidebarCaretClass.add('fa-caret-down')
    sidebarCaretClass.remove('fa-caret-right')
  }

  this.classList.toggle('open')
}

const openSidebar = sidebar => {
  const sidebarCaretClass = sidebar.querySelector('.sidebar-caret').classList

  if (sidebar.classList.contains('open')) {
    sidebarCaretClass.add('fa-caret-down')
    sidebarCaretClass.remove('fa-caret-right')
    sidebar.classList.add('open')
  }
}

sidebarMenus.forEach(sidebarMenu => {
  sidebarMenu.onclick = toggleSidebar

  openSidebar(sidebarMenu)
})
