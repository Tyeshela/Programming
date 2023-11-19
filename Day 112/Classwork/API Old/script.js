const url = 'https://restcountries.com/v3.1/name'

const form = document.querySelector('form')
const submitBtn = document.querySelector('form button')
const userInput = document.querySelector('form input')
const countryName = document.querySelector('#country-name')
const countryPopulation = document.querySelector('#country-population')
const countryContinent = document.querySelector('#country-continent')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const userValue = userInput.value;

    const request = new XMLHttpRequest()
    request.open('GET',url + `/${userValue}`)
    request.send();

    request.addEventListener('load',function(){
        const [countryObj] = JSON.parse(this.responseText);

        console.log(countryObj)
        countryName.textContent = countryObj.name.official;
        countryPopulation.textContent = countryObj.population;
        countryContinent.textContent = countryObj.continents[0];
    })
})