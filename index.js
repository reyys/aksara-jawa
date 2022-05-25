import { toJavanese } from "./node_modules/carakanjs/dist/esm/index.js";

const textJawa = document.querySelector('.text-jawa');
const inputJawa = document.querySelector('.jawa')
const copyBtn = document.querySelector('.copy')
const copiedText = document.querySelector('.copied')

textJawa.innerHTML = toJavanese('sugeng rawuh')

inputJawa.addEventListener('input', (e) => {
    let x = e.target.value
    textJawa.innerHTML = toJavanese(x)
})

copyBtn.addEventListener('click', () => {
    textJawa.select();
    document.execCommand("copy")
    copiedText.classList.add('active')
    setTimeout(() => {
        copiedText.classList.remove('active')
    }, 500)
})