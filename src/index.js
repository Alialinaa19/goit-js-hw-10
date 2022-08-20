import './css/styles.css';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
    input:  document.querySelector("input#search-box"),
    countryInfo: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
};

refs.input.addEventListener("input", onSearch);

function onSearch(e) {
    const countryName = e.currentTarget.value;
    fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((data) => {console.log(data)
    if(data.length > 10) {
        Notiflix.Notify.info(
            "Too many matches found. Please enter a more specific name."
          );
    }
    else if(data.length > 1 || data.length < 9) {

    }
    else {

    }
    })
    .catch((error) =>{
        Notiflix.Notify.failure(
            "Oops, there is no country with that name"
          );
    }

}