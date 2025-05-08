function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }
    return input.toUpperCase();
  }

  console.log(formatString("hello",true));
  console.log(formatString("hello"));
  console.log(formatString("hello",false));



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
  