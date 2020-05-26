import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components'

import Home from './pages/Home';
import Login from './pages/Login';
import Notices from './pages/Notices';
import Settings from './pages/Settings';
import {DataProvider} from './async/DataContext';

function App() {
  return (
    <>
      <DataProvider>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/notices" component={Notices} />
        <Route path="/settings" component={Settings} />
      </DataProvider>
      <DivRouterGuide>
          <Link to="/">홈 페이지</Link>
          <Link to="/login">로그인 페이지</Link>
          <Link to="/notices">공지사항 페이지</Link>
          <Link to="/settings">세팅 페이지</Link>
      </DivRouterGuide>
    </>
  );
}

const DivRouterGuide = styled.div`
  padding:14px;
  position:absolute;
  top:0;
  right:0;
  background:skyblue;
  display:flex;
  flex-direction: column;
`;

export default App;