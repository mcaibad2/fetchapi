window.onload = function () {
    return api.getRandomUsers().then(response => {
        const authors = document.getElementById('authors');
        response.results.map(user => {
            let img = this.document.createElement('img');
            img.src = user.picture.medium;
            authors.appendChild(img);
        })
    })
};