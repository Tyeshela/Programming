const url = 'https://restcountries.com/v3.1/name';

const form = document.querySelector('form')
const userInput = document.querySelector('form input');

const countryName = document.querySelector('#country-name');
const countryPopulation = document.querySelector('#country-population');
const countryContinent = document.querySelector('#country-continent');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const userValue = userInput.value;

    fetch(url + `/${userValue}`).then(function(response){
        return response.json();
    }).then(function(countryObj){
        console.log(countryObj)
    });
});