import React from 'react';
import styled from 'styled-components';

function NoticeBar({noticeArr}) {
  return (
    <Div>
      <SpanLabel>공지사항</SpanLabel>
      <SpanNotice>{noticeArr[0]}</SpanNotice>
    </Div>
  )
}

export default NoticeBar;

const Div = styled.div`
  width:100%;
  border-radius:8px;
  box-sizing: border-box;
  padding: 14px 36px;
  background: #fff;
  border: 1px solid #EFF1F4;
  word-wrap: normal;

`;
const SpanLabel = styled.span`

`;
const SpanNotice = styled.span`

`;
NoticeBar.defaultProps = {
  noticeArr: ['최근 코로나19 확산 방지를 위한 사회적 거리운동의 일환으로 모든 병원 관계자분들께 내원 환자들 사이 2M 거리를 유지시켜 달라는 당부 말씀 드립니다']
}