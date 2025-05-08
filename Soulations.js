function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
console.log(formatString("hello", true));
console.log(formatString("hello"));
console.log(formatString("hello", false));
