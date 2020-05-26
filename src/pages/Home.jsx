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
      <PatientTable/>
      <DateSelector/>
      <PatientCheckup/>
    </SectionHome>
  )
}
export default Home;

const SectionHome = styled.section`
  margin:30px 80px;
  width:100%;
`;