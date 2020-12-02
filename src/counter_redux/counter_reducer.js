import { INCREMENT, DECREMENT } from './counter_action';
const initalState = {
    counter : 0
}

let counterReducer = (state=initalState,action) =>{
    switch(action.type) {
        case INCREMENT :
            return {
                counter: state.counter + 1
            };
        case DECREMENT : 
            return  {
                counter : state.counter - 1
            }
        default : 
            return state;
    }
}
export default counterReducer;