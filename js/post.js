

function loadPostData(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPostData(data))
}

function displayPostData(posts){
    const postContainer = document.getElementById('section-container');

    for(const post of posts){
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${post.title}</h3>
            <p> ${post.body} </p>
        `;


        div.classList.add('post')
        postContainer.appendChild(div);

    }
    console.log(posts);
}

loadPostData();