"use client";
import React, { useState } from "react";
import "./page.css";
import Button from "./Button.js";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleNumber = (value) => {
    setExpression(expression + value);
  };

  const handleEqual = () => {
    try {
      setExpression(evaluateExpression(expression));
    } catch {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };
  const handleClearEntry = () => {
    setExpression(expression.slice(0, -1));
  };

  const evaluateExpression = (expr) => {
    const operators = ["+", "-", "*", "/"];
    const numbers = expr.split(new RegExp(`([\\${operators.join("\\") }])`)).filter(Boolean);

    let result = parseFloat(numbers[0]);
    for (let i = 1; i < numbers.length; i += 2) {
      const operator = numbers[i];
      const nextNumber = parseFloat(numbers[i + 1]);
      if (isNaN(nextNumber)) throw new Error("Invalid Expression");

      switch (operator) {
        case "+":
          result += nextNumber;
          break;
        case "-":
          result -= nextNumber;
          break;
        case "*":
          result *= nextNumber;
          break;
        case "/":
          result /= nextNumber;
          break;
        default:
          throw new Error("Invalid Operator");
      }
    }
    return result.toString();
  };

  return (
    <main className="main">
      <h1 className="titre">Calculator</h1>
      <div className="div">
        <div className="display">{expression}</div>
        <div className="buttons">
          <Button number="9" callback={() => handleNumber("9")} />
          <Button number="8" callback={() => handleNumber("8")} />
          <Button number="7" callback={() => handleNumber("7")} />
          <Button number="+" callback={() => handleNumber("+")} />

          <Button number="6" callback={() => handleNumber("6")} />
          <Button number="5" callback={() => handleNumber("5")} />
          <Button number="4" callback={() => handleNumber("4")} />
          <Button number="-" callback={() => handleNumber("-")} />

          <Button number="3" callback={() => handleNumber("3")} />
          <Button number="2" callback={() => handleNumber("2")} />
          <Button number="1" callback={() => handleNumber("1")} />
          <Button number="*" callback={() => handleNumber("*")} />

          <Button number="0" callback={() => handleNumber("0")} />
          <Button number="=" callback={handleEqual} />

          <Button number="/" callback={() => handleNumber("/")} />
          <Button number="." callback={() => handleNumber(".")} />
          <Button number="C" callback={handleClear} />
          <Button number="CE" callback={handleClearEntry} className="special" />
         


        </div>
      </div>
    </main>
  );
};

export default Calculator;
