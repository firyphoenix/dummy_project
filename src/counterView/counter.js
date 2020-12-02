

import React, { Component } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from '../counter_redux/counter_action';


let Counter = () => {
    let count = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <React.Fragment>
                <div className="container">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h3> Counter App</h3>
                        </div>
                        <div className="card-body p-5 rounded">
                            <h2 className="text-center" > {count}</h2>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-danger m-4 rounded" onClick={() =>  dispatch(decrement())}>-</button>
                            <button className="btn btn-success m-4 rounded" onClick={() =>  dispatch(increment())}>+</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
    )
}


// class counter extends Component {
//     state = {
//         counter : 0
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div className="container">
//                     <div className="card mt-5">
//                         <div className="card-header">
//                             <h3> Counter App</h3>
//                         </div>
//                         <div className="card-body p-5 rounded">
//                             <h2 className="text-center" > {state}</h2>
//                             <div className="d-flex justify-content-center">
//                             <button className="btn btn-danger m-4 rounded" onClick={}>-</button>
//                             <button className="btn btn-success m-4 rounded">+</button>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
                
//             </React.Fragment>
//         )
//     }
// }

export default Counter
