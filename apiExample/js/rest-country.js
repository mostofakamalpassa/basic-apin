
const loadReastCountry = () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayRestCountry(data))
    .catch(error => alert('Something went wrong'))
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
         countryId.appendChild(div);
        console.log(country);
    });
   
   // console.log(datas);
}