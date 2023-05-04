
















// Accessing Button elements 

const themeUl = document.querySelector('#ul-themes')
const blueButton = themeUl.children[0].children[0]
const redButton = themeUl.children[1].children[0]
const yellowButton = themeUl.children[2].children[0]


//Creating link element that will link the css filess
const linkElement = document.createElement('link')
linkElement.rel = "stylesheet"
document.firstElementChild.firstElementChild.append(linkElement)


function hideAll() {
    document.querySelector('#origin').style.display = 'none'
    document.querySelector('#red').style.display = 'none'
    document.querySelector('#yellow').style.display = 'none'
    document.querySelector('#blue').style.display = 'none'
}

//Setting Href of link element based on the clicked button

function toBlue() {

    linkElement.href = "/themeStyles/themeBlue.css"
    hideAll()
    document.querySelector('#blue').style.display = 'initial'
}
function toRed() {
    linkElement.href = "/themeStyles/themeRed.css"
    hideAll()
    document.querySelector('#red').style.display = 'initial'
}
function toYellow() {

    linkElement.href = "/themeStyles/themeYellow.css"
    hideAll()
    document.querySelector('#yellow').style.display = 'initial'

}

//Event listeners 

blueButton.addEventListener('click', toBlue)
redButton.addEventListener('click', toRed)
yellowButton.addEventListener('click', toYellow)


