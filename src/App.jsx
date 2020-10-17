import React from 'react';
import Saludador from './components/Saludador';
import Contador from './components/Contador';
import store from './redux/store';
import { Provider } from 'react-redux'



function App() {


  return (
    <Provider store={store}>
        <h1>
          Prueba Redux
        </h1>
        <Saludador/>
        <Contador/>
    </Provider>
  );
}

export default App;
