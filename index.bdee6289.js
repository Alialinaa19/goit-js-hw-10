[document.querySelector("input#search-box"),document.querySelector(".country-info"),document.querySelector(".country-list")][0].addEventListener("input",(function(e){var t=e.currentTarget.value;fetch("https://restcountries.com/v2/name/".concat(t)).then((function(e){return e.json()})).then((function(e){return console.log(e)}))}));
//# sourceMappingURL=index.bdee6289.js.map
