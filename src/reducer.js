let intialState = {
    stats: "skills"
}

let reducer = (state = intialState, action) => {
    let { type } = action;
    if (type === "SKILLS") {
        return {
            ...state,
            stats: "skills"
        }
    } else if (type === "PROJECTS") {
        return {
            ...state,
            stats: "projects"
        }
    } else if (type === "ABOUT") {
        return {
            ...state,
            stats: "about"
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducer;