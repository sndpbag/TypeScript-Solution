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