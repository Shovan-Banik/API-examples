const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}
const displayCountry=countries=>{
    const container=document.getElementById('country-container');
    countries.forEach(country => {
        console.log(country.cca2);
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h1>Country name: ${country.name.common}</h1>
        <h4>Capital: ${country.capital?country.capital[0]:'No capital'}</h4>
        <h4>Continent: ${country.continents}</h4>
        
        <button onclick="loadCountryDetails('${country.cca2}')">Flag </button>
        `
        // <img src='${country.flags.png}'><br></br>
        // <h4>Currency: ${country.currencies.name}</h4>
        container.appendChild(div);
    });

}
const loadCountryDetails=code=>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    // console.log(code);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountryDetails(data[0]))
}
const displayCountryDetails=country=>{
    const detailsContainer=document.getElementById('country-details');
    detailsContainer.innerHTML=`
    <h3>Name: ${country.name.common}</h3>
    <img src='${country.flags.png}'>
    `

}
loadCountry();