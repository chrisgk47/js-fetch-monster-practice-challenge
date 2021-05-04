
const monUrl = 'http://localhost:3000/monsters?_limit=50&_page=1'

const monsterCont = document.querySelector("#monster-container")

fetch(monUrl)
.then(res => res.json())
.then(monstersArr => {
    monstersArr.forEach(monster => renderCard(monster))
})

function renderCard(monster) {
    let monCard = document.createElement('div')
    monCard.classname = 'mon-card'
    monCard.dataset.id = monster.id
    
    let monH2 = document.createElement('h2')
    monH2.innerText = monster.name
    
    let monH4 = document.createElement('h4')
    monH4.innerText = monster.age
    
    let monPar = document.createElement('p')
    monPar.innerText = monster.description
    
    monCard.append(monH2, monH4, monPar)
    monsterCont.append(monCard)
}

