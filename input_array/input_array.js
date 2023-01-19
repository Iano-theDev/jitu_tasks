#!/usr/bin/node
const inputWord = document.getElementById("textbox");
const addButton = document.getElementById('add_button')
const wordsList = document.getElementById('words_list')

addButton.addEventListener('click',() => {
    let wordArray = [];
    // let newArray = wordArray.unshift(inputWord)
    console.log(inputWord.value)
    wordsList.innerHTML += `<li>${inputWord.value}</li>`;

})

