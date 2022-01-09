let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImage = 'dice' + randomNumber1 + '.png'
let randomImageFolder = 'images/' + randomImage
document.querySelectorAll('img')[0].setAttribute('src', randomImageFolder)


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage2 = 'dice' + randomNumber2 + '.png'
let randomImageFolder2 = 'images/' + randomImage2
document.querySelectorAll('img')[1].setAttribute('src', randomImageFolder2)

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'PLAYER 1 WINS'
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').innerHTML = 'PLAYER 2 WINS';
} else {
    document.querySelector('h1').innerHTML='DRAW!';
}