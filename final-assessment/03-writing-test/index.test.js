import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("Sum", () => {
  it("should sum two positive numbers correctly", () => {
    // Arrange
    const operandA = 3;
    const operandB = 5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 8;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should sum two negative numbers correctly", () => {
    // Arrange
    const operandA = -3;
    const operandB = -5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = -8;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should sum a positive and a negative number correctly", () => {
    // Arrange
    const operandA = 10;
    const operandB = -5;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 5;
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should return NaN if a non-number is passed as numA", () => {
    // Arrange
    const operandA = "5";
    const operandB = 4;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    assert.strictEqual(isNaN(actualValue), true, "Expected result to be NaN");
  });

  it("should return NaN if a non-number is passed as numB", () => {
    // Arrange
    const operandA = 10;
    const operandB = "8";

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    assert.strictEqual(isNaN(actualValue), true, "Expected result to be NaN");
  });
});
