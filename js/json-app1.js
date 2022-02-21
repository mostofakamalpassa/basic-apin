function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}


function loadUsers(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data));
}

function loadPosts(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));
}


function displayUser(data){
   
    const ul = document.getElementById('ul');
    for(let i = 0; i< data.length; i++){
       // console.log(data[i]);
       let li = document.createElement('li');
       li.innerText = `name: ${data[i].name} emal: ${data[i].email} `;

       ul.appendChild(li);
    }
}