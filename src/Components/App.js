import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "Components/Routes";
import Header from "Components/Header";
import UserContextProvider from "Context";
import GlobalStyles from "Components/GlobalStyles";

const App = () => {
  return (
    <UserContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Header/>
        <Routes/>
      </Router>
      <GlobalStyles/>
    </UserContextProvider>
  );
}

export default App;
