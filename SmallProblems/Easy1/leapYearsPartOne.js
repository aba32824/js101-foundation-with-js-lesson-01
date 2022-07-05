/**
 * 
 * In the modern era under the Gregorian Calendar,
 * leap years occur in every year that is evenly divisible by 4,
 * unless the year is also divisible by 100. If the year is evenly divisible by 100,
 * then it is not a leap year, unless the year is also evenly divisible by 400.
 * 
 * Assume this rule is valid for any year greater than year 0. Write a function 
 * that takes any year greater than 0 as input and returns true if the year is
 *  a leap year, or false if it is not a leap year.
 * 
 */

const isLeapYear = (year) => {
  if (year <= 0) return `ERROR - year must be greater than zero!`;
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) return false;
    return true;
  }
  return false;
};