// using anonymous functions
let rect = {
 perimeter: function(l, b) {
 return 2 * (l + b);
 },
 area: function(l, b) {
 return l * b;
 }
};
console.log(rect.perimeter(4, 6));
console.log(rect.area(4, 6));
// using arrow functions (Newer versions)
let rect = {
 perimeter: (l, b) => 2 * (l + b),
 area: (l, b) => l * b
};
console.log(rect.area(4, 6)); // 24
console.log(rect.perimeter(4, 6)); // 20
