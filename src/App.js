import React, { Component } from 'react'
import './App.css'; 
import Counter from './counterView/counter';
import { store } from './counter_redux/counter_store';
import Header from './header';
import {Provider} from 'react-redux';
import Ideainputform from './ideainputform'

import Mainpage from './mainpage';

import BasicChange from './practice/basicChange';


// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Car/>
//         <Class1/>
        
//       </div>
//     )
//   }
// }

// export default App




function App() {
  return (
    <div>
      <Provider store={store}>
   
      <Header/>
      <Counter/>
      </Provider>
      {/* <BasicChange/>
      <Ideainputform/> */}
      


    </div>
  );
}

export default App;
