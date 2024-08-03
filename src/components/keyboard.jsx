import { operate } from "../library/functions";

import { useSelector, useDispatch } from "react-redux";
import {
  setDisplayValue,
  setFirstNum,
  setSecondNum,
  setOperator,
} from "../redux/slices/calculations";

export default function Numpad() {
  ////////////////////CONSTANTS////////////////////////////
  const buttons = [7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", "/", 0, "."];
  const operators = ["+", "-", "*", "/"];
  const displayValue = useSelector((state) => state.calculations.displayValue);
  const firstNum = useSelector((state) => state.calculations.firstNum);
  const secondNum = useSelector((state) => state.calculations.secondNum);
  const operator = useSelector((state) => state.calculations.operator);
  const dispatch = useDispatch();

  ////////////////////FUNCTIONS////////////////////////////
  function btnfunc(btn) {
    dispatch(setDisplayValue(displayValue.toString() + btn.toString()));
    if (btn == "=" && operator !== "" && secondNum !== "") {
      calc();
    } else if (btn == "=" && secondNum == "") {
      dispatch(setDisplayValue(firstNum));
      dispatch(setOperator(""));
    } else {
      if (operators.includes(btn)) {
        dispatch(setOperator(btn));
        const length = displayValue.length;
        if (operators.includes(displayValue[length - 1])) {
          dispatch(setDisplayValue(displayValue.slice(0, -1) + btn));
        } else {
          dispatch(setDisplayValue(displayValue + btn));
        }
      } else if (operator !== "") {
        const t = displayValue + btn;
        const temp = t.split(operator);
        dispatch(setSecondNum(temp[1]));
      } else {
        dispatch(setFirstNum(displayValue.toString() + btn.toString()));
        console.log("testcase", firstNum, operator);
      }
    }
  }

  function calc() {
    const value = operate(operator, firstNum, secondNum);
    console.log("calculated");
    dispatch(setDisplayValue(value));
    dispatch(setFirstNum(value));
    dispatch(setOperator(""));
    dispatch(setSecondNum(""));
  }

  function clear() {
    dispatch(setDisplayValue(""));
    dispatch(setFirstNum(""));
    dispatch(setSecondNum(""));
    dispatch(setOperator(""));
  }

  ////////////////////////////////////

  return (
    <div className="bg-zinc-900 rounded-lg flex-[7_7_0%] grid grid-cols-4 gap-2 p-4 text-white items-center">
      <button
        className="py-3 px-3 rounded-md bg-red-500 text-2xl font-bold col-span-4 hover:bg-red-700"
        onClick={() => clear()}
      >
        CLEAR
      </button>

      {buttons.map((btn) => (
        <button
          key={btn}
          className="py-3 px-3 rounded-full bg-zinc-700 text-[#ecd5b4] text-2xl font-bold aspect-square hover:bg-zinc-800 flex justify-center items-center"
          onClick={() => {
            btnfunc(btn);
          }}
        >
          {btn}
        </button>
      ))}
      <button
        className="py-3 px-3 rounded-full bg-[#dbb175] text-zinc-700 text-2xl font-bold aspect-square hover:bg-[#f0b159] hover:text-zinc-900 hover:scale-[101%] hover:duration-200 hover:ease-out duration-100 ease-in flex justify-center items-center"
        onClick={() => {
          btnfunc("=");
        }}
      >
        =
      </button>
    </div>
  );
}
