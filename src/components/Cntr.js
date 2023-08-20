import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { increase, decrease } from "../store/CounterSlice";
import { login, logout } from "../store/AuthSlice";
import { useCallback, useEffect } from "react";

const Cntr = () => {
  const globalState = useSelector((state) => state);
  const dis = useDispatch();

  const isLogged = () => {
    return globalState.auth.isLogged;
  };

  const handleLogin = (status) => {
    //console.log(status);

    if (status) {
      dis(logout());
    } else {
      dis(login());
    }
  };

  const counterHandler = useCallback(
    (type, num) => {
      if (type === "increase") {
        dis(increase(num));
      }
      if (type === "decrease") {
        dis(decrease(num));
      }
    },
    [dis]
  );

  useEffect(() => {
    //counterHandler("increase", 5);
    dis(increase(10));
  }, [dis]);

  return (
    <div className="App">
      <h1>Redux Basic</h1>

      {isLogged() && (
        <>
          <div className="counter">Counter :{globalState.counter.val}</div>
          <div>
            <button
              className="btn"
              onClick={() => counterHandler("increase", 5)}
            >
              Increase ++
            </button>
            <button
              className="btn"
              onClick={() => counterHandler("decrease", 2)}
            >
              Decrease --
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={() => handleLogin(isLogged())}>
          {isLogged() ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Cntr;
