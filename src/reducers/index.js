import { INCREMENT, DECREMENT, RESET, ADD_EVENT } from '../actions/index'

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
            return { ...state, nandemo: action.title }

        default:
            return state
    }
}

export default reducer