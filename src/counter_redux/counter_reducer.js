import { INCREMENT, DECREMENT } from './counter_action';
const initalState = {
    counter : 0,
    name:"Nothing"
}

let counterReducer = (state=initalState,action) =>{
    switch(action.type) {
        case INCREMENT :
            return {
                counter: state.counter + 1,
                name: action.payload
            };
        case DECREMENT : 
            return  {
                counter : state.counter - 1,
                name:action.payload
            }
        default : 
            return state;
    }
}
export default counterReducer;