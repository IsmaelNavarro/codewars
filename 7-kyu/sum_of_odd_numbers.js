//solution 1
const rowSumOddNumbers = (n) => 
   Array
    .from(new Array(n), (val,index) => n * (n-1) + (index * 2) + 1)
    .reduce((accumulator, number) => accumulator + number, 0);


//Solution 2
const rowSumOddNumbers2 = (n) => Math.pow(n, 3);