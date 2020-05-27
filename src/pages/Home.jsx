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
  display:flex;
  flex-direction:column;
  margin:30px 80px;
  width:100%;
  max-width: 1320px;
`;
const PatientTableContainer = styled.article`
  background:pink;
  max-width:880px;
  min-height:784px;
`;
const DateSelectorContainer = styled.div`
background:skyblue;
  max-width:420px;
height:10px;
`;
const PatientCheckupContainer = styled.div`
background:red;
  max-width:420px;
height:10px;
`;