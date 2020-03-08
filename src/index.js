import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {reducer} from "./reducer";
import App from "./components/app";
import {Provider} from "react-redux";

const store = createStore(reducer);

// document.querySelector(".download-btn").addEventListener("click", () => {
//     fetch("http://localhost:3001/numbers")
//         .then(res => res.json())
//         .then(numbers => {
//             const randomI = Math.floor(Math.random() * 3);
//             const randomNum = +numbers[randomI].const;
//             download(randomNum);
//         });
// });

// document.querySelector(".upload-btn").addEventListener("click", () => {
//     const data = {
//         saved: document.querySelector(".counter").textContent
//     };
//     console.log(`before fetch ${JSON.stringify(data)}`);
//     fetch("http://localhost:3001/numbers", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .then(res => res.text())
//         .then(myJson => console.log(`after ${myJson}`));
// });
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
