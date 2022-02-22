
const loadQoutes = () => {

    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayKanyeQoutes(data));
}

loadQoutes();



const displayKanyeQoutes = qoutes => {
    const blockqoutes = document.getElementById('qoutes');
    blockqoutes.innerText = qoutes.quote;
    
}