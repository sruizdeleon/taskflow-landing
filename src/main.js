import './style.css'

const toggle = document.getElementById('theme-toggle')

if (toggle) {
  const setToggleIcon = () => {
    const isDark = document.documentElement.classList.contains('dark')
    toggle.textContent = isDark ? '☀️' : '🌙'
  }

  setToggleIcon()

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
    setToggleIcon()
  })
}
