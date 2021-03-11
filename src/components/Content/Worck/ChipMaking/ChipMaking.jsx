import styled from 'styled-components';

const ChipMaking = ()=>{

  return (
    <S.Wrapper>
      <h1>Изготовление домофонных чипов</h1>
      <ol>
        <li><span>Изготовление домофонных чипов всех видов</span></li>
        <li><span>Домофонный ключ простой (DALLAS, CYFRAL, СТРОЙМИР, квадратик и т.п.)</span></li>
        <li><span>Домофонный ключ сложный (RC-пирс, МЕТКА, ТМ и т.п.)</span></li>
        <li><span>Домофонный ключ повышенной сложности (RW 2007, PH, МЕТКА NEW и т.п.)</span></li>
        <li><span>Замена корпуса, ремонт, перекодировка домофонного ключа</span></li>
      </ol>
    </S.Wrapper>
    )
};

export default ChipMaking;

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