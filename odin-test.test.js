import { expect, test } from "@jest/globals";
import {
  capitalizeFirst,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./odin-test";

// Test 1: Capitalize the first character of a string
test("Capitalize the first character of a string", () =>
  expect(capitalizeFirst("hello")).toBe("Hello"));

test("Retain capitalization of first character of the string in capitalizeFirst function", () =>
  expect(capitalizeFirst("Hello")).toBe("Hello"));

// Test 2: Reverse the string
test("Reverse a string", () =>
  expect(reverseString("How are you doing today?")).toBe(
    "?yadot gniod uoy era woH"
  ));

// Test 3: Calculator
test("Add two numbers in the calculator object", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract two numbers in the calculator object", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Multiply two numbers in the calculator object", () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test("Divide two numbers in the calculator object", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

//Test 4: Caesar Cipher
test("Caesar Cipher: z becomes a", () =>
  expect(caesarCipher("z", 1)).toBe("a"));

test("Caesar Cipher: keeps the same character case", () =>
  expect(caesarCipher("Z", 1)).toBe("A"));

test("Caesar Cipher: keeps the same punctuation", () =>
  expect(caesarCipher("?", 2)).toBe("?"));

test("Caesar Cipher: Shifting characters positively", () =>
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  ));

//Test 5: Analye Array
test("Analyze Array: Average", () =>
  expect(analyzeArray([1, 3, 5, 7, 9])).toMatchObject({ average: 5 }));

test("Analyze Array: Min", () =>
  expect(analyzeArray([1, 3, 5, 7, 9])).toMatchObject({ min: 1 }));

test("Analyze Array: Max", () =>
  expect(analyzeArray([1, 3, 5, 7, 9])).toMatchObject({ max: 9 }));

test("Analyze Array: Length", () =>
  expect(analyzeArray([1, 3, 5, 7, 9])).toMatchObject({ length: 5 }));
