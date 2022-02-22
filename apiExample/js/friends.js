const loadFriends = () => {

    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayFriends(data));
}

loadFriends();

const displayFriends = datas => {
   
    const users = document.getElementById('users');
    const dataResult = datas.results;
    for(let i =0; i< dataResult.length; i++){
      
        const div = document.createElement('div');
        div.innerHTML = `
           <h2>User Name: ${dataResult[i].name.title} ${dataResult[i].name.first} ${dataResult[i].name.last} </h2>
           <img src="${dataResult[i].picture.thumbnail}"/>
        `;

        users.appendChild(div);
        console.log(dataResult[i]);
    }


    //console.log(datas.results);
}