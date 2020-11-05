import React, {Component} from 'react';
import './App.css';
import Alert from './Components/Alert';

//impor element alert yang telah di buat 

class App3 extends Component {

  render() {

    return(

      <div className="App container col-sm-6">
       <Alert />
       <Alert />
       <Alert />
      </div>
    );
  }
}
export default App3;
