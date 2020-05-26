import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components'

import Headers from './containers/Headers';
import Sidebar from './containers/Sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import Notices from './pages/Notices';
import Settings from './pages/Settings';
import {DataProvider} from './async/DataContext';

function App() {
  return (
    <Wrapper>
      <Headers/>
      <Content>
        <Nav>
          <Sidebar currPage="home" />
        </Nav>
        <MainArea>
          <DataProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/notices" component={Notices} />
              <Route path="/settings" component={Settings} />
              <Route render={(location)=>(
                <>
                  <h2>이 페이지는 존재하지 않습니다.</h2>
                  <p>{location.pathname}</p>
                </>
              )}/>
            </Switch>
          </DataProvider>
        </MainArea>
      </Content>
      {/* <DivRouterGuide>
          <Link to="/">홈 페이지</Link>
          <Link to="/login">로그인 페이지</Link>
          <Link to="/notices">공지사항 페이지</Link>
          <Link to="/settings">세팅 페이지</Link>
      </DivRouterGuide> */}
    </Wrapper>
  );
}
export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
`;
const Nav = styled.nav`
  display: flex;
  flex: none;
  width:15%;
  max-width: 300px;
  min-width: 250px;
  background:#fff;
`;
const MainArea = styled.main`
  display: flex;
  flex: 1;
  overflow: auto;
`;


// const DivRouterGuide = styled.div`
//   padding:14px;
//   position:absolute;
//   top:0;
//   right:0;
//   background:skyblue;
//   display:flex;
//   flex-direction: column;
// `;