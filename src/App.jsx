import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display'

function App() {
  const [color, setColor] = useState([]);
  

  return (
    <div className={"App container"}>
      <Form 
        color={color}
        setColor={setColor}
      />
      <Display 
        color={color}
      />
    </div>
  );
}

export default App;
