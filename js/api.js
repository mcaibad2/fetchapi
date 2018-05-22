var api = (function() { 
    const url = 'https://randomuser.me/api/?results=10';

    function getRandomUsers() {
        return fetch(url)
        .then((resp) => resp.json())
        .catch(function(error) {
          console.log(JSON.stringify(error));
        });   
    }
  
    return {
       getRandomUsers: getRandomUsers
    };
 }());