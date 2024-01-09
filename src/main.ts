import "@fontsource/ibm-plex-mono/500.css"
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="bg">
</div>
<h1>c40d9986</h1>
`

function randomHexCharacter() {
  return Math.floor(Math.random() * 16).toString(16).padStart(2, '0')
}

function setRandomStrings() {
  document.querySelector<HTMLDivElement>('.bg')!.innerText = Array(9000).fill("").map(() => randomHexCharacter()).join('') 
}

setRandomStrings()

setInterval(setRandomStrings, 500)
