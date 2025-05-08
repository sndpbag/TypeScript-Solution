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
