# Smart Helpers

**Smart Helpers** is a Node.js module providing a collection of smart helper functions for various purposes.

## Installation

You can install this module via npm: `npm install smart-helpers`

## Usage

```javascript
const smartHelpers = require('smart-helpers');

// Calculate the factorial of a number
console.log('Factorial of 5:', smartHelpers.factorial(5));

// Check if a year is a leap year
const year = 2024;
console.log(`${year} is a leap year:`, smartHelpers.isLeapYear(year));

// Format a date using moment.js
const date = new Date();
console.log('Formatted date:', smartHelpers.formatDate(date, 'YYYY-MM-DD'));

```
