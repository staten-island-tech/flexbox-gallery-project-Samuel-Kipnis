const cardButtonArray = document.querySelectorAll('.card-button')
console.log(cardButtonArray)

document.addEventListener('DOMContentLoaded', () => {
    for(let cardButton in cardButtonArray) {
        console.log(cardButtonArray[cardButton])
        cardButton.addEventListener('onclick', e => {
            console.log(cardButton)
        })
    }
})
