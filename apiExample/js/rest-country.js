
const loadReastCountry = () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayRestCountry(data))
   // .catch(error => alert('Something went wrong'))
}

loadReastCountry();

const displayRestCountry = datas => {


    // for(const data of datas){
    //     console.log(data);
    // }
    const countryId = document.getElementById('country');
   
    datas.forEach(country => {

        const div = document.createElement('div');

        const h2 = document.createElement('h2');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const img = document.createElement('img');

        const createButton = document.createElement('button');
        createButton.setAttribute('onclick',`displayCountryInfromation('${country.name.common}')`);
        createButton.innerText = 'Deatils';

       // const imgAttributes = document.createAttribute('src');

            //img.setAttribute(imgAttributes,country.flags.png) ;

            img.setAttribute('src',country.flags.png)

         div.classList.add('country');
         h2.innerText = 'Country Name : '+ country.name.common;
        h4.innerText = 'Capital : '+country.capital;
        // p.innerText = 'Language : '+ country.languages.eng

        
         div.appendChild(h2);
         div.appendChild(h4);
         div.appendChild(p);
         div.appendChild(img);
        div.appendChild(createButton);
         countryId.appendChild(div);
      //  console.log(country);
    });
   
   // console.log(datas);
}




const displayCountryInfromation = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    //console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}


const displayCountryDetails = country => {
    const detaitls = document.getElementById('country-details');

    detaitls.style.background = 'blue';
    detaitls.style.fontSize = '25px';
    detaitls.style.border = '2px solid red';
    detaitls.innerHTML = `
        <h2>Countr Name: ${country.name.common} </h2>
        <p>City: ${country.capital[0]}</p>
        <p>population: ${country.population} </p>
    `;
    
    console.log(country);
}