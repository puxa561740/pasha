import styled from 'styled-components';

const Heading = ()=>{

  return (
  <S.Wrapper>
    <h1>Ремон обуви любой сложности</h1>
    <h2> Изготовление ключей и чипов</h2>
    <h2>Заточка ножей и ножниц</h2>
  </S.Wrapper>
  )
};

export default Heading;

const S = {
  Wrapper: styled.div`
  `
}