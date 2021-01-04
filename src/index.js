import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const Apps = () => {
  return (
    <div>
      <App />
    </div>
  )
};

ReactDOM.render(<Apps />, document.querySelector('#root'));