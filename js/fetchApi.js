const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(user => {
        console.log(`User name: ${user.name}`);
        console.log(`User email: ${user.email}`);
    })
    .catch(error => console.error(`Error in request: ${error.message}`));