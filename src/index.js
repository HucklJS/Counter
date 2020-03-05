import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state > 0 ? state - 1 : 0;
        case "RES":
            return 0;
        case "DOWNLOAD":
            return action.value;
        default:
            return state;
    }
};

const store = createStore(reducer);
const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const res = () => ({type: "RES"});
const download = value => ({type: "DOWNLOAD", value});
const update = () => {
    document.querySelector(".counter").textContent = store.getState();
};

document.querySelector(".plus-btn").addEventListener("click", () => {
    store.dispatch(inc());
});

document.querySelector(".minus-btn").addEventListener("click", () => {
    store.dispatch(dec());
});

document.querySelector(".reset-btn").addEventListener("click", () => {
    store.dispatch(res());
});

document.querySelector(".download-btn").addEventListener("click", () => {
    fetch("http://localhost:3001/numbers")
        .then(res => res.json())
        .then(numbers => {
            const randomI = Math.floor(Math.random() * 3);
            const randomNum = +numbers[randomI].const;
            store.dispatch(download(randomNum));
        });
});

document.querySelector(".upload-btn").addEventListener("click", () => {
    const data = {
        saved: document.querySelector(".counter").textContent
    };
    console.log(`before fetch ${JSON.stringify(data)}`);
    fetch("http://localhost:3001/numbers", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.text())
        .then(myJson => console.log(`after ${myJson}`));
});

store.subscribe(update);
