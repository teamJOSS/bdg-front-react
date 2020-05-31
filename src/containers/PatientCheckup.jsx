import React from 'react';
import styled from 'styled-components';

function PatientCheckup({currPatient, patientsCnt, }) {
  const cp = currPatient;
  return (
    <>
      {/* 현재검진중 */}
      <h2>현재검진중</h2>
      {/* 남은대기인원 */}
      <span>
        남은대기인원 <span>{patientsCnt}</span>명
      </span>
      {/* 환자카드 */}
      <ArtclCurrPatientCard>
        {/* 순번 */}
        <SpanOrder>
          {currPatient.waitingOrder}
        </SpanOrder>
        {/* 이름 */}
        이름
        {/* 전화번호 */}
        전화번호
      {/* 검진완료 버튼 */}
      </ArtclCurrPatientCard>
      검진완료 버튼
    </>
  )
}

export default PatientCheckup;
const ArtclCurrPatientCard = styled.article`
  border: 2px solid #00D17D;
  padding: 24px 30px 37px;
  border-radius:10px;
`;
const SpanOrder = styled.span`
  font-size: 70px;
  text-align: center;
  letter-spacing: -3.5px;
  color: #00D17D;
  opacity: 1;
`;

const data = JSON.parse(`
  {
    "data":[ 
      { "id": 1,"waitingOrder": 1,"name": "김oo", "remark":"피자 중독 증세", "regDate":"1590579857158",
        "phoneNum":"010-1234-5678","isInfected":false,"status":"음성" },
      { "id": 2, "waitingOrder": 2, "name": "홍oo",  "remark":"라면 중독 증세", "regDate":"1590579857158",
        "phoneNum":"010-1234-5678", "isInfected": false, "status":"양성" },
      { "id": 9, "waitingOrder": 3, "name": "박oo",  "remark":"에어팟 중독 증세", "regDate":"1590579857158",
        "phoneNum":"010-1234-5678", "isInfected": false, "status":"진료중" },
      { "id": 4, "waitingOrder": 4, "name": "이oo",  "remark":"바닐라 쉐이크 중독", "regDate":"1590579857158",
        "phoneNum":"010-1234-5678", "isInfected": false, "status":"진료대기" },
      { "id": 36, "waitingOrder": 5, "name": "심oo",  "remark":"호박 파이 중독", "regDate":"1590579857158",
        "phoneNum":"010-1234-5678", "isInfected": false, "status":"진료대기" },
      { "id": 23, "waitingOrder": 6, "name": "성oo",  "remark":"경양식 중독에 시달렸다고 함", "regDate":"1590579857158",
        "phoneNum":"010-1234-5678", "isInfected": false, "status":"진료대기" }
    ]
  }
`);
PatientCheckup.defaultProps = {
  date: "1590579857158",
  patientsCnt: 70,
  restPatientsCnt: 69,
  status: 1,
  totalPage: 10,
  currPage: 1,
  currPatient: {
    id: 2,
    waitingOrder: 2,
    name: "박수현",
    phoneNum: "010-1234-5678",
    status: 1,
  },
  dataSource: data.data,
  columns: [
    {title: '순번', dataIndex: 'waitingOrder', key: 'waitingOrder', }, 
    {title: '이름', dataIndex: 'name', key: 'name', }, 
    {title: '전화번호', dataIndex: 'phoneNum', key: 'phoneNum', }, 
    {title: '비고', dataIndex: 'remark', key: 'remark', },
    {title: '등록시간', dataIndex: 'regDate', key: 'regDate', }, 
    {title: '상태', dataIndex: 'status', key: 'status', }, 
  ]
}