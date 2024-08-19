import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("Sum", () => {
  // Pengujian untuk penjumlahan biasa
  it("should sum correctly", () => {
    const operandA = 1;
    const operandB = 1;
    const actualValue = sum(operandA, operandB);
    const expectedValue = 2;
    assert.strictEqual(actualValue, expectedValue);
  });

  // Pengujian jika ada string yang dimasukkan sebagai parameter
  it("should return 0 if string passed as numA parameter", () => {
    const operandA = "5";
    const operandB = 4;
    const actualValue = sum(operandA, operandB);
    const expectedValue = 0;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should return 0 if string passed as numB parameter", () => {
    const operandA = 10;
    const operandB = "8";
    const actualValue = sum(operandA, operandB);
    const expectedValue = 0;
    assert.strictEqual(actualValue, expectedValue);
  });

  // Pengujian jika salah satu parameter adalah angka negatif
  it("should return 0 if any parameter is negative", () => {
    const operandA = -1;
    const operandB = 10;
    const actualValue = sum(operandA, operandB);
    const expectedValue = 0;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should return 0 if both parameters are negative", () => {
    const operandA = -5;
    const operandB = -10;
    const actualValue = sum(operandA, operandB);
    const expectedValue = 0;
    assert.strictEqual(actualValue, expectedValue);
  });

  // Pengujian jika kedua parameter adalah angka 0
  it("should return 0 if both parameters are 0", () => {
    const operandA = 0;
    const operandB = 0;
    const actualValue = sum(operandA, operandB);
    const expectedValue = 0;
    assert.strictEqual(actualValue, expectedValue);
  });
});
