import React from 'react';

function PatientCheckup({currPatient}) {
  const cp = currPatient;
  return (
    <>
      {/* 현재검진중 */}
      현재검진중
      {/* 남은대기인원 */}
      남은대기인원 {cuuu}
      {/* 환자카드 */}
      환자카드
        {/* 순번 */}
        순번
        {/* 이름 */}
        이름
        {/* 전화번호 */}
        전화번호
      {/* 검진완료 버튼 */}
      검진완료 버튼
    </>
  )
}

export default PatientCheckup;

PatientCheckup.defaultProps = {
  currPatient: {
    id: 2,
    waitingOrder: 2,
    name: "홍oo",
    phoneNum: "010-1234-5678",
    status: "진료중",
  }
}