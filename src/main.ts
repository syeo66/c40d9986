import "@fontsource/ibm-plex-mono/500.css"
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="bg">
</div>
<div class="main">
<h1>c40d9986</h1>
</div>
`

function randomHexCharacter() {
  return Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()
}

function setRandomStrings() {
  document.querySelector<HTMLDivElement>('.bg')!.innerText = Array(12000).fill("").map(() => randomHexCharacter()).join('')
}

setRandomStrings()

setInterval(setRandomStrings, 500)
