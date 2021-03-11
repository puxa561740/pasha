import styled from 'styled-components';

const ShoeRepair = ()=>{

  return (
  <S.Wrapper>
    <h1>Ремонт обуви</h1>
    <ol>
      <li><span>Ремонт обуви любой сложности</span></li>
      <li><span>Замена подошвы</span></li>
      <li><span>Ремонт подошвы</span></li>
      <li><span>Установка набоек</span></li>
      <li><span>Установка профилактики</span></li>
      <li><span>Укрепление каблука</span></li>
      <li><span>Замена липучек</span></li>
      <li><span>Замена резинок</span></li>
      <li><span>Замена супинатора</span></li>
      <li><span>Замена стелек и задников</span></li>
      <li><span>Замена молний</span></li>
      <li><span>Замена бегунков</span></li>
      <li><span>Постановка заплаток</span></li>
      <li><span>Замена деталей верха обуви</span></li>
      <li><span>Заузка голенищ в сапогах</span></li>
      <li><span>Обтяжка каблука</span></li>
    </ol>
  </S.Wrapper>
  )
};

export default ShoeRepair;

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