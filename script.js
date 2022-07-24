const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) )
}


const displayCountries = countries => {
    console.log(countries);
    const container = document.getElementById('countries');
    const countryHtml = countries.map(country => getCountryHtml(country) );
    container.innerHTML = (countryHtml.join(' '));
    console.log(countryHtml);
}

const getCountryHtml = country => {
    return `
          <div class="country">
                <h2>${country.name.official}</h2>
                <h4>Capital : ${country.capital}</h4>
                <img src="${country.flags.png}"/> <br/>
                <h4>Region : "${country.region}"</h4>
          </div>
    `
}

loadCountries();