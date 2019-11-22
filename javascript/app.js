const body = document.querySelector('body')
const login = document.querySelector('.login')
const log_in = document.querySelector('.log-in')
const exit = document.querySelector('.exit')

log_in.addEventListener('click', () => {
    body.style.overflowY = 'hidden'
    login.style.display = 'initial'
})
exit.addEventListener('click', () => {
    login.style.display = 'none'
    body.style.overflowY = 'scroll'
})
