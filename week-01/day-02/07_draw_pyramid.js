'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (var i = 0; i < lineCount; i++){
  console.log(' '.repeat(lineCount - i - 1) + '*'.repeat(2 * i + 1));
}