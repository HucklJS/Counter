import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state > 0 ? state - 1 : 0;
        case "RES":
            return 0;
        default:
            return state;
    }
};

const store = createStore(reducer);
const inc = () => ({type: "INC"});
const dec = () => ({type: "DEC"});
const res = () => ({type: "RES"});
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

store.subscribe(update);
