import React from 'react';
import styled from 'styled-components';

function Headers() {
  return (
    <Header>
      로고
      현장등록 버튼
    </Header>
  )
}

export default Headers;

const Header = styled.header`
  width:100%;
  min-height:80px;
  background: #333E51;
`;