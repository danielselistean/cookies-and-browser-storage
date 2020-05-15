localStorage.setItem('fullName', 'Daniel Selistean');
const language = localStorage.getItem('fullName'); //local storage value
console.log(language);

function setLanguage() {
    const radioButtons = document.getElementsByName('language'); // list of radio buttons
    const language = localStorage.getItem('language');


    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].value === language) {
            radioButtons[i].checked = "checked";
        }
        radioButtons[i].addEventListener('click', (event) => {
            localStorage.setItem('language', `${event.target.value}`)
        })
    }
    console.log(localStorage);
}

setLanguage();



