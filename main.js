const $ = document.getElementById.bind(document)

const $btn = $('btn-kick')
const $btnElectric = $('btn-kick-electric')
const FULLHP = 100

function createPerson(person, damageHP = FULLHP) {
    const $namePerson = $(`name-${person}`)

    return {
        name: $namePerson.innerText,
        defaultHP: 100,
        damageHP,
        elHP: $(`health-${person}`),
        elProgressbar: $(`progressbar-${person}`)
    }
}

const character = createPerson('character')
const enemy = createPerson('enemy')

function handleClick(btn, damage) {
    return btn.addEventListener('click', () => {
        changeHP(getRandomNumber(damage), character)
        changeHP(getRandomNumber(damage), enemy)
    })
}

handleClick($btn, 20)
handleClick($btnElectric, 40)

function init() {
    renderHP(character)
    renderHP(enemy)
}

function renderHP(person) {
    renderHPLife(person)
    renderProgressbarHP(person)
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%'
}

function changeHP(count, person) {
     if(person.damageHP < count){
         person.damageHP = 0
         alert('Бедный ' + person.name + ' проиграл!')
         $btn.disabled = true
         $btnElectric.disabled = true
     } else {
         person.damageHP -= count
     }
    renderHP(person)
}

function getRandomNumber(num) {
    return  Math.ceil(Math.random() * num)
}

init()