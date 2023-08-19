import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { increase, decrease } from "../store/CounterSlice";

const Cntr = () => {
  const globalState = useSelector((state) => state);
  const dis = useDispatch();

  return (
    <div className="App">
      <h1>Redux Basic</h1>
      <>
        <div className="counter">Counter :{globalState.counter.val}</div>
        <div>
          <button className="btn" onClick={() => dis(increase(4))}>
            Increase ++
          </button>
          <button className="btn" onClick={() => dis(decrease())}>
            Decrease --
          </button>
        </div>
      </>
      <div>
        <button className="btn">Hide/Show Counter Number</button>
      </div>
    </div>
  );
};

export default Cntr;
