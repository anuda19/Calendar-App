import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import store from "./component/Store";
import {Provider} from 'react-redux';
import Calender from './component/Clender'

  function App(){
    return(
    <>
      <Provider store={store}>
        <Calender />
      </Provider>
    </>
  );
}

export default App;
