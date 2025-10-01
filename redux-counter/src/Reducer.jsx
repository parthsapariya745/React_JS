export let reducer = (state = 0, action) => {
    switch(action.type) {
        case "IN": 
            return state + 1
        case "DEC": 
            return state > 0 ? state - 1 : state
        default:
            return state 
    }
}