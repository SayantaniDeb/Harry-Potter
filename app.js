document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'bellatrix',
        img: 'images/bellatrix.png'
      },
      {
        name: 'bellatrix',
        img: 'images/bellatrix.png'
      },
      {
        name: 'dobby',
        img: 'images/dobby.png'
      },
      {
        name: 'dobby',
        img: 'images/dobby.png'
      },
      {
        name: 'Dumbeldore',
        img: 'images/Dumbeldore.png'
      },
      {
        name: 'Dumbeldore',
        img: 'images/Dumbeldore.png'
      },
      {
        name: 'Hagrid',
        img: 'images/Hagrid.png'
      },
      {
        name: 'Hagrid',
        img: 'images/Hagrid.png'
      },
      {
        name: 'Harrypotter',
        img: 'images/Harrypotter.png'
      },
      {
        name: 'Harrypotter',
        img: 'images/Harrypotter.png'
      },
      {
        name: 'Hermoine',
        img: 'images/Hermoine.png'
      },
      {
        name: 'Hermoine',
        img: 'images/Hermoine.png'
      },
      {
        name: 'Malfoy',
        img: 'images/Malfoy.png'
      },
      {
        name: 'Malfoy',
        img: 'images/Malfoy.png'
      },
      {
        name: 'mcgonal',
        img: 'images/mcgonal.png'
      },
      {
        name: 'mcgonal',
        img: 'images/mcgonal.png'
      },
      {
        name: 'Ronald',
        img: 'images/Ronald.png'
      },
      {
        name: 'Ronald',
        img: 'images/Ronald.png'
      },
      {
        name: 'Voldermort',
        img: 'images/Voldermort.png'
      },
      {
        name: 'Voldermort',
        img: 'images/Voldermort.png'
      },
      {
        name: 'Snape',
        img: 'images/Snape.png'
      },
      {
        name: 'Snape',
        img: 'images/Snape.png'
      },
      {
        name: 'Sorting hat',
        img: 'images/Sorting hat.png'
      },
      {
        name: 'Sorting hat',
        img: 'images/Sorting hat.png'
      }

    ]

    cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})