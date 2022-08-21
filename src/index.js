import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash';

const DEBOUNCE_DELAY = 300;
const refs = {
    input:  document.querySelector("input#search-box"),
    countryInfo: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
};

refs.input.addEventListener("input", onSearch)

function onSearch(e) {
    cleanHtml();
    const countryName = e.currentTarget.value.trim();
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=,name,capital,population,flags,languages`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    if(data.length > 10) {
        Notiflix.Notify.info(
            "Too many matches found. Please enter a more specific name."
          );
    }
    else if(data.length > 1 || data.length < 9) {
        insertContent(data)
    }
    else if (data.length === 0) {
        Notiflix.Notify.failure('Oops, there is no country with that name');}
    else {

}
})
    .catch((error) =>{
        console.log(error)
        
    }
    )
}

function createLi(item) {
`<li>
<img src = "${item.flag}" alt ="flag of ${item.name}" >
<p>${item.name}</p>
</li>`
} 

function generateContent(array) {array.reduce((acc, item) => acc + createLi(item), "")};

const insertContent = (array) => {
const result = generateContent(array);
refs.countryList.insertAdjacentHTML("beforeend", result)
}

function cleanHtml() {
    refs.countryList.innerHTML = 'vddsd';
    refs.countryInfo.innerHTML = '';
  }