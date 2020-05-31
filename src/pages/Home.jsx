import React from 'react';
import styled from 'styled-components';
import NoticeBar from '../containers/NoticeBar';
import PatientTable from '../containers/PatientTable';
import DateSelector from '../containers/DateSelector';
import PatientCheckup from '../containers/PatientCheckup';

function Home() {
  return (
    <SectionHome>
      <NoticeBar/>
      <PatientTableContainer>
        <PatientTable/>
      </PatientTableContainer>
      <DateSelectorContainer>
        <DateSelector/>
      </DateSelectorContainer>
      <PatientCheckupContainer>
        <PatientCheckup/>
      </PatientCheckupContainer>
    </SectionHome>
  )
}
export default Home;

const SectionHome = styled.section`
  margin:30px 80px;
  width:100%;
  max-width: 1320px;
  height:860px;
`;
const PatientTableContainer = styled.article`
  background:#fff;
  border-radius:8px;
  border: 1px solid #E1E5EF;
  float:left;
  width:880px;
  height:784px;
  box-sizing:border-box;
  padding:24px 36px 38px;
  margin-right:20px;
`;
const DateSelectorContainer = styled.div`
  background:#fff;
  border-radius:8px;
  border: 1px solid #E1E5EF;
  float:left;
  margin-bottom:20px;
  width:420px;
  height:390px;
  box-sizing:border-box;
  padding:41px 66px 66px 66px;
`;
const PatientCheckupContainer = styled.div`
  background:#fff;
  border-radius:8px;
  border: 1px solid #E1E5EF;
  float:left;
  width:420px;
  height:374px;
  box-sizing:border-box;
  padding:24px 36px 30px;
`;