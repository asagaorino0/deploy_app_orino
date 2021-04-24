import { ALART, INCREMENT, DECREMENT, RESET, ADD_EVENT, GUU, CHOKI, PAA, GET_DATA, NAME_GOOGLE, NAME_EMAIL, NAME_LOGOUT } from '../actions/index'

const reducer = (state, action) => {
    switch (action.type) {
        case NAME_GOOGLE:
            return { ...state, name: action.name + "でログインしています。", nameH: action.name };
        case NAME_EMAIL:
            return { ...state, name: action.name + "でログインしています。", nameH: action.name };
        case NAME_LOGOUT:
            return { ...state, name: action.name, nameH: [] };
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
            var array1 = ['ぐっ', 'ちょき！', 'ぱ～'];
            const cpu1 = array1[Math.floor(Math.random() * array1.length)]
            if (cpu1 === 'ぐっ') {
                return { ...state, cpu: cpu1, me: 'ぐー', syouhai: "引分" };
            }
            if (cpu1 === 'ちょき！') {
                return { ...state, cpu: cpu1, me: 'ぐー', syouhai: "勝" };
            }
            if (cpu1 === 'ぱ～') {
                return { ...state, cpu: cpu1, me: 'ぐー', syouhai: "負" };
            }
            break
        case CHOKI:
            var array2 = ['ぐっ', 'ちょき！', 'ぱ～'];
            const cpu2 = array2[Math.floor(Math.random() * array2.length)]
            if (cpu2 === 'ちょき！') {
                return { ...state, cpu: cpu2, me: 'ちょき', syouhai: "引分" };
            }
            if (cpu2 === 'ぱ～') {
                return { ...state, cpu: cpu2, me: 'ちょき', syouhai: "勝" };
            }
            if (cpu2 === 'ぐっ') {
                return { ...state, cpu: cpu2, me: 'ちょき', syouhai: "負" };
            }
            break
        case PAA:
            var array3 = ['ぐっ', 'ちょき！', 'ぱ～'];
            const cpu3 = array3[Math.floor(Math.random() * array3.length)]

            if (cpu3 === 'ぱ～') {
                return { ...state, cpu: cpu3, me: 'ぱ～', syouhai: "引分" };
            }
            if (cpu3 === 'ぐっ') {
                return { ...state, cpu: cpu3, me: 'ぱ～', syouhai: "勝" };
            }
            if (cpu3 === 'ちょき！') {
                return { ...state, cpu: cpu3, me: 'ぱ～', syouhai: "負" };
            }
            break
        case GET_DATA:
            console.log(action.data)
            return { ...state, user_data: action.data }

        default:
            return state
    }
}

export default reducer