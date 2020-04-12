import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Notices from './pages/Notices';
import Settings from './pages/Settings';

function App() {
  return (
    <>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
      <Route path="/notices" component={Notices} />
      <Route path="/settings" component={Settings} />
    </>
  );
}

export default App;