function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}

console.log(formatString("hello", true));
console.log(formatString("hello"));
console.log(formatString("hello", false));



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

console.log(filterByRating(books));


//   Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

const result1 = concatenateArrays(["a", "b"], ["c"]);
const result2 = concatenateArrays([1, 2], [3, 4], [5]);
console.log(result1);
console.log(result2);

//  Create a Vehicle class with private make and year properties and a getInfo() method.
//Create a Car class extending Vehicle, adding a private model property and a getModel() method.

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(): string {
        return `Model: ${this.model}`;
    }
}

// Example usage:
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());


//   Description: Write a function that takes a string | number and returns:
//The length if it's a string
//The number multiplied by 2 if it's a number

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}

console.log(processValue("Hello"));
console.log(processValue(10));




//  Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((mostExpensive, currentProduct) => {
        return currentProduct.price > mostExpensive.price ? currentProduct : mostExpensive;
    });
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const emptyProducts: Product[] = [];

console.log(getMostExpensiveProduct(products));
console.log(getMostExpensiveProduct(emptyProducts));


//Define an enum Day for the days of the week.
//Create a function that returns "Weekday" or "Weekend" based on the input day.

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
}

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Saturday));
console.log(getDayType(Day.Sunday));




