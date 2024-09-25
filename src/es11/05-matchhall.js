const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, kiwi, Apple, orange, etc, ect';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}