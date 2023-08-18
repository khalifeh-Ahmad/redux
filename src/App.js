import "./App.css";

import { Provider } from "react-redux";
import myStore from "./store/index.js";
import Cntr from "./components/Cntr";

function App() {
  return (
    <Provider store={myStore}>
      <Cntr />
    </Provider>
  );
}

export default App;
