function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderby=nome")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }

        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufID = event.target.value
    stateInput.value = event.target.options[event.target.selectedIndex].text
    console.log(event.target.value)
    citySelect.innerHTML = "<Option Value>Selecione a Cidade</Option>"
    citySelect.disabled = true
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufID}/municipios?orderby=nome`)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false

        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

const itemsToCollect = document.querySelectorAll(".items-grid li")
for (let item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(item => item == itemId)
    if (alreadySelected != -1) {
        const filteredItems = selectedItems.filter(item => item != itemId)
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}