function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
console.log(formatString("hello", true));
console.log(formatString("hello"));
console.log(formatString("hello", false));
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
//   Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (acc, curr) { return acc.concat(curr); }, []);
}
var result1 = concatenateArrays(["a", "b"], ["c"]);
var result2 = concatenateArrays([1, 2], [3, 4], [5]);
console.log(result1);
console.log(result2);
