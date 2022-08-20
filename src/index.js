import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
    input:  document.querySelector("input#search-box"),
    countryInfo: document.querySelector(".country-info"),
    countryList: document.querySelector(".country-list"),
};

refs.input.addEventListener("input", onSearch);

function onSearch(e) {
    // const searchQuery = e.currentTarget.elements.query.value;
    console.log(e.data);
}