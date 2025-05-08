var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//  Create a Vehicle class with private make and year properties and a getInfo() method.
//Create a Car class extending Vehicle, adding a private model property and a getModel() method.
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Make: ".concat(this.make, ", Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this.model);
    };
    return Car;
}(Vehicle));
// Example usage:
var myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
//   Description: Write a function that takes a string | number and returns:
//The length if it's a string
//The number multiplied by 2 if it's a number
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue("Hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce(function (mostExpensive, currentProduct) {
        return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    });
}
var products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
var emptyProducts = [];
console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct(emptyProducts));
//Define an enum Day for the days of the week.
//Create a function that returns "Weekday" or "Weekend" based on the input day.
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Sunday));
