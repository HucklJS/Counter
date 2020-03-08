export const reducer = (state = 0, action) => {
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
