const textJawa = document.querySelector('.text-jawa');
const inputJawa = document.querySelector('.jawa')

textJawa.innerHTML = `<aksara-jawa latin="sugeng rawuh" /> `

inputJawa.addEventListener('input', (e) => {
    let x = e.target.value
    textJawa.innerHTML = `<aksara-jawa latin="${x}" />`
})

console.log(textJawa)
