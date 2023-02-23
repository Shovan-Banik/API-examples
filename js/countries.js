const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountry(data))
}
const displayCountry=countries=>{
    const container=document.getElementById('country-container');
    countries.forEach(country => {
        console.log(country.flags.png);
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h1>Country name: ${country.name.common}</h1>
        <h4>Capital: ${country.capital?country.capital[0]:'No capital'}</h4>
        <h4>Continent: ${country.continents}</h4>
        <img src='${country.flags.png}'>
        `
        // <h4>Currency: ${country.currencies.name}</h4>
        container.appendChild(div);
    });

}
loadCountry();