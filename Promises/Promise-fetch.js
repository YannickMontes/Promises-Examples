const fetch = require('node-fetch');

const promise = fetch('https://jsonplaceholder.typicode.com/todos/5');

console.log('🍙 Traitement synchrone 1');

promise
  .then(response => response.json())
  .then(user => console.log('☃️ Traitement 2', user.title));


console.log('🥔 Traitement synchrone 3');