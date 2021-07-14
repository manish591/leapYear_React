import { useState } from "react";
import "./styles.css";

export default function App() {
  let dateOfBirth;
  const [output, setOutput] = useState("");

  function setDate(e) {
    let dateNum = e.target.value.replaceAll("-", "").slice(0, 4);
    dateOfBirth = Number(dateNum);
  }

  function showLeap() {
    if (dateOfBirth % 4 === 0) {
      if (dateOfBirth % 100 === 0) {
        if (dateOfBirth % 400 === 0) {
          setOutput("This year is a leap year!");
        } else {
          setOutput("This year is not a leap year!");
        }
      } else {
        setOutput("This year is a leap year!");
      }
    } else {
      setOutput("Your birth year is not a leap year!");
    }
  }

  return (
    <div className="App">
      <h1>Is Your Birth Year A Leap Year?</h1>
      <p>
        This app will tests whether your birthyear is leap uear or not. Leap
        year comes once in every four year and has 366 days one more than usual
        years.
      </p>
      <input onChange={setDate} type="date" />
      <button onClick={showLeap}>Calculate</button>
      <h2>{output}</h2>
    </div>
  );
}
