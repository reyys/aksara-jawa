
const textJawa = document.querySelector('.text-jawa');
const inputJawa = document.querySelector('.jawa')
const copyBtn = document.querySelector('.copy')
const copiedText = document.querySelector('.copied')

textJawa.innerHTML = `<aksara-jawa latin="saksi mata"/>`

inputJawa.addEventListener('input', (e) => {
    let x = e.target.value
    textJawa.innerHTML = `<aksara-jawa latin="${x}"/>`
})

// copyBtn.addEventListener('click', () => {
//     textJawa.select();
//     document.execCommand("copy")
//     copiedText.classList.add('active')
//     setTimeout(() => {
//         copiedText.classList.remove('active')
//     }, 500)
// })