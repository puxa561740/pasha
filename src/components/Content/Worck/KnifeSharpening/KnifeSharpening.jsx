import styled from 'styled-components';

const KnifeSharpening = ()=>{

  return (
    <S.Wrapper>
      <h1>Заточка ножей, ножниц</h1>
      <ol>
        <li><span>Заточка прямых ножниц</span></li>
        <li><span>Заточка маникюрного инструмента</span></li>
        <li><span>Портновских ножниц</span></li>
        <li><span>Заточка кухонных ножей</span></li>
        <li><span>Заточка бытового инструмента</span></li>
        <li><span>Топоров</span></li>
        <li><span>Стамески</span></li>
        <li><span>Бытовой инструмент</span></li>
        <li><span>Ножи для рубанков</span></li>
      </ol>
    </S.Wrapper>
    )
};

export default KnifeSharpening;

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