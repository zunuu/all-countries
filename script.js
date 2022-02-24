const fetchCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
fetchCountries()


const displayCountries = (countries) => {
    const htmlCountryDiv = document.getElementById('countries');
    for (const eachCountry of countries) {
        const eachCountryDiv = document.createElement('div')
        let eachCountryInnerText = document.createElement('h3')
        let eachCountryDetails = document.createElement('p')
        eachCountryInnerText.innerText = eachCountry.name;
        eachCountryDetails.innerHTML = `<strong>Capital: ${eachCountry.capital}</strong> <h5>Region:${eachCountry.region}</h5> <h5>subregion: ${eachCountry.subregion}</h5>`
        console.log(eachCountryDetails)
        eachCountryDiv.appendChild(eachCountryInnerText);
        eachCountryDiv.appendChild(eachCountryDetails);
        htmlCountryDiv.appendChild(eachCountryDiv)
        eachCountryDiv.classList.add('classCountries')
    }

}