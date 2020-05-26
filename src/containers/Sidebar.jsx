import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

function Sidebar() {
  const activeStyle = {
    color:'#0B1118',
    fontWeight:'bold',
  }
  return (
    <Ulist>
      <Listitem>
        <NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink>
      </Listitem>
      <Listitem>
        <NavLink exact to="/notices" activeStyle={activeStyle}>공지사항</NavLink>
      </Listitem>
      <Listitem>
        <NavLink exact to="/settings" activeStyle={activeStyle}>설정</NavLink>
      </Listitem>
    </Ulist>
  )
}
export default Sidebar;

const Listitem = styled.li`
  font-size: 16px;
  padding: 24px 22%;
  border-bottom: 1px solid #f7f8f9;
`; 
const Ulist = styled.ul`
  /* display:inline-block */
  width:100%;
`;
