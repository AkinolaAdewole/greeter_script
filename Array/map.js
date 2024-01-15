const bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

const totals = bills.map(bill => bill * 1.15); // Calculate 15% tip and add to each bill amount
const totalz = bills.map(bill => bill);

console.log(totals); // Output the new totals array with 15% tip added
console.log(totalz);
