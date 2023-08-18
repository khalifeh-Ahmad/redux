import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useCallback, useEffect } from "react";

const Cntr = () => {
  const disp = useDispatch();
  const globalState = useSelector((state) => state);

  // const countState = useSelector((state) => {
  //   if (state.val < 1) {
  //     return "no number";
  //   }
  //   return state.val;
  // });

  // const toggleState = useSelector((state) => {
  //   return state.showCounter;
  // });

  const handleCounter = (countVal) => {
    if (countVal < 1) {
      return "no number";
    }
    return countVal;
  };

  const counterOperation = useCallback(
    (tp, pld) => {
      console.log(pld);

      disp({ type: tp, payload: { number: pld } });
    },
    [disp]
  );

  useEffect(() => counterOperation("increase", 1), [counterOperation]);

  // const increase = () => {
  //   const action = { type: "increase", payload: { number: 2 } };
  //   disp(action);
  // };

  const toggleCounter = () => {
    const action = { type: "toggle" };
    disp(action);
  };

  return (
    <div className="App">
      <h1>Redux Basic</h1>
      {globalState.showCounter && (
        <>
          <div className="counter">
            Counter : {handleCounter(globalState.val)}
          </div>
          <div>
            <button
              className="btn"
              onClick={() => counterOperation("increase", 5)}
            >
              Increase ++
            </button>
            <button
              className="btn"
              onClick={() => counterOperation("decrease", 2)}
            >
              Decrease --
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={toggleCounter}>
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
};

export default Cntr;
