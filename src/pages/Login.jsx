import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

function Login() {

  return (
    <DivLoginPage>
      <SectionLogin>
        <h1 className="hidden">로그인 창</h1>
        {/* 로고 */}
        <img src={logoImg} alt="Asap 로고" />
        {/* 안내문구 */}
        <span>로그인 해주세요</span>
        {/* 아이디 Input */}
        <Input label={"아이디"} placeholder="아이디"/>
        {/* 비밀번호 Input */}
        <Input label={"비밀번호"} placeholder="비밀번호"/>
        {/* 로그인 버튼 */}
        <Button id="login" value="로그인"/>
        {/* 아이디비번찾기 */}
        <Link>아이디/비밀번호 찾기</Link>
        {/* 회원가입 */}
        <Link>회원가입</Link>
      </SectionLogin>
    </DivLoginPage>
  )
}

const DivLoginPage = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
`;
const SectionLogin = styled.section`
  background:#fff;
  border-radius:10px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border:1px solid #000;
  width:374px;
  height:484px;
  & img, span, input {
    display:block;
  }
`;
const Input = styled.input.attrs(props => ({
  type: "text",
}))`

`;
const Button = styled.button`

`;

export default Login;