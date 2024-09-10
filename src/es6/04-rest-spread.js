// A rrays destructuring
let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring 
let user = { username: 'oscar', age: 34 };
let { username, age} = user;
console.log(username, user.age);

// spread operator 
let person = {name: 'oscra', age: 28};
let countery = 'MX';

let data = { id: 1, ...person, countery };
console.log(data);

/* export function solution(json1, json2) {
    // Tu código aquí 👈
     json1 = {
       name: "Mr. Michi",
       food: "Pescado",
     };
     json2 = {
       age: 12,
       color: "Blanco",
     };
     return solution = { ...json1, ...json2 };
   } */
   

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);