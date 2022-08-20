({input:document.querySelector("input#search-box"),countryInfo:document.querySelector(".country-info"),countryList:document.querySelector(".country-list")}).input.addEventListener("input",(function(t){const e=t.currentTarget.value;fetch(`https://restcountries.com/v2/name/${e}`).then((t=>t.json())).then((t=>console.log(t)))}));
//# sourceMappingURL=index.1d4e97b2.js.map
