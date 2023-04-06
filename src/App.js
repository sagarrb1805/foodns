import logo from './logo.svg';
import './App.css';
import { Provider, createStoreHook } from 'react-redux';

import store from './store';
import Posts from './components/Rests';




function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
