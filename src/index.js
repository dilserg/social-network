import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {
  scrollDown,
  sendMessage,
  showFull,
  subscribe,
  updateInputMessage,
} from "./state/state";
import ReactDOM from "react-dom";
import App from "./App";

const renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App showFull={showFull} sendMessage={sendMessage} scrollDown={scrollDown}
           state={state} updateInputMessage={updateInputMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree(state);
subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

