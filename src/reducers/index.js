import { ALART, INCREMENT, DECREMENT, RESET, ADD_EVENT, GUU, CHOKI, PAA } from '../actions/index'

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
        case GUU:
            var array = ['ぐー', 'ちょき', 'ぱー'];
            const cpu1 = array[Math.floor(Math.random() * array.length)]
            return { ...state, cpu: cpu1, me: 'ぐー' };
        case CHOKI:
            var array = ['ぐっ', 'ちょき！', 'ぱ～'];
            const cpu2 = array[Math.floor(Math.random() * array.length)]
            return { ...state, cpu: cpu2, me: 'ちょき' };
        case PAA:
            var array = ['ぐっ', 'ちょき！', 'ぱ～'];
            const cpu3 = array[Math.floor(Math.random() * array.length)]
            return { ...state, cpu: cpu3, me: 'ぱー' };

        default:
            return state
    }
}

export default reducer