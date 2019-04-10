let intialState = {
    stats: "Skills"
}

let reducer = (state = intialState, action) => {
    let { type } = action;
    if (type === "SKILLS") {
        return {
            ...state,
            stats: "Skills"
        }
    } else if (type === "PROJECTS") {
        return {
            ...state,
            stats: "Projects"
        }
    } else if (type === "ABOUT") {
        return {
            ...state,
            stats: "About"
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducer;