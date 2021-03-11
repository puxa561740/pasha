import styled from 'styled-components';

const FittingsInstallation =()=>{

  return (
    <S.Wrapper>
      <h1>Установка фурнитуры</h1>
      <ol>
        <li><span>Услуга по замене болтов, бегунков в молниях (одежда, обувь, сумки и т.п.)</span></li>
        <li><span>Установка кнопок, блочек, заклёпок</span></li>
        <li><span>Услуга по укорачиванию ремня</span></li>
      </ol>
    </S.Wrapper>
    )
}

export default FittingsInstallation;

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