import { useState } from "react";
import { SlCalculator } from "react-icons/sl";
import Button from "./components/Button";
import Input from "./components/Input";
import H1 from "./components/H1";

function App() {
  const [total, setTotal ] = useState(0);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

  const clickCalculate = (symbol)=> {
    try {
      let results;
      switch (symbol){
        case "+":
          results = firstNumber + secondNumber;
          break;
        case "-":
          results = firstNumber - secondNumber;
          break;
        case "*":
          results = firstNumber * secondNumber;
          break;
        case "/":
          results = secondNumber !== 0 ? firstNumber / secondNumber : "Cannot divide by zero";
          break;
        default:
          results = "invalid please try again";
          break;
      }
      setTotal(results);
    } catch (error) {
      alert(error);
    }
  }
  


  return (
    <div className="card">
      <H1>
        <SlCalculator />
        React Calculator
      </H1>
      <H1>{total}</H1>
      <label>First Number</label>
      <Input 
        type="number" 
        defaultValue={firstNumber}
        placeholder="Enter your first number" 
        onChange={(e)=>  setFirstNumber(Number(e.target.value))} 
        required
      />
      <label>Second Number</label>
      <Input 
        type="number" 
        defaultValue={secondNumber}
        placeholder="Enter your second number"  
        onChange={(e)=>  setSecondNumber(Number(e.target.value))}
        required
      />
      <Button onClick={()=> clickCalculate("+")}>
        Add
      </Button>
      <Button onClick={() => clickCalculate("-")}>Subtract</Button>
      <Button onClick ={() =>clickCalculate("*")}>Multiply</Button>
      <Button onClick={() => clickCalculate("/")}>Divide</Button>
    </div>
  );
}

export default App;
