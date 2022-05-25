const textJawa = document.querySelector('.text-jawa');
const inputJawa = document.querySelector('.jawa')
let html = "<p>My new paragraph.</p>";

textJawa.innerHTML = `<aksara-jawa latin="sugeng rawuh" /> `

inputJawa.addEventListener('input', (e) => {
    let x = e.target.value
    textJawa.innerHTML = `<aksara-jawa latin="${x}" />`
})


