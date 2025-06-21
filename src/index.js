import React from 'react';
import ReactDOM from 'react-dom/client';
import QuizApp from './App';
import './index.css'; // or './App.css' depending on your style file name

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>
);
