import styled from 'styled-components';

const RepairOfBags = ()=>{

  return (
    <S.Wrapper>
      <h1>Ремонт сумок</h1>
      <ol>
        <li><span>Ремонт кожгалантерейных изделий</span></li>
        <li><span>Ремонт сумок</span></li>
        <li><span>Ремонт женских сумочек</span></li>
        <li><span>Ремонт чемоданов</span></li>
        <li><span>Ремонт портфелей</span></li>
        <li><span>Замена молний в сумках</span></li>
        <li><span>Замена подкладки в сумке</span></li>
        <li><span>Замена ручек в сумке</span></li>
        <li><span>Замена выдвижных устройств в сумке</span></li>
        <li><span>Замена колес в сумке</span></li>
        <li><span>Устранение дефектов в сумках</span></li>
        <li><span>Устранение потертостей в сумках</span></li>
      </ol>
    </S.Wrapper>
    )
}

export default RepairOfBags;

const S = {
  Wrapper: styled.div`
  width: 80%;
  margin: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  @media(max-width: 950px) {
    width: 100%;
    margin: 0 auto;
  }
   ol {
     display: flex;
     justify-content: space-around;
     flex-wrap: wrap;
   }
   ol > li {
    margin: .2rem 1rem;
    color: red;
    span {
      color: black;
    }
   }
  `
}