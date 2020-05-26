import React from 'react';
import Headers from '../containers/Headers';
import Sidebar from '../containers/Sidebar';
import NoticeBar from '../containers/NoticeBar';
import PatientTable from '../containers/PatientTable';
import DateSelector from '../containers/DateSelector';
import PatientCheckup from '../containers/PatientCheckup';

function Home() {
  return (
    <>
      <Headers/>
      <Sidebar/>
      <NoticeBar/>
      <PatientTable/>
      <DateSelector/>
      <PatientCheckup/>
    </>
  )
}

export default Home;