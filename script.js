//Print odd numbers in an array using anonymous function ?
console.log("Print odd numbers in an array using anonymous function ?");
const OddNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
OddNumbers(numbers);

//Print odd numbers in an array using IIFE ?
console.log("Print odd numbers in an array using IIFE function ?");
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([11, 34, 35, 66, 78, 96, 13, 47]);

//Print odd numbers in an array usingArrow function?
console.log("Print odd numbers in an array usingArrow function?");
const oddNumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

oddNumbers([1, 2, 4, 5, 6, 7]);

//Convert all the strings to title caps in a string arrayz using anonymous function ?
console.log(
  "Convert all the strings to title caps in a string array using anonymous function ?"
);
animal = ["cat", "dog", "fish"];
const cap = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(animal);
console.log(cap);

//Convert all the strings to title caps in a string array using IIFE
console.log(
  "Convert all the strings to title caps in a string array using IIFE ?"
);
const caps = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(["ragul", "ram", "ragu"]);

console.log(caps);

//Convert all the strings to title caps in a string array using arrow function
console.log(
  "Convert all the strings to title caps in a string array using arrow function?"
);
const capes = ((arr) =>
  arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)))([
  "ball",
  "bat",
  "catch",
]);

console.log(capes);

// Sum of all numbers in an array using anonymous function ?

console.log("Sum of all numbers in an array using anonymous function ?");
const ii = [1, 2, 7];

const sum = (function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(ii);

console.log(sum);

// Sum of all numbers in an array using IIFE function ?
console.log("Sum of all numbers in an array using IIFE function ?");
const nume = [1, 8, 5];

const sume = (function () {
  let total = 0;
  for (let i = 0; i < nume.length; i++) {
    total += nume[i];
  }
  return total;
})();

console.log(sume);
//Sum of all numbers in an array using arrow function?
console.log("Sum of all numbers in an array using arrow function ?");
const cc = [1, 5];

const bb = (() => {
  let total = 0;
  for (let i = 0; i < cc.length; i++) {
    total += cc[i];
  }
  return total;
})(cc);

console.log(bb);

//Return all the prime numbers in an array  in anonymous function
console.log("Return all the prime numbers in an array in anonymous function?");

const samp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function (arr) {
  const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
})(samp);

console.log(primeNumbers);

////Return all the prime numbers in an array  in ARROW FUNCTION
console.log("Return all the prime numbers in an array  in ARROW FUNCTION");
const sampe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const primeNumber = ((arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
})(sampe);

console.log(primeNumber);

//Return all the palindromes in an array using anonymous function
console.log(
  "Return all the palindromes in an array using anonymous function ?"
);
const pal = [121, 123, 1331, 555, 987, 1221, 45654];

const palindromeNumbers = (arr) => {
  return arr.reduce((result, number) => {
    const strNumber = number.toString();
    const reversedNumber = strNumber.split("").reverse().join("");

    return strNumber === reversedNumber ? [...result, number] : result;
  }, []);
};

console.log(palindromeNumbers(pal));

//Return all the palindromes in an array using IIFE function
console.log("Return all the palindromes in an array using IIFE function ?");

const pals = [232, 434, 56765, 9009, 89098];

const palindromeNumberss = (() => {
  return (arr) => {
    return arr.filter((number) => {
      const strNumber = number.toString();
      const reversedNumber = strNumber.split("").reverse().join("");

      return strNumber === reversedNumber;
    });
  };
})();

console.log(palindromeNumbers(pals));

//Return all the palindromes in an array using arrow function
console.log("Return all the palindromes in an array using arrow function ?");
const palss = [323, 67076, 181, 17071, 4567];
const palindromeNumbersss = ((arr) =>
  arr.filter((number) => {
    const strNumber = number.toString();
    const reversedNumber = strNumber.split("").reverse().join("");

    return strNumber === reversedNumber;
  }))(palss);

console.log(palindromeNumbersss);
//Return median of two sorted arrays of the same size using anonymous function
console.log(
  "Return median of two sorted arrays of the same size using anonymous function ?"
);
const nums1 = [1, 3, 5];
const nums2 = [4, 5, 6];
function Median(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = merged.length;

  if (length % 2 === 1) {
    return merged[Math.floor(length / 2)];
  } else {
    const mid = length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}

const median = Median(nums1, nums2);
console.log(median);

//Return median of two sorted arrays of the same size using IIFE function
console.log(
  "Return median of two sorted arrays of the same size using IIFE function ?"
);
const medians = (() => {
  function Medians(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;

    if (length % 2 === 1) {
      return merged[Math.floor(length / 2)];
    } else {
      const mid = length / 2;
      return (merged[mid - 1] + merged[mid]) / 2;
    }
  }

  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];

  return Medians(nums1, nums2);
})();

console.log(medians);
//Rotate an array by k times in anonymous function
console.log("Rotate an array by k times in anonymous function ?");
const myArray = [1, 2, 3, 4, 5];
const k = 2;
const rotateArray = function (arr, k) {
  const n = arr.length;
  k = k % n;

  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n;
    rotatedArray[newIndex] = arr[i];
  }

  return rotatedArray;
};

const rotated = rotateArray(myArray, k);
console.log(rotated);
//Rotate an array by k times in IIFEfunction
console.log("Rotate an array by k times in IIFE function ?");
const cla = [3, 5, 7, 9, 4];
const p = 2;

const rotateds = (() => {
  const n = cla.length;
  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    const newIndex = (i + p) % n;
    rotatedArray[newIndex] = cla[i];
  }

  return rotatedArray;
})();

console.log(rotateds);

//Remove duplicates from an array  using anonymous function?
console.log("Remove duplicates from an array using anonymous function??");

const hh = [1, 2, 2, 3, 4, 4, 5];

const uarr = (function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result[result.length] = arr[i];
    }
  }
  return result;
})(hh);

console.log(uarr);

//Remove duplicates from an array  using IIFE function?
console.log("Remove duplicates from an array using IIFE function? ?");

const hhh = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7];

const usarr = (() => {
  const results = [];

  for (let i = 0; i < hhh.length; i++) {
    if (!results.includes(hhh[i])) {
      results[results.length] = hhh[i];
    }
  }

  return results;
})();

console.log(usarr);