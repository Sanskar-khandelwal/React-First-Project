import React from 'react';
import ReactDOM from 'react-dom/client';
import MainContent from './MainContent';
import Footer from './Footer';
import Header from './Header';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';






function Page (){
  return (
    <div>
    <Header/>
    <MainContent/>
    <Footer/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page/>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
