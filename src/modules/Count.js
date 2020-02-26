//global state
const COUNT_UP = 'COUNT_UP';
const COUNT_DOWN = 'COUNT_DOWN';

const initialState = { 
    count : 10
}
// export function countUp () {
//     return dispatch({type: COUNT_UP});

// }
export default function reducer(state=initialState, action) {
    switch (action.type){
        case COUNT_UP: 
            return {
                ...state, 
                count: state.count+1 //stateにはinitialStateが入っていて、5行目の中にcountが入ってるから
            }
        case COUNT_DOWN: 
            return {
                ...state, 
                count: state.count-1
            }
            default: return state
    }
}

