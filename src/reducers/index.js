import { ALART, INCREMENT, DECREMENT, RESET, ADD_EVENT } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: 0 };
        case ADD_EVENT:
            console.log('action', action.title)
            if (action.title === "") {
                return { ...state, nandemo: "", error: "こら～" };
            }
            else {
                return { ...state, nandemo: action.title, error: "" };
            };
        case ALART:
            console.log('Hello world');
            if (action.title === "") {
                return { ...state, alart: "HELLO WORLD" }
            }
            else {
                return { ...state, alart: action.title }
            };

        default:
            return state
    }
}

export default reducer