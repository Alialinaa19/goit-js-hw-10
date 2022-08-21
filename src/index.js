// import './css/styles.css';
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';
// import { fetchCountries } from './js/fetchCountries';

// const DEBOUNCE_DELAY = 300;
// const refs = {
//     input:  document.querySelector("input#search-box"),
//     countryInfo: document.querySelector(".country-info"),
//     countryList: document.querySelector(".country-list"),
// };

// refs.input.addEventListener("input", onSearch)

// function onSearch(e) {
//     debounce(e => {
//     cleanHtml();
//     const countryName = input.value.trim();
//     if (countryName !== '') {
//         fetchCountries(trimmedValue).then(foundData => {  

//     fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=,name,capital,population,flags,languages`)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     if(data.length > 10) {
//         Notiflix.Notify.info(
//             "Too many matches found. Please enter a more specific name."
//           );
//     }
//     else if(data.length > 1 || data.length < 9) {
//         insertContent(data)
//     }
//     else if (data.length === 0) {
//         Notiflix.Notify.failure('Oops, there is no country with that name');}
//     else {

// }
// })
//     .catch((error) =>{
//         console.log(error) 
//     }
//     )
// }, DEBOUNCE_DELAY)
// }

// function createLi(item) {
// `<li>
// <img src = "${item.flag}" alt ="flag of ${item.name}" >
// <p>${item.name}</p>
// </li>`
// } 

// function generateContent(array) {array.reduce((acc, item) => acc + createLi(item), "")};

// const insertContent = (array) => {
// const result = generateContent(array);
// refs.countryList.insertAdjacentHTML("beforeend", result)
// }

// function cleanHtml() {
//     refs.countryList.innerHTML = '';
//     refs.countryInfo.innerHTML = '';
//   }
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

input.addEventListener(
    'input',
    _.debounce(e => {
        const trimmedValue = input.value.trim();
           cleanHtml();   
      if (trimmedValue !== '') {
          fetchCountries(trimmedValue).then(foundData => {      
  
          if (foundData.length > 10) {
            Notiflix.Notify.info(
              'Too many matches found. Please enter a more specific name.'
            );
          } else if (foundData.length === 0) {
            Notiflix.Notify.failure('Oops, there is no country with that name');
          } else if (foundData.length >= 2 && foundData.length <= 10) {
           
            renderCountryList(foundData);
          } else if (foundData.length === 1) {
      
            renderOneCountry(foundData);
          }
        });
      }
    }, DEBOUNCE_DELAY)
  );

function renderCountryList(countries) {
  const markup = countries
    .map(country => {
      return `<li>
      <img src="${country.flags.svg}" alt="Flag of ${
        country.name.official
      }" width="30" hight="20">
         <b>${country.name.official}</p>
                </li>`;
    })
    .join('');
  countryList.innerHTML = markup;
}

function renderOneCountry(countries) {
      const markup = countries
        .map(country => {
          return `<li>
      <img src="${country.flags.svg}" alt="Flag of ${
            country.name.official
          }" width="30" hight="20">
         <b>${country.name.official}</b></p>
            <p><b>Capital</b>: ${country.capital}</p>
            <p><b>Population</b>: ${country.population}</p>
            <p><b>Languages</b>: ${Object.values(country.languages)} </p>
                </li>`;
        })
        .join('');
      countryList.innerHTML = markup;
}

function cleanHtml() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}