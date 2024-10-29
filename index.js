// index.js
var items = [1, "2", 3, "four", 5, null, undefined, 6];
const results = [];

// Verwendung forEach anstelle von foreach
items.forEach((item) => {
    if (typeof item === 'number') {
        if (item % 2 === 0) {
            results.push(item * 2);
        }
    } else if (item === null) {
        console.log("Found a null item");
    } else {
        // Korrekture result zu results
        results.push(parseInt(item));
    }
});

console.log("Original items:", items);
console.log("Filtered and transformed items:", results);
console.log("Hello world");

