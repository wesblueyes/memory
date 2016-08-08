  const init = () => {// cards16 is an array of all the images
  let cards16 = ["<img src='images/photo1.jpg'>", "<img src='images/photo2.jpg'>", "<img src='images/photo3.jpg'>", "<img src='images/photo4.jpg'>", "<img src='images/photo5.jpg'>", "<img src='images/photo6.jpg'>", "<img src='images/photo7.jpg'>", "<img src='images/photo8.jpg'>", "<img src='images/photo1.jpg'>", "<img src='images/photo2.jpg'>", "<img src='images/photo3.jpg'>", "<img src='images/photo4.jpg'>", "<img src='images/photo5.jpg'>", "<img src='images/photo6.jpg'>", "<img src='images/photo7.jpg'>", "<img src='images/photo8.jpg'>"]
  const getNumbers = () => {
    let player1 = []
    cards16.sort(function () {
      return Math.random()
    })
    let cardContainer = document.getElementById('cardContainer')
    for (let i = 0; i <= 15; i++) {
      player1.push(cards16[i])
      let div = document.createElement('div')
      div.className = 'card'
      div.innerHTML = "<img src='images/default.jpg'>"
      cardContainer.appendChild(div)
      div.addEventListener('click', function (event) {
        div.innerHTML = cards16[i]
        cardContainer.clicks = (cardContainer.clicks || 0) + 1
        console.log(div.innerHTML)
        /*if (cardContainer.clicks % 2 === 0) {
          // Get last two objects and compare
          let even = div.innerHTML
          cardArray.push(even)
        } else {
          let odd = div.innerHTMl
          cardArray.push(odd)
        }
        console.log(cardArray)
        /*if (odd = even) {
          console.log("Match!")
        } else {
          console.log("Not a Match!")
        }*/
      })
    }
}
  getNumbers()
}
document.addEventListener('DOMContentLoaded', init)
