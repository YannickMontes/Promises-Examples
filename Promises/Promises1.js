console.log('🍙 Traitement synchrone 1');

setTimeout(() => console.log('🥐 Timeout 2', 0));

Promise.resolve().then(() => console.log('🍿 Promise 3'))

console.log('🥔 Traitement synchrone 4');