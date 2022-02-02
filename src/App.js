import logo from "./logo.svg";
import Info from "./Components/Info/Info";
import "./App.css";

import { Action } from "./Components/Action/Action";
import { Keyboard } from "./Components/Keyboard/Keys";
import { Display } from "./Components/Display/Display";
function App() {
  return (
    <div className="container">
      <Info></Info>
      <main className="phone">
        <div className="keyboard-container">
          <Keyboard></Keyboard>
        </div>
        <div className="actions">
          <Display className="number"></Display>
          <Action className="call"></Action>
          <Action className="hang"></Action>
        </div>
      </main>
    </div>
  );
}

export default App;
