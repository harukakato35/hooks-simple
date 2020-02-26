//global state
const CLICK_A = 'CLICK_A';
const CLICK_B = 'CLICK_B';

const initialState = { 
    click : "clickしてね"
}
// export function countUp () {
//     return dispatch({type: COUNT_UP});

// }
export default function reducer(state=initialState, action) {
    switch (action.type){
        case CLICK_A:
            return {
                ...state, 
                click: "click Aです" //stateにはinitialStateが入っていて、5行目の中にcountが入ってるから
            }
        case CLICK_B: 
            return {
                ...state, 
                click: "click Bです"
            }
            default: return state
    }
}

//rootReducerにかく
//modulesにファイルを作る->rootREducerにかくと使えるようになる

