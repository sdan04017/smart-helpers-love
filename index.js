// smart-helpers.js

const moment = require('moment');

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Function to check if a year is a leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Function to format a date using moment.js
function formatDate(date, format) {
  return moment(date).format(format);
}

module.exports = {
  factorial,
  isLeapYear,
  formatDate
};
